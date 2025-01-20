import { ChangeEventHandler } from "react";
import { Filter } from "../types";

export default function FilterButton({
	filter,
	onClick,
}: {
	filter: Filter;
	onClick: ChangeEventHandler;
}) {
	return (
		<label
			htmlFor={filter.catTitle}
			className={
				"leading-tight has-[:checked]:text-white has-[:checked]:font-medium has-[:checked]:bg-purple transition-colors duration-150 bg-lavender hover:has-[:checked]:bg-pink hover:has-[:checked]:text-offblack hover:bg-pink focus:outline focus:outline-purple text-sm xl:text-base text-offblack px-3 py-2 w-fit cursor-pointer rounded-cxs"
			}
		>
			<input
				checked={filter.active}
				hidden
				name={filter.catTitle}
				type="checkbox"
				onChange={onClick}
				value={filter.catId}
				id={filter.catTitle}
			/>
			{filter.catTitle}
		</label>
	);
}
