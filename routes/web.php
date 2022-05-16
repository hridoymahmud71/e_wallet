<?php

use App\Http\Controllers\DemoController;
use App\Http\Controllers\Web\FrontendController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// this is to create admin in a shortcut way rather than manually inserting in the database;
Route::get('/demo/create-admin/{email}/{password}/{signal}', [DemoController::class, 'create_admin'])->name('demo.create_admin');

Route::get('/', [FrontendController::class, 'init_frontend'])->name('frontend.init');
