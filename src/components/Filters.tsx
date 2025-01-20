import { ChangeEventHandler, MouseEventHandler } from "react";
import { Category, Filter } from "../types";
import FilterButton from "./FilterButton";
import Heading2 from "./shared/Heading2";

export default function Filters({
	filters,
	onClick,
}: {
	filters: Array<Filter>;
	onClick: ChangeEventHandler;
}) {
	const filterButtons = filters.map((f) => (
		<FilterButton key={f.catId} filter={f} onClick={onClick} />
	));
	return (
		<section className="w-full max-w-7xl m-auto h-fit px-6 py-4 xl:px-10 xl:py-6 overflow-y-hidden">
			<Heading2 text={"Filtrez par catégorie"} />
			<div className="flex flex-wrap gap-2 overflow-hidden max-w-full h-fit">
				{filterButtons}
			</div>
		</section>
	);
}
