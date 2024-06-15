<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class HomeController extends Controller
{
	public function home(){
		$posts = Post::orderBy('created_at', 'desc')->take(5)->get();
		return view('home.index')->with('posts', $posts);
	}

	public function about(){
		return view('home.about');
	}

	public function contact(){
		return view('home.contact');
	}
}
