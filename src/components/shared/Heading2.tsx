export default function Heading2({ text }: { text: string }) {
	return (
		<h2 className="text-xl xl:text-3xl 2xl:text-4xl font-heading font-semibold leading-none pb-3 xl:pb-5">
			{text}
		</h2>
	);
}
