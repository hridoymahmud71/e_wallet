<?php

namespace App\Http\Controllers;

use App\Models\ExchangeRate;
use App\Utility\CurrencyConversionUtility;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Cache;

class CronjobController extends Controller
{

    public function update_exchange_rates()
    {
        $rates = CurrencyConversionUtility::get_exchange_rates();
        
        if (!empty($rates)) {            

            try {
                foreach ($rates as $key => $rate) {
                    ExchangeRate::updateOrCreate(
                        ['currency' => $key],
                        [
                            'currency' => $key,
                            'rate' => $rate,
                        ]
                    );
                }

                Log::info("Rates Updated", ['result' => true, 'message' => 'Rates Updated']);
                return response()->json(['result' => true, 'message' => 'Rates Updated']);

                Cache::forget('exchange-rates');

            } catch (\Exception $e) {
                Log::error("Could not update rates", ['result' => false, 'message' => $e->getMessage()]);
                return response()->json(['result' => false, 'message' => $e->getMessage()]);
            } catch (\Throwable $th) {
                Log::error("Could not update rates", ['result' => false, 'message' => $th->getMessage()]);
                return response()->json(['result' => false, 'message' => $th->getMessage()]);
            }
        }

        Log::error("Rates fetched were empty", ['result' => false, 'message' => 'Rates fetched were empty']);
        return response()->json(['result' => false, 'message' => 'Rates fetched were empty']);
    }
}
