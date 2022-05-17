<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\UserWithTransactionCountResource;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\UserWalletTransaction;

class TransactionController extends Controller
{
    public function get_user_with_most_conversions()
    {

        $user_with_most_conversions = User::withCount('user_wallet_transactions')->orderBy('user_wallet_transactions_count', 'desc')->first();


        if ($user_with_most_conversions != null && $user_with_most_conversions->user_wallet_transactions_count > 0) {

            return response()->json(
                [
                    'result' => true,
                    'user'   => new UserWithTransactionCountResource($user_with_most_conversions),
                    'message'   => 'User Found'
                ],
                200
            );
        }

        return response()->json(
            [
                'result' => false,
                'user'   => null,
                'message'   => 'No user with most transaction is found'
            ],
            404
        );
    }

    public function get_users_with_transactions()
    {

        $wallet_transaction =  UserWalletTransaction::selectRaw("SUM(amount_in_usd) as total_amount")->selectRaw("count(sender_id) as transaction_count")
        ->groupBy('sender_id')
        ->get(); 

        dd( $wallet_transaction);

    }
}
