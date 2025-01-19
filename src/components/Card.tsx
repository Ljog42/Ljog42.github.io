import type { Mission } from "../types";

export default function Card({ mission }: { mission: Mission }) {
	return (
		<article className="flex flex-col min-w-24 max-w-28 xl:min-w-44 xl:max-w-48 gap-2 snap-start shrink-0">
			<h4 className="text-xs xl:text-sm w-full line-clamp-2 leading-snug h-8 xl:h-10 capitalize">
				{mission.title}
			</h4>
			<a className="w-fit h-fit ">
				<img
					className="aspect-reel rounded-md border-white border-[1px] "
					src={mission.image}
					alt={`Illustration de contenu - ${mission.title}`}
				/>
			</a>
		</article>
	);
}
