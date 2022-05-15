<?php

namespace App\Utility;

use App\Models\User;
use App\Models\UserWallet;
use WalletUtility;
use DB;

class CustomerUtility
{
    public static function create_customer($request_data)
    {

        try {
            \DB::beginTransaction();

            $user = User::create([
                'name'              => $request_data['name'],
                'password'          => bcrypt($request_data['password']),
                'email'             => $request_data['email'],
                'email_verified_at' => date("Y-m-d H:i:s"),
                'user_type'         => 'customer',
            ]);

            $user_wallet = UserWallet::create([
                'wallet_number'     => WalletUtility::create_unique_wallet_number(),
                'currency'          => 'usd',
                'balance'           => 0.00,

            ]);

            \DB::commit();
        } catch (\Exception  $e) {
            \DB::rollback();
            return null;
        } catch (\Throwable $th) {
            \DB::rollback();
            return null;
        }

        // if everything goes alright
        return $user;
    }
}
