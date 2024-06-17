import { ArrowCounterclockwise, ClipboardCheck, Pencil, Trash2 } from 'react-bootstrap-icons';
import styles from './PostsList.module.css';

function PostsList({posts}){
	return (
		<div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">

			<ul className="accordion p-6">
				{posts.map(post => (

					<li className={"accordion-item " + styles['item']}>
					<h3 className='h3'>
						{post.title}
					</h3>
					<div className={styles['actions']}>
						{post.status === 'published' ? (
							<>
								<span className="badge rounded-pill text-bg-success">Published</span>
								<button className="btn" title="Unpublish"><ArrowCounterclockwise /></button>
							</>
						) : (
							<>
								<span className="badge rounded-pill text-bg-warning">Draft</span>
								<button className="btn" title="Publish"><ClipboardCheck /></button>
							</>
						)}
						<button className="btn" title="Edit Post"><Pencil /></button>
						<button className="btn" title="Delete"><Trash2 /></button>
					</div>
				</li>
				))}
			</ul>
		</div>
	);
}

export default PostsList;