import type { ChangeEventHandler } from "react";
import type { Filter } from "../types.ts";

export function FilterButton({
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
				"leading-tight has-[:checked]:text-white has-[:checked]:font-medium has-[:checked]:bg-purple transition-transform duration-300 ease-out bg-lavender hover:has-[:checked]:bg-pink hover:has-[:checked]:text-offblack hover:bg-pink hover:-translate-y-0.5 focus:outline focus:outline-purple text-xs	md:text-sm xl:text-base 2xl:text-lg text-offblack px-2 py-2 sm:px-3 sm:py-2 w-fit cursor-pointer capitalize rounded-cxs "
			}
		>
			<input
				checked={filter.active}
				hidden={true}
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
