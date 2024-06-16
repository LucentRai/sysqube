<div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h1 class="modal-title fs-5" id="loginModalLabel">Admin Login</h1>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<form class="modal-body">
				<div class="mb-3">
					<label for="loginEmail" class="form-label">Email address</label>
					<input type="email" class="form-control" id="loginEmail" aria-describedby="emailHelp">
				</div>
				<div class="mb-3">
					<label for="loginPassword" class="form-label">Password</label>
					<input type="password" class="form-control" id="loginPassword">
				</div>
				<div class="mb-3 form-check">
					<input type="checkbox" class="form-check-input" id="exampleCheck1">
					<label class="form-check-label" for="exampleCheck1">Remember Me</label>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
					<button type="submit" class="btn btn-primary">
						Login
						<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10.3 7.7a.984.984 0 0 0 0 1.4l1.9 1.9H3c-.55 0-1 .45-1 1s.45 1 1 1h9.2l-1.9 1.9a.984.984 0 0 0 0 1.4c.39.39 1.01.39 1.4 0l3.59-3.59a.996.996 0 0 0 0-1.41L11.7 7.7a.984.984 0 0 0-1.4 0M20 19h-7c-.55 0-1 .45-1 1s.45 1 1 1h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-7c-.55 0-1 .45-1 1s.45 1 1 1h7z"/></svg>
					</button>
				</div>
			</form>
		</div>
	</div>
</div>
<nav class="navbar navbar-expand-lg navbar-light sticky-top bg-light" id="mainNav">
	<div class="container px-4 px-lg-5">
		<a class="navbar-brand" href="/">
			<svg xmlns="http://www.w3.org/2000/svg" id="z_logo" viewBox="0 0 64.312 40.348"><g id="Group_3" data-name="Group 3" transform="translate(-90.29 -40.162)"><g data-name="Group 2"><path data-name="Path 1" d="M204.213,115.77l-13.348-13.348,3.354-3.356L190.971,95.8l-6.619,6.621,19.861,19.861,10.314-10.332-3.247-3.249-7.067,7.067" transform="translate(-83.604 -41.774)" fill="#fdb811" fill-rule="evenodd"></path><path data-name="Path 2" d="M234.607,71.992,221.365,58.75,211.051,69.082l3.265,3.249,7.049-7.067,7.085,7.067,2.908,2.908,3.356,3.372-3.356,3.356,3.249,3.265,6.621-6.621-6.621-6.619" transform="translate(-100.774 -17.947)" fill="#fdb811" fill-rule="evenodd"></path><path data-name="Path 3" d="M256.958,73l-5.23,5.228,2.91,2.91,2.32-2.3,8.923,8.923-8.923,8.923-2.32-2.3-3.249-3.265-3.354-3.354L251.39,84.4l-2.908-2.926L242.2,87.759l6.282,6.281,3.247,3.249,5.23,5.228,14.757-14.757L256.958,73" transform="translate(-120.805 -27.111)" fill="#003a78" fill-rule="evenodd"></path><path data-name="Path 4" d="M175.038,78.228,169.808,73,155.051,87.759l14.757,14.757,5.23-5.228-2.926-2.91-2.3,2.3-8.923-8.923,8.923-8.923,2.3,2.3,3.265,3.265,3.354,3.356-3.354,3.354,2.908,2.926,6.282-6.281-6.282-6.282-3.247-3.249" transform="translate(-64.761 -27.111)" fill="#003a78" fill-rule="evenodd"></path></g></g></svg>
			<h3 class="d-inline-block m-0">SysQube Blogs</h3>
		</a>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
			<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M7.95 11.95h32m-32 12h32m-32 12h32"/></svg>
		</button>
		<div class="collapse navbar-collapse" id="navbarResponsive">
			<ul class="navbar-nav ms-auto py-4 py-lg-0">
				<li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="/">Home</a></li>
				<li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="/posts">Blog Posts</a></li>
				<li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="/contact">Contact</a></li>
				<li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="/about">About</a></li>
				<li class="nav-item d-flex align-items-center">
					<button type="button" class="btn btn-primary p-2"  data-bs-toggle="modal" data-bs-target="#loginModal">
						Login
						<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10.3 7.7a.984.984 0 0 0 0 1.4l1.9 1.9H3c-.55 0-1 .45-1 1s.45 1 1 1h9.2l-1.9 1.9a.984.984 0 0 0 0 1.4c.39.39 1.01.39 1.4 0l3.59-3.59a.996.996 0 0 0 0-1.41L11.7 7.7a.984.984 0 0 0-1.4 0M20 19h-7c-.55 0-1 .45-1 1s.45 1 1 1h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-7c-.55 0-1 .45-1 1s.45 1 1 1h7z"/></svg>
					</button>
				</li>
			</ul>
		</div>
	</div>
</nav>