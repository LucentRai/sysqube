<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'home'])
	->name('home.index');

Route::get('/about', [HomeController::class, 'about'])
	->name('home.about');

Route::get('/contact', [HomeController::class, 'contact'])
	->name('home.contact');

Route::get('/posts/{id}', function ($id) {
	return view('posts.post', ['id' => $id]);
})-> name('posts.post');