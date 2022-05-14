<?php

use App\Http\Controllers\Api\AuthController;
use Illuminate\Http\Request;
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

// auth specific routes
Route::prefix('auth')->group(function () {
    Route::post('/login', [AuthController::class])->name('login'); // for both admin and customer
    Route::post('/customer/registration', [AuthController::class])->name('customer.registration');
});

// admin specific routes
Route::prefix('admin')->group(function () {

    
});

// customer specific routes
Route::prefix('customer')->group(function () {

    
});
