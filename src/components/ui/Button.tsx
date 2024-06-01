type ButtonProps = {
	text: string;
	styles?: string;
	onClick: () => void;
};
export default function Button({ text, styles, onClick }: ButtonProps) {
	return (
		<button
			className={
				`inline-flex items-center justify-center whitespace-nowrap
        text-sm rounded font-medium ring-offset-background transition-colors focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none
        disabled:opacity-50 h-10 bg-gray-900 text-gray-50 hover:bg-gray-900/90 px-6 py-2 ` +
				styles
			}
			onClick={onClick}
		>
			{text}
		</button>
	);
}
