<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Models\Post;

Route::get('/', [HomeController::class, 'home'])
	->name('home.index');

Route::get('about', [HomeController::class, 'about'])
	->name('home.about');

Route::get('contact', [HomeController::class, 'contact'])
	->name('home.contact');

Route::resource('posts', PostController::class);


Route::get('dashboard', function () {
	return Inertia::render('Dashboard/Dashboard', [
		'posts' => Post::all()
	]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
	Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
	Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
	Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->group(function () {
	Route::get('/editor', [PostController::class, 'posts'])->name('post.posts');
	Route::get('/editor/create', [PostController::class, 'create'])->name('post.create');
	Route::post('/editor/create', [PostController::class, 'store'])->name('post.store');
	Route::get('/editor/edit/{postSlug}', [PostController::class, 'edit'])->name('post.edit');
	Route::patch('/editor', [PostController::class, 'update'])->name('post.update');
	Route::delete('/editor', [PostController::class, 'destroy'])->name('post.destroy');
});

require __DIR__.'/auth.php';