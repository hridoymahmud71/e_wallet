<?php

namespace App\Utility;

use App\Models\User;
use App\Models\UserWallet;
use App\Utility\WalletUtility;
use DB;

class UserUtility
{
    public static function create_user($request_data)
    {

        try {
            \DB::beginTransaction();

            $user = User::create([
                'name'              => $request_data['name'],                
                'password'          => bcrypt($request_data['password']),
                'email'             => $request_data['email'],
                'email_verified_at' => date("Y-m-d H:i:s")      ,
                'role'              => 'user',         
            ]);

            

            $user_wallet = UserWallet::create([
                'user_id'           => $user->id,
                'wallet_number'     => WalletUtility::create_unique_wallet_number(),
                'currency'          => 'usd',
                'balance'           => 0.00,

            ]);

            \DB::commit();
        } catch (\Exception  $e) {
            //dd($e);
            
            \DB::rollback();
            return null;
        } catch (\Throwable $th) {
            //dd($th);
            
            \DB::rollback();
            return null;
        }

        // if everything goes alright
        return $user;
    }
}
