<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;

Route::get('/', [HomeController::class, 'home'])
	->name('home.index');

Route::get('/about', [HomeController::class, 'about'])
	->name('home.about');

Route::get('/contact', [HomeController::class, 'contact'])
	->name('home.contact');

Route::resource('posts', PostController::class)
	->only(['index', 'show']);


Route::get('/dashboard', function () {
	return Inertia::render('Dashboard/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
	Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
	Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
	Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->group(function () {
	Route::get('/posts', [PostController::class, 'posts'])->name('posts.posts');
	Route::patch('/posts', [PostController::class, 'update'])->name('posts.update');
	Route::delete('/posts', [PostController::class, 'destroy'])->name('posts.destroy');
});

require __DIR__.'/auth.php';