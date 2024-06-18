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
		return Inertia::render('Posts/CreateEdit');
	}

	public function edit($postSlug): Response
	{
		return Inertia::render('Posts/CreateEdit', [
			'post' => Post::where('slug', $postSlug)->firstOrFail()
		]);
	}

	public function store(Request $request)
	{
		$validatedData = $request->validate([
			'title' => 'required',
			'content' => 'required',
			'status' => 'required',
		]);

		$slug = Str::slug($validatedData['title']);

		// Ensure the slug is unique
		$slugBase = $slug;
		$counter = 1;
		while (Post::where('slug', $slug)->exists()) {
			$slug = $slugBase . '-' . $counter;
			$counter++;
		}

		$validatedData['slug'] = $slug;
		Post::create($validatedData);

		return to_route('post.posts');
	}

	public function update(Request $request)
	{
		$validatedData = $request->validate([
			'title' => 'required',
			'content' => 'required',
			'status' => 'required',
		]);

		$post = Post::where('slug', $request->input('slug'))->firstOrFail();
		$post->update($validatedData);

		return to_route('post.posts');
	}
}