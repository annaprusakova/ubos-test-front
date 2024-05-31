import { ArchiveBoxIcon } from '@heroicons/react/16/solid';
import { routes } from '../../../data/routes.ts';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
	const location = useLocation();
	const currentPage =
		location.pathname !== '/' ? location.pathname.replace('/', '') : 'home';
	return (
		<div className='grid min-h-screen w-full lg:grid-cols-[280px_1fr]'>
			<div className='hidden border-r bg-gray-100/40 lg:block'>
				<div className='flex h-full max-h-screen flex-col gap-2'>
					<div className='flex h-14 items-center border-b px-6'>
						<Link to={'/'}>
							<div className='flex items-center gap-2 font-semibold'>
								<ArchiveBoxIcon className='h-6 w-6' />
								<span>Inventory</span>
							</div>
						</Link>
					</div>
					<div className='flex-1 overflow-auto py-2'>
						<nav className='grid items-start px-4 text-sm font-medium'>
							{routes.map((elem) => (
								<a
									className={
										location.pathname === elem.route
											? 'flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50'
											: 'flex items-center gap-3 rounded-lg px-3 py-2 ' +
												'text-gray-500 transition-all hover:text-gray-900'
									}
									href={elem.route}
									key={elem.id}
								>
									{elem.name}
								</a>
							))}
						</nav>
					</div>
				</div>
			</div>
			<div className='flex flex-col'>
				<header className='flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6'>
					<div className='w-full flex-1 font-semibold'>
						{currentPage.slice(0, 1).toUpperCase() + currentPage.slice(1)}
					</div>
				</header>
				<main className='flex flex-col gap-4 p-4 md:gap-8 md:p-6'>
					<Outlet />
				</main>
			</div>
		</div>
	);
}
