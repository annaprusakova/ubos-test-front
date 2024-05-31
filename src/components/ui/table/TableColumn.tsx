type TableColumnProps = {
	name: string;
};
export default function TableColumn({ name }: TableColumnProps) {
	return <th className='px-4 py-3 text-left font-semibold'>{name}</th>;
}
