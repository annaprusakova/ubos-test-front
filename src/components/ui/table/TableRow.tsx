type TableRowProps = {
	rowData: string | number;
};
export default function TableRow({ rowData }: TableRowProps) {
	return <td className='px-4 py-3'>{rowData}</td>;
}
