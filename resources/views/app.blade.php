<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<!-- Favicon -->
		<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
		<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
		<link rel="manifest" href="/site.webmanifest">
		<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
		<link rel="shortcut icon" href="/favicon.ico">
		<meta name="msapplication-TileColor" content="#ffffff">
		<meta name="msapplication-config" content="/browserconfig.xml">
		<meta name="theme-color" content="#ffffff">

		<title inertia>{{ config('app.name', 'Laravel') }}</title>

		<!-- Scripts -->
		@routes
		@viteReactRefresh
		@vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx", "resources/sass/home.scss"])
		@inertiaHead
	</head>
	<body class="font-sans antialiased">
		@inertia
	</body>
</html>