import Modal from './Modal.tsx';
import Button from '../Button.tsx';

type DeleteModalProps = {
	isDelete: boolean;
	title: string;
	onClose: () => void;
	selectedItem: string | null;
	onDelete: () => void;
};
export default function DeleteModal({
	isDelete,
	title,
	onClose,
	selectedItem,
	onDelete,
}: DeleteModalProps) {
	return (
		<Modal isOpen={isDelete} onClose={onClose} title={title}>
			<div>
				<p>Are you sure you want to delete {selectedItem || 'this record'}?</p>
				<div className='flex gap-4 mt-3'>
					<Button onClick={onClose} text={'Cancel'} />
					<Button
						onClick={onDelete}
						text={'Yes'}
						styles={'bg-red-600 hover:bg-red-600/90'}
					/>
				</div>
			</div>
		</Modal>
	);
}
