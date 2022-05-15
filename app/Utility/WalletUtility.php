<?php

namespace App\Utility;


use App\Models\UserWallet;
use App\Models\UserWalletTransaction;
use Str;

class WalletUtility
{

    // for identifying an unique user wallet
    public static function create_unique_wallet_number()
    {
        $number = rand(100000000000, 999999999999); // random 12 digit number

        //create a slug unless it is unique
        while (UserWallet::where("wallet_number", $number)->count() > 0) {
            $number = rand(100000000000, 999999999999);
        }

        return $number;
    }

    // for identifying a unique transaction
    public static function create_unique_transaction_number()
    {
        $number = strtolower(Str::random(16)); // random 16 character lowercase alpha-numeric value


        //create a slug unless it is unique
        while (UserWalletTransaction::where("transaction_number", $number)->count() > 0) {
            $number = strtolower(Str::random(16)); // random 16 character lowercase alpha-numeric value
        }

        return $number;
    }
}
