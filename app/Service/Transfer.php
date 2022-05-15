<?php

namespace App\Service;

use App\Mail\WalletTransferNotification;
use App\Models\UserWallet;
use App\Models\UserWalletTransaction;
use App\Utility\WalletUtility;
use Illuminate\Support\Facades\Mail;

class Transfer
{

    public function initiate(&$sender, &$receiver, $amount, $amount_in_sender_currency)
    {

        $transaction_number = WalletUtility::create_unique_transaction_number();

        try {
            \DB::beginTransaction();

            $wallet_transaction  = new UserWalletTransaction();

            $wallet_transaction->transaction_number = $transaction_number;
            $wallet_transaction->sender_id = $sender->id;
            $wallet_transaction->receiver_id = $receiver->id;
            $wallet_transaction->action = "transfer";
            $wallet_transaction->amount_in_usd = $amount;
            $wallet_transaction->amount_in_sender_currency = $amount_in_sender_currency;
            $wallet_transaction->sender_currency = $sender->user_wallet->default_currency;

            $wallet_transaction->save();

            UserWallet::where('user_id', $sender->id)
                ->update(['balance' => $sender->user_wallet->balance - $amount]);

            UserWallet::where('user_id', $receiver->id)
                ->update(['balance' => $sender->user_wallet->balance + $amount]);


            \DB::commit();
        } catch (\Exception  $e) {

            \DB::rollback();
            return response()->json([
                'result'    => false,
                'message'   => "Transfer Failed"
            ]);
        } catch (\Throwable $th) {
            //dd($th);

            \DB::rollback();
            return response()->json([
                'result'    => false,
                'message'   => "Transfer Failed"
            ]);
        }

        $this->send_email_to_receiver($sender, $receiver, $amount);

        // if everything goes alright
        return response()->json([
            'result'    => true,
            'message'   => "Transfer Successful"
        ]);
    }

    private function send_email_to_receiver(&$sender, &$receiver, $amount)
    {

        $array['content'] = "{$sender->name} has sent USD $amount from Wallet Number: {$sender->user_wallet->wallet_number} to your wallet";
        
        try {
            Mail::to($receiver->email)->send(new WalletTransferNotification($array));
        } catch (\Exception  $e) {

            
            
        } catch (\Throwable $th) {
            
        }
        
    }
}
