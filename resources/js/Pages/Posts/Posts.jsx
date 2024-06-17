import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import PostsList from './Partials/PostsList';

function Posts({auth, posts}){

	return (
		<AuthenticatedLayout
			user={auth.user}
			header={<h2 className="h2">Blog Posts</h2>}
		>
			<Head title="Blog Posts - SysQube" />
			<PostsList posts={posts} />
		</AuthenticatedLayout>
	)
}

export default Posts;