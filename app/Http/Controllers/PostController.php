<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
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

	public function create(): Response
	{
		return Inertia::render('Posts/Create');
	}

	public function store(Request $request)
	{
		$validatedData = $request->validate([
			'title' => 'required',
			'content' => 'required',
			'status' => 'required',
		]);

		// Generate initial slug
		$slug = Str::slug($validatedData['title']);

		// Ensure the slug is unique
		$slugBase = $slug;
		$counter = 1;
		while (Post::where('slug', $slug)->exists()) {
			$slug = $slugBase . '-' . $counter;
			$counter++;
		}

		// Add the unique slug to the validated data
		$validatedData['slug'] = $slug;

		// Create the post with the validated data including the unique slug
		Post::create($validatedData);


		return to_route('post.posts');
	}
}
