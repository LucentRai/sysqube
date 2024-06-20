import { useEffect, useState } from 'react';
import { Head, router, useForm } from '@inertiajs/react';
import { ClipboardCheck, Floppy } from 'react-bootstrap-icons';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';


function CreateEdit({auth, blogPost}){
	const {data, setData, processing} = useForm({
		title: '',
		description: '',
		content: '',
		status: 'draft'
	});

	useEffect(() => {
		if(blogPost){
			setData({
				title: blogPost.title,
				content: blogPost.content,
				description: blogPost.description,
				status: blogPost.status,
				slug: blogPost.slug,
				blog_img: blogPost.blog_img
			});
		}
	}, [blogPost]);

	function handleSaveDraft(e){
		e.preventDefault();
		router.post(route('post.store'), {...data, _method: 'put'});
	}

	function handlePublish(e){
		e.preventDefault();
		router.post(route('post.store'), {...data, status: 'published', _method: 'put'});
	}

	function handleUpdatePost(e){
		e.preventDefault();
		console.log(data);
		router.post(route('post.update', {...data, id: blogPost.id}));
	}

	return (
		<AuthenticatedLayout
			user={auth.user}
			header={<h2 className="h2">{blogPost ? 'Edit' : 'Add'} Blog Post</h2>}
		>
			<Head title="Add Blog Post - SysQube" />

			<div className="py-12">
				<div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
					<div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">

						<form>
							<div className="form-floating mb-3">
								<input
									type="text"
									id="title"
									name="title"
									value={data.title}
									onChange={e => setData('title', e.target.value)}
									className="form-control"
									placeholder="Title"
									required
								/>
								<label htmlFor="title">Title</label>
							</div>

							<div className="form-floating mb-3">
								<input
									text="text"
									id="description"
									name="description"
									value={data.description}
									onChange={e => setData('description', e.target.value)}
									className="form-control"
									placeholder="Description"
								/>
								<label htmlFor="description">Description</label>
							</div>

							<div className="mb-3">
								<label htmlFor="formFileLg" className="form-label">Heading Image</label>
								<input
									className="form-control p-2 lh-base"
									type="file"
									id="formFileLg"
									name="blog_img"
									onChange={e => setData('blog_img', e.target.files[0])}
									accept='image/*'
								/>
							</div>

							<div className="form-floating mb-3">
								<textarea
									id="content"
									name="content"
									value={data.content}
									onChange={e => setData('content', e.target.value)}
									className="form-control"
									placeholder="Content"
									style={{height: "30rem"}}
									required
								/>
								<label htmlFor="content">Content</label>
							</div>

							{
								blogPost ? (
									<button
										type='button'
										className='btn btn-primary'
										disabled={processing}
										onClick={handleUpdatePost}
									>
										Update Post
									</button>
								) : (
									<div className='d-flex justify-end'>
										<button
											type="button"
											className="btn btn-secondary me-2 d-flex align-items-center"
											disabled={processing}
											onClick={handleSaveDraft}
										>
											<Floppy className="me-2" /><span>Save Draft</span>
										</button>
										<button
											type="button"
											className="btn btn-primary d-flex align-items-center"
											disabled={processing}
											onClick={handlePublish}
										>
											<ClipboardCheck className="me-2" /><span>Publish Post</span>
										</button>
									</div>
								)
							}
						</form>

					</div>
				</div>
			</div>
		</AuthenticatedLayout>
	);
}

export default CreateEdit;