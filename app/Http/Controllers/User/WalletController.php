<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class WalletController extends Controller
{

    public function get_balance()
    {

        return response()->json(
            [
                'result' => true,
                'user'   => "",

            ],
            200
        );
    }
}
