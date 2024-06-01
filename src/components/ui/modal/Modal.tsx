import {
	Dialog,
	DialogPanel,
	DialogTitle,
	Transition,
} from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	children: ReactNode;
};
export default function Modal({
	isOpen,
	onClose,
	title,
	children,
}: ModalProps) {
	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog
				as={'div'}
				open={isOpen}
				onClose={onClose}
				className='relative z-50'
			>
				<Transition.Child
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div className='fixed inset-0 bg-black/25' />
				</Transition.Child>
				<div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
					<DialogPanel className='max-w-lg space-y-4 border bg-white p-12 rounded'>
						<DialogTitle className='font-bold'>{title}</DialogTitle>
						{children}
					</DialogPanel>
				</div>
			</Dialog>
		</Transition>
	);
}
