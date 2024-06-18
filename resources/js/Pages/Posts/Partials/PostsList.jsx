import { ArrowCounterclockwise, Binoculars, ClipboardCheck, Pencil, Trash } from 'react-bootstrap-icons';
import styles from './PostsList.module.css';

function PostsList({posts}){
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
										<button className="btn" title="Unpublish"><ArrowCounterclockwise /></button>
										<button className="btn" title="View Post" onClick={() => window.open(`/posts/${post.slug}`, '_blank')}><Binoculars /></button>
									</>
								) : (
									<>
										<span className="badge rounded-pill text-bg-warning">Draft</span>
										<button className="btn" title="Publish"><ClipboardCheck /></button>
									</>
								)}
								<button className="btn" title="Edit Post"><Pencil /></button>
								<button className="btn" title="Delete"><Trash /></button>
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