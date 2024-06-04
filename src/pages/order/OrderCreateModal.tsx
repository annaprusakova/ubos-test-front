import Modal from '../../components/ui/modal/Modal.tsx';
import { PlaceOrderDto } from '../../dto/placeOrder.dto.ts';
import { Fieldset } from '@headlessui/react';
import InputField from '../../components/ui/InputField.tsx';
import Button from '../../components/ui/Button.tsx';
import { useFormik } from 'formik';
import { OrderValidation } from '../../validations/order.validation.ts';
import { createNewOrder } from '../../api/order.api.ts';
import SelectProduct from '../../components/ui/SelectProduct.tsx';
import { OrderDto } from '../../dto/order.dto.ts';
import { ProductDto } from '../../dto/product.dto.ts';
import { getProductById, updateProductById } from '../../api/product.api.ts';

type OrderCreateModalProps = {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	onReloadData: (value: boolean) => void;
};

export default function OrderCreateModal({
	isOpen,
	onClose,
	title,
	onReloadData,
}: OrderCreateModalProps) {
	const initValues: PlaceOrderDto = {
		customerName: '',
		quantity: 0,
		productId: '',
	};

	const getProductData = async (id: string) => {
		const response = await getProductById(id);
		if (response && response.status === 200) {
			return response.data[0];
		}
	};

	const updateProductData = async (product: ProductDto, quantity: number) => {
		await updateProductById({
			...product,
			quantity: product.quantity - quantity,
		});
	};

	const handleCreateOrder = async (values: PlaceOrderDto) => {
		const product: ProductDto = await getProductData(values.productId);
		if (product.quantity < values.quantity) {
			setErrors({
				quantity: `Max amount of this product is ${product.quantity}`,
			});
		} else {
			const data: Omit<OrderDto, '_id'> = {
				customerName: values.customerName,
				date: new Date().getTime(),
				cost: product.price * values.quantity,
			};
			const response = await createNewOrder(data);
			//TODO: add message
			if (response && response.status === 200) {
				onReloadData(true);
				updateProductData(product, values.quantity);
				onClose();
			}
		}
	};

	const { errors, values, submitForm, setFieldValue, setErrors } = useFormik({
		initialValues: initValues,
		onSubmit: handleCreateOrder,
		validationSchema: OrderValidation,
		validateOnChange: false,
		validateOnBlur: false,
	});

	return (
		<Modal isOpen={isOpen} onClose={onClose} title={title}>
			<div>
				<Fieldset className='space-y-8'>
					<InputField
						label={'Customer Name'}
						name={'customerName'}
						value={values.customerName}
						error={errors.customerName}
						onChange={(e) => setFieldValue('customerName', e.target.value)}
					/>
					<SelectProduct
						name={'productId'}
						label={'Product'}
						value={values.productId}
						error={errors.productId}
						setFieldValue={setFieldValue}
					/>
					<InputField
						label={'Quantity'}
						name={'quantity'}
						value={values.quantity}
						error={errors.quantity}
						onChange={(e) => setFieldValue('quantity', e.target.value)}
					/>
				</Fieldset>
				<div className='flex gap-4 mt-8'>
					<Button
						onClick={onClose}
						text={'Cancel'}
						styles={'bg-red-600 hover:bg-red-600/90'}
					/>
					<Button onClick={submitForm} text={'Create'} />
				</div>
			</div>
		</Modal>
	);
}
