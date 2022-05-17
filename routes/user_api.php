<?php

use App\Http\Controllers\User\TransferController;
use App\Http\Controllers\User\WalletController;
use Illuminate\Support\Facades\Route;


// user specific routes
Route::group(['prefix' => 'user',  'middleware' => ['auth:sanctum','is_role:user']],function () {

    Route::get('/', function () {
        return "user_api_works";
    });

    Route::get('/get-wallet-balance', [WalletController::class, 'get_wallet_balance'])->name('api.user.get_wallet_balance');
    Route::post('/initiate-transfer', [TransferController::class, 'initiate_transfer'])->name('api.user.initiate_transfer');

});
