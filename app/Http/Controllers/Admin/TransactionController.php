<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\UserWithTransactionResource;
use App\Http\Resources\User\TransactionResource;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\UserWalletTransaction;

class TransactionController extends Controller
{
    public function get_user_with_most_conversions()
    {

        $user_with_most_conversions = User::roleUser()->withCount('user_wallet_transactions')->orderBy('user_wallet_transactions_count', 'desc')->first();


        if ($user_with_most_conversions != null && $user_with_most_conversions->user_wallet_transactions_count > 0) {

            return response()->json(
                [
                    'result' => true,
                    'user'   => new UserWithTransactionResource($user_with_most_conversions),
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


    //
    public function get_users_with_conversions()
    {
        $limit  = request()->limit ?? 10;

        $users = User::roleUser()->withCount('user_wallet_transactions')->withSum('user_wallet_transactions', 'amount_in_usd')->paginate($limit);

        return UserWithTransactionResource::collection($users);
    }

    public function get_third_highest_transaction_of_an_user($user_id)
    {

        $user = User::find($user_id);

        if ($user == null) {
            return response()->json(
                [
                    'result' => false,
                    'transaction'   => null,
                    'message'   => 'User not found'
                ],
                404
            );
        }

        // wanted to use subquery but cannot use it as mysql has limitation for `limit` in subqueries

        // $transaction =  UserWalletTransaction::senderOrReceiver($user_id)->whereNotIn('id', function ($query) use ($user_id) {
        //     $query->select('id')
        //         ->from(with(new UserWalletTransaction())->getTable())
        //         ->where('sender_id', '=', $user_id)
        //         ->orWhere('receiver_id', '=', $user_id)
        //         ->limit(2)
        //         ->orderBy('amount_in_usd', 'DESC');
        // })
        //     ->orderBy('amount_in_usd', 'DESC')
        //     ->first();


        // limit 1 offset 2 , this was done rather than using subquery
        $transaction =  UserWalletTransaction::senderOrReceiver($user_id)
            ->orderBy('amount_in_usd', 'DESC')
            ->skip(2)->take(1)->first();


        if ($transaction == null) {
            return response()->json(
                [
                    'result' => false,
                    'transaction'   => null,
                    'message'   => 'No transaction is found with such query'
                ],
                404
            );
        }

        return response()->json(
            [
                'result' => true,
                'transaction'   => new TransactionResource($transaction),
                'message'   => 'Transaction found'
            ],
            200
        );
    }
}
