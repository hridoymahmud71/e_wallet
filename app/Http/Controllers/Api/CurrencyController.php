<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CurrencyResource;
use App\Models\Currency;
use Illuminate\Http\Request;

class CurrencyController extends Controller
{
    public function get_currencies()
    {
        $currencies = Currency::active()->orderBy('name')->get();

        return CurrencyResource::collection($currencies);
    }
}
