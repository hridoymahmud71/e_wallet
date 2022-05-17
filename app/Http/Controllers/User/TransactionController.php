<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Resources\User\TransactionResource;
use App\Models\UserWalletTransaction;
use Illuminate\Http\Request;

class TransactionController extends Controller
{

    public function get_transactions(){

        $limit  = request()->limit ?? 10;
        $transactions  = UserWalletTransaction::where('sender_id','=',auth()->user()->id)->orWhere('receiver_id','=',auth()->user()->id)->with(['sender','receiver'])->latest()->paginate($limit);

        //dd($transactions);

        return TransactionResource::collection($transactions);

    }
        
}
