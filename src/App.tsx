import { useEffect, useState } from "react";
import "./App.css";
import { Category } from "./types";
import CategoryList from "./components/Category";
import Header from "./components/Header";

function App() {
	const [categories, setCategories] = useState<Array<Category> | null>();

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch("https://backend.odaceplus.com/api/v1/landing/", {
				method: "GET",
			});
			const data = await res.json();
			setCategories(data);
		};
		fetchData();
	}, []);

	if (categories) {
		const popular = categories[0];
		const others = categories.slice(1).map((cat) => {
			return <CategoryList key={cat.id} category={cat} />;
		});

		return (
			<>
				<Header />
				<main className="font-nm text-white bg-offblack">
					<CategoryList category={popular} />
					<ul>{others}</ul>
				</main>
			</>
		);
	}
}

export default App;
