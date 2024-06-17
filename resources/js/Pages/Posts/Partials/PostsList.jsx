import { Pencil, Trash2 } from 'react-bootstrap-icons';
import styles from './PostsList.module.css';

function PostsList(){
	return (
		<div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">

			<ul className="accordion p-6">
				<li className={"accordion-item " + styles['item']}>
					<button className={styles['post-clickable-btn']}>
						<h3 className='h3'>
							Post Title
						</h3>
						<div className={styles['actions']}>
							<button className="btn"><Pencil /></button>
							<button className="btn"><Trash2 /></button>
						</div>
					</button>
				</li>
				<li class="accordion-item">
					Post Title
				</li>
				<li class="accordion-item">
					Post Title
				</li>
			</ul>
		</div>
	);
}

export default PostsList;