@extends('layouts.app')
@section('title', 'SysQube Blog Posts')

@section('content')
	@include('layouts.nav')
	<div class="container px-4 px-lg-5">
		<div class="row gx-4 gx-lg-5 justify-content-center">
			<div class="col-md-10 col-lg-8 col-xl-7">
				<h1>SysQube Blog Posts</h1>
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
				@if($posts->count() == 0)
					<div class="my-4 py-4">
						<h2 class="text-center">No Posts Found</h2>
					</div>
				@endif
			</div>
		</div>
	</div>
	@include('layouts.footer')
@endsection