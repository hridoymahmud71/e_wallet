<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\UserWallet;
use App\Models\Currency;
use Illuminate\Http\Request;

class CurrencyController extends Controller
{
    public function set_currency(Request $request)
    {

        $currencies = Currency::active()->pluck('code')->toArray();

        if (auth()->user() == null) {
            return response()->json([
                'result'    => false,
                'message'   => "User not found"
            ], 401);
        }

        if (!in_array($request->code, $currencies)) {
            return response()->json([
                'result'    => false,
                'message'   => "Currency not found"
            ], 200);
        }

        try {
            UserWallet::where('user_id', auth()->user()->id)->limit(1)->update(['default_currency' => $request->code]);

            return response()->json([
                'result'    => true,
                'message'   => "Currency set to ".strtoupper($request->code)
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'result'    => false,
                'message'   => "Could not set currncy"
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'result'    => false,
                'message'   => "Could not set currncy"
            ], 200);
        }
    }
}
