<?php

namespace App\Http\Resources\User;

use App\Utility\CurrencyConversionUtility;
use Illuminate\Http\Resources\Json\JsonResource;

class UserWalletResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [            
            'wallet_number' => $this->wallet_number,
            'balance' => $this->balance,            
            'default_currency' => $this->default_currency,
            'balance_in_default_currency' => CurrencyConversionUtility::convert_from_usd($this->balance,$this->default_currency) ,                       
        ];
    }
}
