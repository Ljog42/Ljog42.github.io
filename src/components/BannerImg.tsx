import { useRef } from "react";
import { Banner } from "../types";

export default function BannerImg({
	banner,
	active,
}: { banner: Banner; active: boolean }) {
	const elementRef = useRef<HTMLImageElement | null>(null);

	if (elementRef && active) {
		elementRef.current?.scrollIntoView({
			block: "nearest",
			inline: "nearest",
			behavior: "smooth",
		});
	}

	return (
		<img
			ref={elementRef}
			alt={`Bannière promotionelle - ${banner.id}`}
			src={banner.image}
			className={"shrink-0 snap-start aspect-banner"}
			loading="lazy"
		/>
	);
}
