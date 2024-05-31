type ButtonProps = {
	text: string;
};
export default function Button({ text }: ButtonProps) {
	return (
		<button
			className='inline-flex items-center justify-center whitespace-nowrap
        text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none
        disabled:opacity-50 h-10 bg-gray-900 text-gray-50 hover:bg-gray-900/90 px-6 py-2 rounded-md'
		>
			{text}
		</button>
	);
}
