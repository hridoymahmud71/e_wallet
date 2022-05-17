<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\CronjobController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/', function () {
    return "api_works";
});

// cronjob specific routes
Route::prefix('cronjob')->group(function () {
    Route::get('/update-exchange-rates', [CronjobController::class, 'update_exchange_rates'])->name('api.update_exchange_rates');
});

// auth specific routes
Route::prefix('auth')->group(function () {

    Route::get('/', function () {
        return "auth_works";
    });


    Route::post('/user/registration', [AuthController::class, 'user_registration'])->name('api.auth.user_registration');
    //Route::post('/login', [AuthController::class, 'login'])->name('api.auth.login'); // for both admin and user
    Route::post('/login', [AuthController::class, 'login'])->name('login'); // for both admin and user

    Route::group(['middleware' => ['auth:sanctum']], function () {
        Route::get('/logout', [AuthController::class, 'logout'])->name('api.logout');
    });
});

Route::group(['middleware' => ['auth:sanctum']], function () {

    Route::get('/get-wallet-balance', [WalletController::class, 'get_wallet_balance'])->name('api.user.get_wallet_balance');
    Route::post('/initiate-transfer', [TransferController::class, 'initiate_transfer'])->name('api.user.initiate_transfer');
    Route::get('/transactions', [TransactionController::class, 'get_transactions'])->name('api.user.transactions');
});




Route::fallback(function () {
    return response()->json(['result' => false, 'message' => 'Url not found'], 404);
});
