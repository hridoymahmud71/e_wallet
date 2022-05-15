<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Resources\User\UserWalletResource;
use Illuminate\Http\Request;

class WalletController extends Controller
{

    public function get_wallet_balance()
    {        
        $user = auth()->user();       

        if ($user == null || $user->user_wallet == null) {
            return response()->json(
                [
                    'result' => false,
                    'message' => "User not found",
                    'user_wallet'   => null,

                ],
                404
            );
        }

        return response()->json(
            [
                'result' => true,
                'message' => "User wallet fetched",
                'user_wallet'   => new UserWalletResource($user->user_wallet),
            ],
            200
        );
    }
}
