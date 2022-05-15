<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\UserWallet;
use App\Service\Transfer;
use App\Utility\CurrencyConversionUtility;

class TransferController extends Controller
{

    private $mandatory_request_params = ["wallet_number", "amount"];

    public function initiate_transfer(Request $request)
    {

        $request_data = $request->all();

        $validator_response  = $this->validator_response($request_data);

        if ($validator_response->getData()->result == false) {
            return $validator_response;
        }

        $sender = User::where('id', auth()->user()->id)->with('user_wallet')->first();

        $receiver = User::with(['user_wallet' => function ($query) use ($request_data) {
            $query->where('wallet_number', '=', $request_data['wallet_number']);
        }])->first();

        $receiver =  User::where('id', function ($query) use ($request_data) {
            $query->select('user_id')
                ->from(with(new UserWallet())->getTable())
                ->where('wallet_number', '=', $request_data['wallet_number']);
        })->first();

        if ($sender == null || $sender->user_wallet == null) {
            return response()->json([
                'result'    => false,
                'message'   => "Sender wallet not found"
            ]);
        }

        if ($receiver == null || $receiver->user_wallet == null) {
            return response()->json([
                'result'    => false,
                'message'   => "Receiver wallet not found"
            ]);
        }

        //dd($sender, $receiver);

        $sending_amount_in_usd = floatval(CurrencyConversionUtility::convert_to_usd($request_data['amount'], $sender->user_wallet->default_currency));
        $sender_balance = floatval($sender->user_wallet->balance);

        if ($sending_amount_in_usd > $sender_balance) {

            return response()->json([
                'result'    => false,
                'message'   => "You do not have enough usd equivalent to transfer"
            ]);
        }


        return $this->process($sender, $receiver, $sending_amount_in_usd, floatval($request_data['amount']));
    }

    //validating the user request
    function validator_response($request_data)
    {
        // 1. Check for missing parameters
        $params =  array_keys($request_data);
        $missing_params =  array_diff($this->mandatory_request_params, $params);

        if (!empty($missing_params)) {
            $stringified_missing_params = implode(",", $missing_params);
            return response()->json([
                'result'    => false,
                'message'   => "These params are mandatory : $stringified_missing_params"
            ]);
        }

        // 2. Amount Validation
        if (empty($request_data['amount']) || !is_numeric($request_data['amount']) ||floatval($request_data['amount']) < 0.00) {
            return response()->json([
                'result'    => false,
                'message'   => "Given amount is invalid"
            ]);
        }

        // 3. Wallet number Validation
        if (empty($request_data['wallet_number'])) {
            return response()->json([
                'result'    => false,
                'message'   => "Need wallet number"
            ]);
        }

        // Passes !
        return response()->json([
            'result'    => true,
            'message'   => "Everything is ok"
        ]);
    }

    private function process(&$sender, &$receiver, $amount, $amount_in_sender_currency)
    {
        $transfer  = new Transfer();

        return $transfer->initiate($sender, $receiver, $amount, $amount_in_sender_currency);
    }
}
