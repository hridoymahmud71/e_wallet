<?php

namespace App\Utility;
use App\Models\User;
use App\Models\UserWallet;

class CustomerUtility
{
    public static function create_customer($request_data) {

        $user = User::create([
            'name'              => $request_data['name'],
            'password'          => bcrypt($request_data['password']),
            'email'             => $request_data['email'],
            'email_verified_at' => date("Y-m-d H:i:s"),
            'user_type'         => 'customer',
        ]);

        $user_wallet = UserWallet::create([
            'wallet_number'     => $request_data['name'],
            'currency'          => 'usd',
            'balance'           => 0.00,
           
        ]);

    }
    
}
