import { useEffect, useRef, useState } from "react";
import { Banner } from "../types";
import BannerImg from "./BannerImg";
import { checkIsVisible } from "../utils/utils";

export default function Carousel() {
	const [banners, setBanners] = useState<Array<Banner> | null>(null);
	const [activeBanner, setActiveBanner] = useState<number | null>(null);
	const [isVisible, setIsVisible] = useState(false);
	const scrolling = useRef<boolean>(false);
	const elementRef = useRef<HTMLUListElement | null>(null);

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
			if (elementRef.current) {
				const rect = elementRef.current?.getBoundingClientRect();

				if (checkIsVisible(rect) && !scrolling.current) {
					setIsVisible(true);
				}

				if (!scrolling.current && banners) {
					const active =
						activeBanner < banners.length - 1 ? activeBanner + 1 : 0;

					setActiveBanner(active);
				}
			}
		}, 5000);

		return () => {
			clearInterval(interval);
		};
	}, [scrolling, activeBanner, isVisible, elementRef]);

	const handleScroll = () => {
		if (!scrolling.current) {
			scrolling.current = !scrolling.current;

			setTimeout(() => {
				scrolling.current = false;
			}, 1000);
		}
	};

	if (banners) {
		const bannerItems = banners.map((banner, index) => {
			return (
				<BannerImg
					key={banner.id}
					banner={banner}
					active={activeBanner == index}
				/>
			);
		});

		return (
			<ul
				ref={elementRef}
				onScroll={handleScroll}
				className={
					"aspect-banner flex snap-x snap-mandatory w-full max-w-7xl m-auto 2xl:rounded-md overflow-y-scroll"
				}
			>
				{bannerItems}
			</ul>
		);
	}
}
