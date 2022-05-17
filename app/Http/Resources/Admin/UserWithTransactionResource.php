<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\User\UserWalletResource;

class UserWithTransactionResource extends JsonResource
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
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,            
            'wallet' => $this->user_wallet ? new UserWalletResource($this->user_wallet) : null,  
            'transaction' => [
                'count' => $this->user_wallet_transactions_count ?? 0,
                'total' => $this->user_wallet_transactions_sum_amount_in_usd ?? 0.00
            ]                
        ];
    }
}
