<?php 

use Illuminate\Support\Facades\Route;

// admin specific routes
Route::prefix('admin')->middleware('auth:sanctum')->group(function () {

    Route::get('/', function () {
        return "admin_api_works";
    });
});