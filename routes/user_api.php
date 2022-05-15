<?php

use Illuminate\Support\Facades\Route;


// user specific routes
Route::prefix('user')->middleware('auth:sanctum')->group(function () {

    Route::get('/', function () {
        return "user_api_works";
    });
});
