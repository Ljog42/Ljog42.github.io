import type { ChangeEventHandler } from "react";
import type { Filter } from "../types.ts";
import { FilterButton } from "./FilterButton.tsx";
import { Heading2 } from "./shared/Heading2.tsx";

export function Filters({
	filters,
	onClick,
}: {
	filters: Filter[];
	onClick: ChangeEventHandler;
}) {
	const filterButtons = filters.map((f) => (
		<FilterButton key={f.catId} filter={f} onClick={onClick} />
	));
	return (
		<section className="w-full 2xl:max-w-7xl m-auto h-fit px-6 py-4 xl:px-10 xl:py-6 2xl:px-0">
			<Heading2 text={"Filtrez par catégorie"} />
			<div className="flex flex-wrap gap-2 max-w-full h-fit">
				{filterButtons}
			</div>
		</section>
	);
}
