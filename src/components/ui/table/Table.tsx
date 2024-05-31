import TableColumn from './TableColumn.tsx';
import { ReactNode } from 'react';

type TableProps = {
	columns: string[];
	children: ReactNode;
};
export default function Table({ columns, children }: TableProps) {
	return (
		<table className='w-full table-auto border-collapse'>
			<thead>
				<tr className='bg-gray-100'>
					{columns.map((columnName, index) => (
						<TableColumn key={index} name={columnName} />
					))}
				</tr>
			</thead>
			<tbody>{children}</tbody>
		</table>
	);
}
