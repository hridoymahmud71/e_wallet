<?php

use App\Http\Controllers\Admin\TransactionController;
use Illuminate\Support\Facades\Route;

// admin specific routes
Route::prefix('admin')->middleware('auth:sanctum')->group(function () {

    Route::get('/', function () {
        return "admin_api_works";
    });

    Route::get('/transaction/user-with-most-conversions', [TransactionController::class, 'user_with_most_conversions'])->name('api.admin.transaction.get_user_with_most_conversion');
});