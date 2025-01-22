import type { Category, Mission } from "../types.ts";
import { Card } from "./Card.tsx";
import { Heading2 } from "./shared/Heading2.tsx";

export function CategoryList({ category }: { category: Category }) {
	const maxMissions: Mission[] = category.missions.slice(0, 5);
	const cards = maxMissions.map((mission) => {
		return <Card key={mission.id} mission={mission} />;
	});

	return (
		<section className="transition-all w-full 2xl:max-w-7xl m-auto h-fit px-6 py-4 xl:px-10 xl:py-6 overflow-hidden 2xl:px-0">
			<Heading2 text={category.title} />
			<ul className="flex w-full h-fit py-2 gap-1 lg:gap-3 bg-darkpurple no-scrollbar overflow-x-scroll lg:overflow-x-hidden">
				{cards}
			</ul>
		</section>
	);
}
