@extends('layouts.app')
@section('title', 'SysQube Blog')
@section('content')

	@include('layouts.nav')
	<!-- Page Header-->
	<header class="masthead" style="background-image: url('assets/img/home-bg.jpg')">
		<div class="container position-relative px-4 px-lg-5">
			<div class="row gx-4 gx-lg-5 justify-content-center">
				<div class="col-md-10 col-lg-8 col-xl-7">
					<div class="site-heading">
						<h1>SysQube Blog</h1>
						<span class="subheading">Cutting Edge Technology Blog</span>
					</div>
				</div>
			</div>
		</div>
	</header>
	<!-- Main Content-->
	<div class="container px-4 px-lg-5">
		<div class="row gx-4 gx-lg-5 justify-content-center">
			<div class="col-md-10 col-lg-8 col-xl-7">
				@foreach($posts as $post)
					<div class="post-preview">
						<a href="{{ route('posts.show', $post->slug) }}">
							<h2 class="post-title">{{ $post->title }}</h2>
							<h3 class="post-subtitle">{{ $post->description }}</h3>
						</a>
						<p class="post-meta">
							published on {{ $post->created_at->format('F j, Y') }}
						</p>
					</div>
					<hr class="my-4" />
				@endforeach
				<!-- Pager-->
				@if($posts->count() == 0)
					<div class="my-4 py-4">
						<h2 class="text-center">No Posts Found</h2>
					</div>
				@else
					<div class="d-flex justify-content-end mb-4"><a class="btn btn-primary text-uppercase" href="/posts">Older Posts</a></div>
				@endif
			</div>
		</div>
	</div>
	@include('layouts.footer')
@endsection