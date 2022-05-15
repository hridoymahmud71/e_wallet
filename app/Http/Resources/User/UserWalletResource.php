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
            'balance' => $this->balance,            
            'currency' => $this->currency,
            'balance_in_given_currency' => CurrencyConversionUtility::convert_from_usd($this->balance,$this->currency) ,                       
        ];
    }
}
