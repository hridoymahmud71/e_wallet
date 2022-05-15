<?php

use App\Http\Controllers\User\WalletController;
use Illuminate\Support\Facades\Route;


// user specific routes
Route::group(['prefix' => 'user',  'middleware' => ['auth:sanctum']],function () {

    Route::get('/', function () {
        return "user_api_works";
    });

    Route::get('/get_wallet_balance', [WalletController::class, 'get_wallet_balance'])->name('api.user.get_wallet_balance');
});
