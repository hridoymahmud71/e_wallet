<?php

namespace App\Utility;


use App\Models\UserWallet;
use App\Models\UserWalletTransaction;
use Str;
use Illuminate\Support\Facades\Http;

class CurrencyConversionUtility
{

    public static function convert_to_usd($amount, $code = 'usd')
    {
        if ($code == 'usd' || $amount == 0.00) {
            return $amount;
        }

        $rate =  self::get_currency_rate($code);

        return $rate > 0.00 ? round($amount / $rate, 2) : $amount;
    }

    public static function convert_from_usd($amount, $code = 'usd')
    {
        if ($code == 'usd' || $amount == 0.00) {
            return $amount;
        }

        $rate =  self::get_currency_rate($code);

        return round($amount * $rate, 2);
    }

    public static function get_latest_rate_url()
    {
        return "https://openexchangerates.org/api/latest.json?app_id=" . env("OPEN_EXCHANGE_APP_ID");
    }

    public static function get_currency_rate($code)
    {

        $rate = 1.00;
        $upper_code  = strtoupper($code);
        try {
            $current_response = Http::get(self::get_latest_rate_url());
            //dd($current_response);
        } catch (\Exception $e) {
            return $rate;
        }

        if ($current_response->ok()) {
            $rates = (array) $current_response->object()->rates;

            if (isset($rates[$upper_code])) {
                return $rates[$upper_code];
            }
        }

        return $rate;
    }
}
