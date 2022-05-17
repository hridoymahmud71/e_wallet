<?php

namespace App\Http\Resources\User;

use Illuminate\Http\Resources\Json\JsonResource;

class TransactionResource extends JsonResource
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
            'transaction_number' => $this->transaction_number,
            'action' => $this->action,
            'sender_currency' => $this->sender_currency,
            'amount_in_usd' => $this->amount_in_usd,
            'amount_in_sender_currency' => $this->amount_in_sender_currency,
            'sender' =>  new UserResource($this->sender),
            'receiver' =>  new UserResource($this->receiver),
            'is_sender' => auth()->user() && auth()->user()->id == $this->sender_id,
            'is_receiver' => auth()->user() && auth()->user()->id == $this->receiver_id,
            'date' =>  $this->created_at->diffForHumans()
        ];
    }
}
