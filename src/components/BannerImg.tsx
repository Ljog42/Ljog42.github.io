import type { Banner } from "../types.ts";

export function BannerImg({ banner }: { banner: Banner }) {
	return (
		<img
			alt={`Bannière promotionelle - ${banner.id}`}
			src={banner.image}
			className={"shrink-0 snap-start aspect-banner"}
			loading="lazy"
		/>
	);
}
