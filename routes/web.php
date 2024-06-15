<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'home'])
	->name('home.index');

Route::get('/about', [HomeController::class, 'about'])
	->name('home.about');

Route::get('/contact', [HomeController::class, 'contact'])
	->name('home.contact');

Route::resource('posts', PostController::class)
	->only(['index', 'show']);