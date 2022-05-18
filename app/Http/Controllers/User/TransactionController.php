<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Resources\User\TransactionResource;
use App\Models\UserWalletTransaction;
use Illuminate\Http\Request;

class TransactionController extends Controller
{

    public function get_transactions()
    {

        $limit  = request()->limit ?? 10;
        $transactions  =  UserWalletTransaction::senderOrReceiver(auth()->user()->id)
            ->with(['sender', 'receiver'])
            ->latest()
            ->paginate($limit);


        return TransactionResource::collection($transactions);
    }
}
