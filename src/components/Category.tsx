import { Category } from "../types";
import Card from "./Card";
import Heading2 from "./shared/Heading2";

export default function CategoryList({ category }: { category: Category }) {
	const cards = category.missions.map((mission) => {
		return <Card key={mission.id} mission={mission} />;
	});

	return (
		<section className="w-full max-w-7xl m-auto h-fit px-6 py-4 xl:px-10 xl:py-6 overflow-y-clip">
			<Heading2 text={category.title} />
			<ul className="flex gap-3 xl:gap-5 bg-darkpurple overflow-y-scroll snap-x snap-mandatory">
				{cards}
			</ul>
		</section>
	);
}
