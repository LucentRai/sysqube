<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

use App\Models\Post;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;

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
			'posts' => Post::orderBy('created_at', 'desc')->get()
		]);
	}

	public function create(): Response
	{
		return Inertia::render('Posts/CreateEdit');
	}

	public function edit($postSlug): Response
	{
		return Inertia::render('Posts/CreateEdit', [
			'blogPost' => Post::where('slug', $postSlug)->firstOrFail()
		]);
	}

	public function store(Request $request)
	{
		$validatedData = $request->validate([
			'title' => 'required|string',
			'content' => 'required|string',
			'description' => 'nullable|string',
			'status' => 'required',
			'blog_img' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
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

		if($request->hasFile('blog_img')){
			$path = $request->file('blog_img')->store('public');
			$filenameArr = explode('/', $path);
			$validatedData['blog_img'] = $filenameArr[1];
		}

		Post::create($validatedData);

		return to_route('post.posts');
	}

	public function update(Request $request)
	{
		$validatedData = $request->validate([
			'title' => 'required|string',
			'status' => 'required|string',
			'content' => 'required|string',
			'slug' => 'required|string',
			'description' => 'nullable|string',
			'blog_img' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
		]);
		dd($validatedData);

		DB::transaction(function () use ($validatedData, $request) {
			$post = Post::findOrFail($request->id);

			if ($request->hasFile('blog_img')) {
				dd($request);
				$path = $request->file('blog_img')->store('public');
				$filenameArr = explode('/', $path);
				$validatedData['blog_img'] = $filenameArr[1];
				Storage::delete($post->blog_img);
			}
			// Update the post within a transaction
			$post->update($validatedData);

			// Clear any cache associated with the post
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

		return Redirect::back();
	}

	public function destroy(Request $request)
	{
		$validatedData = $request->validate([
			'id' => 'required',
		]);

		$post = Post::findOrFail($request->id);
		$post->delete();

		return Redirect::back();
	}
}