<?php

use App\Http\Controllers\Customers_Controller;
use App\Http\Controllers\Product_Controller;
use App\Http\Controllers\Cart_Controller;
use App\Http\Controllers\Order_Controller;
use App\Http\Controllers\Ship_Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('customers', [Customers_Controller::class, 'index']);
Route::post('customers/send', [Customers_Controller::class, 'store']);

Route::get('products', [Product_Controller::class, 'index']);
Route::post('products/send', [Product_Controller::class, 'store']);

Route::get('cart', [Cart_Controller::class, 'index']);
Route::post('cart/send', [Cart_Controller::class, 'store']);
Route::delete('cart/delete/{id}',[Cart_Controller::class, 'destroy']);

Route::get('order', [Order_Controller::class, 'index']);
Route::post('order/send', [Order_Controller::class, 'store']);

Route::get('ship', [Ship_Controller::class, 'index']);
Route::post('ship/send', [Ship_Controller::class, 'store']);