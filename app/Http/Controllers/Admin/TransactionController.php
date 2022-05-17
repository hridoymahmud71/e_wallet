<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\UserWithTransactionResource;
use Illuminate\Http\Request;
use App\Models\User;

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

    public function get_users_with_transactions()
    {   
        $limit  = request()->limit ?? 10;    

        $users = User::roleUser()->withCount('user_wallet_transactions')->withSum('user_wallet_transactions','amount_in_usd')->paginate($limit);

        return UserWithTransactionResource::collection($users);

    }
}
