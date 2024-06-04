import { Dialog, DialogPanel, Transition } from '@headlessui/react';
import { useEffect } from 'react';

type InfoModalProps = {
	isOpen: boolean;
	message: string;
	setMessage: (value: string | null) => void;
};
export default function InfoModal({
	isOpen,
	message,
	setMessage,
}: InfoModalProps) {
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setMessage(null);
		}, 1000);
		return () => clearTimeout(timeoutId);
	});
	return (
		<Transition show={isOpen}>
			<Dialog
				as='div'
				className='relative z-50'
				onClose={() => setMessage(null)}
			>
				<div className='fixed inset-0 flex w-screen items-end justify-end p-4'>
					<DialogPanel className='w-full max-w-md border bg-gray-100 p-4 rounded'>
						<p className='font-bold'>{message}</p>
					</DialogPanel>
				</div>
			</Dialog>
		</Transition>
	);
}
