import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import PostsList from '../Posts/Partials/PostsList';
import InfoCard from './Partials/InfoCard';
import { ChatLeft, FileEarmarkPlus, Journal } from 'react-bootstrap-icons';

export default function Dashboard({ auth, posts }) {

	return (
		<AuthenticatedLayout
			user={auth.user}
			header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
		>
		<Head title="Dashboard - SysQube" />

		<div className="py-12">
			<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
				<div className="row">
					<InfoCard
						href="/posts"
						icon={<Journal />}
						iconStyle={{color: "#ff771d", background: "#ffe3c0"}}
						title="Total Blogs"
						value={posts.length}
					/>
					<InfoCard
						href="/messages"
						icon={<ChatLeft />}
						iconStyle={{color: "#4154f1", background: "#dce0ff"}}
						 title="Messages"
						 value="0"
						/>
					<InfoCard
						href="/posts/add"
						icon={<FileEarmarkPlus />}
						iconStyle={{color: "#2eca6a", background: "#d5ffde"}}
						title="Add New Post"
						onClick={() => window.location.href = route('post.create')}
					/>
				</div>
				<h2 className="h2 mb-2 text-center">Blog Posts</h2>
				<PostsList posts={posts} />
			</div>
		</div>
		</AuthenticatedLayout>
	);
}
