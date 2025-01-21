import type { ChangeEvent } from "react";
import { useEffect, useState } from "react";
import "./App.css";
import type { Category, Filter } from "./types.ts";
import { CategoryList } from "./components/Category.tsx";
import { Header } from "./components/Header.tsx";
import { Carousel } from "./components/Carousel.tsx";
import { Filters } from "./components/Filters.tsx";

export function App() {
	const [categories, setCategories] = useState<Category[] | null>(null);
	const [filters, setFilters] = useState<Filter[] | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch("https://backend.odaceplus.com/api/v1/landing/", {
				method: "GET",
			});
			const data = await res.json();
			const categories = data.filter((cat: Category) => {
				return cat.id && cat.missions.length > 0;
			});

			setCategories(categories);

			const filters = categories.map((cat: Category): Filter => {
				return {
					catId: cat.id,
					catTitle: cat.short_title,
					active: false,
				};
			});

			setFilters(filters);
		};

		fetchData();
	}, []);

	if (categories && filters) {
		const handleFilterClick = (event: ChangeEvent<HTMLInputElement>) => {
			const catId = Number(event.target.value);
			const newFilters = filters.map((filter) => {
				if (catId === filter.catId) {
					filter.active = event.target.checked;
				}

				return filter;
			});

			setFilters(newFilters);
		};

		const noFilters = (() => {
			return filters.find((f) => f.active) === undefined;
		})();

		const catItems = (() => {
			const toRender = noFilters
				? categories
				: categories.filter((cat) => {
						return filters.find((f) => f.catId === cat.id && f.active);
					});

			return toRender.map((cat) => {
				return <CategoryList key={cat.id} category={cat} />;
			});
		})();

		return (
			<>
				<Header />
				<main className="h-full font-nm text-white bg-offblack">
					<Carousel />
					<Filters filters={filters} onClick={handleFilterClick} />
					{noFilters ? catItems[0] : null}
					<ul>{noFilters ? catItems.slice(1) : catItems}</ul>
				</main>
			</>
		);
	}
}
