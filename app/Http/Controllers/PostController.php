<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

use App\Models\Post;
use App\Http\Resources\Post as PostResource;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;

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
			'id' => 'required',
			'title' => 'required',
			'status' => 'required',
			'content' => 'required',
			'slug' => 'required',
		]);
		DB::transaction(function () use ($validatedData, $request) {
			$post = Post::findOrFail($request->id);

			// Update the post within a transaction
			$post->update($validatedData);

			// Optionally, clear any cache associated with the post
			Cache::forget('post_'.$request->id);
	});
		return Redirect::back()->with('success', 'Post updated.');
	}

	public function togglePublish(Request $request)
	{
		$validatedData = $request->validate([
			'id' => 'required',
			'status' => 'required',
		]);

		$post = Post::findOrFail($request->id);
		$post->update($validatedData);

		return Redirect::back()->with('success', 'Post updated.');
	}
}