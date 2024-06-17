import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import InfoCard from './Partials/InfoCard';
import { ChatLeftFill, Journal } from 'react-bootstrap-icons';

export default function Dashboard({ auth }) {
	return (
		<AuthenticatedLayout
			user={auth.user}
			header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
		>
		<Head title="Dashboard - SysQube" />

		<div className="py-12">
			<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
				<div className="row">
					<InfoCard href="/posts" icon={<Journal />} iconStyle={{color: "#ff771d", background: "#ffe3c0"}} title="Total Blogs" value="1234">
					</InfoCard>
					<InfoCard href="/messages" icon={<ChatLeftFill />} iconStyle={{color: "#4154f1", background: "#dce0ff"}}  title="Messages" value="0">
					</InfoCard>
					<InfoCard href="/employees" iconStyle={{color: "#2eca6a", background: "#d5ffde"}} title="Employees" value="1234" />
				</div>

					<div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
						<div className="p-6">
							<h2 className="h2 mb-2 text-center">Posts</h2>

							<div className="accordion" id="blogAccordion">
								<div className="accordion-item">
									<h2 className="accordion-header">
										<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
											Accordion Item #1
										</button>
									</h2>
									<div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#blogAccordion">
										<div className="accordion-body">
											Some details
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
											Accordion Item #2
										</button>
									</h2>
									<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#blogAccordion">
										<div className="accordion-body">
											<strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
											Accordion Item #3
										</button>
									</h2>
									<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#blogAccordion">
										<div className="accordion-body">
											<strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
			</div>
		</div>
		</AuthenticatedLayout>
	);
}
