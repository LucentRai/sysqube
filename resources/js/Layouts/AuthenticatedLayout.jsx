import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';

export default function Authenticated({ user, header, children }) {
	const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

	return (
		<div className="min-h-screen bg-gray-100">
			<nav className="bg-white border-b border-gray-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between h-16">
						<div className="flex">
							<div className="shrink-0 flex items-center">
								<a href="/">
									<ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
								</a>
							</div>

							<div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
								<NavLink href={route('dashboard')} active={route().current('dashboard')}>
									Dashboard
								</NavLink>
							</div>
							
							<div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
								<NavLink href={route('editor.posts')} active={route().current().includes('editor')}>
									Post Editor
								</NavLink>
							</div>
							
							<div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
								<NavLink href={route('profile.edit')} active={route().current('profile.edit')}>
									Profile
								</NavLink>
							</div>
						</div>

						<div className="hidden sm:flex sm:items-center sm:ms-6">
							<div className="ms-3 relative">
								<Dropdown>
									<Dropdown.Trigger>
										<span className="inline-flex rounded-md">
											<button
												type="button"
												className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
											>
												{user.name}

												<svg
													className="ms-2 -me-0.5 h-4 w-4"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
												>
													<path
														fillRule="evenodd"
														d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
														clipRule="evenodd"
													/>
												</svg>
											</button>
										</span>
									</Dropdown.Trigger>

									<Dropdown.Content>
										<Dropdown.Link href={route('logout')} method="post" as="button">
											Log Out
										</Dropdown.Link>
									</Dropdown.Content>
								</Dropdown>
							</div>
						</div>

						<div className="-me-2 flex items-center sm:hidden">
							<button
								onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
								className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
							>
								<svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
									<path
										className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									/>
									<path
										className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>

				<div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
					<div className="pt-2 pb-3 space-y-1">
						<ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
							Dashboard
						</ResponsiveNavLink>
					</div>

					<div className="pt-4 pb-1 border-t border-gray-200">
						<div className="px-4">
							<div className="font-medium text-base text-gray-800">{user.name}</div>
							<div className="font-medium text-sm text-gray-500">{user.email}</div>
						</div>

						<div className="mt-3 space-y-1">
							<ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
							<ResponsiveNavLink method="post" href={route('logout')} as="button">
								Log Out
							</ResponsiveNavLink>
						</div>
					</div>
				</div>
			</nav>

			{header && (
				<header className="bg-white shadow">
					<div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
				</header>
			)}

			<main>{children}</main>
			<footer className="border-top p-4">
				<div className="container px-4 px-lg-5">
					<div className="row gx-4 gx-lg-5 justify-content-center">
						<div className="col-md-10 col-lg-8 col-xl-7">
							<ul className="list-inline text-center">
								<li className="list-inline-item">
									<a href="https://www.linkedin.com/in/lucent-rai/" target="_blank">
										<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 16 16"><path fill="currentColor" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/></svg>
									</a>
								</li>
								<li className="list-inline-item">
									<a href="https://www.lucent.com.np" target="_blank">
										<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path fill="currentColor" d="M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2s.06-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.92 7.92 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8 8 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.7 15.7 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/></svg>
									</a>
								</li>
								<li className="list-inline-item">
									<a href="https://github.com/LucentRai" target="_blank">
										<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 16 16"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>
									</a>
								</li>
							</ul>
							<div className="small text-center text-muted fst-italic">Copyright &copy; SysQube Blogs 2024</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
