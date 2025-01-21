export function Heading2({ text }: { text: string }) {
	return (
		<h2 className="text-xl xl:text-3xl 2xl:text-4xl font-heading font-semibold leading-none text-center w-fit h-full pb-3 xl:pb-6">
			{text}
		</h2>
	);
}
