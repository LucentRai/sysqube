import { ArrowCounterclockwise, Binoculars, ClipboardCheck, Pencil, Trash } from 'react-bootstrap-icons';
import styles from './PostsList.module.css';
import { router } from '@inertiajs/react';

function PostsList({posts}){


	function handleTogglePublish(postId, publish){
		router.patch(route('post.togglePublish', {id: postId, status: publish ? 'published' : 'draft'}));
	}

	function handleDelete(postId){
		router.delete(route('post.destroy', {id: postId}));
	}

	return (
		<div className="container bg-white overflow-hidden shadow-sm sm:rounded-lg">

			<ul className="accordion p-6">
				{
					posts ? posts.map(post => (
						<li className={"accordion-item " + styles['item']} key={post.id}>
							<h3 className='h3'>
								{post.title}
							</h3>
							<div className={styles['actions']}>
								{post.status === 'published' ? (
									<>
										<span className="badge rounded-pill text-bg-success">Published</span>
										<button
											className="btn"
											title="Unpublish"
											onClick={() => handleTogglePublish(post.id, false)}
										>
											<ArrowCounterclockwise />
										</button>
										<button
											className="btn"
											title="View Post"
											onClick={() => window.open(`/posts/${post.slug}`, '_blank')}
										>
											<Binoculars />
										</button>
									</>
								) : (
									<>
										<span className="badge rounded-pill text-bg-warning">Draft</span>
										<button
											className="btn"
											title="Publish"
											onClick={() => handleTogglePublish(post.id, true)}
										>
											<ClipboardCheck />
										</button>
									</>
								)}
								<button
									className="btn"
									title="Edit Post"
									onClick={() => window.open(`/editor/edit/${post.slug}`, '_blank')}
								>
									<Pencil />
								</button>
								<button
									className="btn"
									title="Delete"
									onClick={handleDelete.bind(this, post.id)}
								>
									<Trash />
								</button>
							</div>
						</li>
					)) :
					<li className={'accordion-item ' + styles['item']}>
						<h3 className='h3 text-red-800'>No Posts Found</h3>
					</li>
				}
			</ul>
		</div>
	);
}

export default PostsList;