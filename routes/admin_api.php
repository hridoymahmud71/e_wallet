<?php

use App\Http\Controllers\Admin\TransactionController;
use Illuminate\Support\Facades\Route;

// admin specific routes
Route::prefix('admin')->middleware('auth:sanctum','is_role:admin')->group(function () {

    Route::get('/', function () {
        return "admin_api_works";
    });

    Route::get('/transaction/user-with-most-conversions', [TransactionController::class, 'get_user_with_most_conversions'])->name('api.admin.transaction.user_with_most_conversions');
    Route::get('/transaction/user-with-transactions', [TransactionController::class, 'get_users_with_transactions'])->name('api.admin.transaction.get_users_with_transactions');
});