<?php

namespace App\Utility;


use App\Models\UserWallet;
use App\Models\UserWalletTransaction;
use Str;

class CurrencyConversionUtility
{

    public static function convert_to_usd($amount, $code = 'usd')
    {
        if($code == 'usd'){
            return $amount * .5;
        }
    }

    public static function convert_from_usd($amount, $code = 'usd')
    {
        if($code == 'usd'){
            return $amount;
        }

        return $amount * 2;
    }
}
