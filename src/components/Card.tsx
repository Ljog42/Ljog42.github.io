import type { Mission } from "../types.ts";

export function Card({ mission }: { mission: Mission }) {
	return (
		<article className="flex flex-col min-w-24 xl:min-w-44 gap-2 ">
			<a href={mission.form_url} className="w-fit h-fit py-2.5 -my-2.5">
				<img
					className="aspect-reel rounded-md border-2 box-border hover:-translate-y-2 border-transparent duration-500 ease-out transition-all shadow-md hover:shadow-darkpurple/40 hover:border-white"
					src={mission.image}
					alt={`Illustration de contenu - ${mission.title}`}
					loading="lazy"
				/>
			</a>
			<figcaption className="text-xs xl:text-sm w-full truncate leading-snug capitalize">
				{mission.title}
			</figcaption>
		</article>
	);
}
