<?php

use Illuminate\Support\Facades\Route;


// user specific routes
Route::prefix('user')->group(function () {

    Route::get('/', function () {
        return "user_api_works";
    });
});
