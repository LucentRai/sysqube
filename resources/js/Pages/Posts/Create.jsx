import { useState } from 'react';
import { Head, router, useForm } from '@inertiajs/react';
import { ClipboardCheck, Floppy } from 'react-bootstrap-icons';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';


function Add({auth}){
	const {processing} = useForm();
	const [values, setValues] = useState({
		title: '',
		description: '',
		content: '',
		status: 'draft'
	});

	function handleChange(e){
		const key = e.target.name;
		const value = e.target.value;

		setValues(prevState => ({
			...prevState,
			[key]: value
		}));
	}

	function handleSaveDraft(e){
		e.preventDefault();
		router.post(route('post.store'), values);
	}

	function handlePublish(e){
		e.preventDefault();
		const updatedValues = {
			...values,
			status: 'published'
		};
		router.post(route('post.store'), updatedValues);
	}

	return (
		<AuthenticatedLayout
			user={auth.user}
			header={<h2 className="h2">Add Blog Post</h2>}
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
								value={values.title}
								onChange={handleChange}
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
								value={values.description}
								onChange={handleChange}
								className="form-control"
								placeholder="Description"
							/>
							<label htmlFor="description">Description</label>
						</div>

						<div className="form-floating mb-3">
							<textarea
								id="content"
								name="content"
								value={values.content}
								onChange={handleChange}
								className="form-control"
								placeholder="Content"
								style={{height: "30rem"}}
								required
							/>
							<label htmlFor="content">Content</label>
						</div>

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
					</form>

				</div>
			</div>
		</div>
		</AuthenticatedLayout>
	);
}

export default Add;