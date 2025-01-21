import { useEffect, useRef, useState } from "react";
import type { Banner } from "../types.ts";
import { BannerImg } from "./BannerImg.tsx";

export function Carousel() {
	const [banners, setBanners] = useState<Banner[] | null>();
	const hovered = useRef<boolean>(false);
	const containerRef = useRef<HTMLUListElement | null>(null);
	const activeBanner = useRef<number>(0);

	const handleHover = () => {
		hovered.current = true;
	};

	const handleLeave = () => {
		hovered.current = false;
	};

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch("https://backend.odaceplus.com/api/v1/carousel", {
				method: "GET",
			});
			const data = await res.json();

			setBanners(data);
		};

		fetchData();

		const interval = setInterval(() => {
			if (containerRef.current && !hovered.current) {
				containerRef.current.scrollTo({
					left:
						containerRef.current.getBoundingClientRect().width *
						activeBanner.current,
					top: containerRef.current.scrollTop,
					behavior: "smooth",
				});
				activeBanner.current =
					activeBanner.current < 2 ? activeBanner.current + 1 : 0;
			}
		}, 5000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	const bannerItems = banners
		? banners.map((banner) => {
				return <BannerImg key={banner.id} banner={banner} />;
			})
		: null;

	return (
		<ul
			onMouseOver={handleHover}
			onFocus={handleHover}
			onMouseLeave={handleLeave}
			className={
				"no-scrollbar relative aspect-banner flex snap-x snap-mandatory w-full max-w-7xl m-auto 2xl:rounded-md overflow-x-scroll overflow-y-hidden [&::scrollbar]:w2 "
			}
			ref={containerRef}
		>
			{bannerItems}
		</ul>
	);
}
