import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import { FilePlusFill } from 'react-bootstrap-icons';

import PostsList from './Partials/PostsList';

function Posts({auth, posts}){

	return (
		<AuthenticatedLayout
			user={auth.user}
			header={<h2 className="h2">Blog Posts</h2>}
		>
			<Head title="Blog Posts - SysQube" />
			<div className="py-12">
				<div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
					<button
						onClick={() => window.location.href = route('post.create')}
						className="btn btn-primary d-flex align-items-center"
					>
						<FilePlusFill className='me-2' />Add New Post
					</button>
					<PostsList posts={posts} />
				</div>
			</div>
		</AuthenticatedLayout>
	);
}

export default Posts;