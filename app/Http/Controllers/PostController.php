<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;
use Inertia\Response;

class PostController extends Controller
{
	public function index()
	{
		return view('posts.index',
			['posts' => Post::where('status', 'published')->get()]
		);
	}

	public function show($slug)
	{
		$post = Post::where(['slug' => $slug, 'status' => 'published'])->first();
		if (!$post) {
			abort(404);
		}

		return view('posts.show',
			['post' => $post]
		);
	}

	public function posts(): Response
	{
		return Inertia::render('Posts/Posts', [
			'posts' => Post::all()
		]);
	}

	public function add(): Response
	{
		return Inertia::render('Posts/Add');
	}
}
