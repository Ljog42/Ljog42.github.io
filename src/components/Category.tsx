import { Category } from "../types";
import Card from "./Card";

export default function CategoryList({ category }: { category: Category }) {
	const cards = category.missions.map((mission) => {
		return <Card key={mission.id} mission={mission} />;
	});

	return (
		<section className="w-full max-w-7xl m-auto h-fit px-6 py-4 xl:px-10 xl:py-6 bg-grad overflow-y-clip">
			<h2 className="text-xl xl:text-3xl font-heading font-semibold leading-none pb-3 xl:pb-5">
				{category.title}
			</h2>
			<ul className="flex gap-3 xl:gap-5 bg-darkpurple overflow-y-scroll snap-x snap-mandatory">
				{cards}
			</ul>
		</section>
	);
}
