import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';


function Add({auth}){

	return (
		<AuthenticatedLayout
			user={auth.user}
			header={<h2 className="h2">Add Blog Post</h2>}
		>
			<h1>Add Post</h1>
		</AuthenticatedLayout>
	);
}

export default Add;