export function Header() {
	return (
		<header className="flex text-white justify-between px-6 xl:px-10 2xl:px-0 h-16 xl:h-20 text-sm lg:text-lg xl:text-xl items-center bg-offblack font-nm m-auto max-w-7xl">
			<nav className="flex gap-3 ">
				<a href="x" className="hidden sm:block px-1 py-3 leading-none">
					A propos
				</a>
				<a
					href="x"
					className="hidden sm:block px-1 py-3 leading-none font-medium"
				>
					Plans
				</a>
			</nav>
			<img className="h-5 xl:h-7" src="./odace.svg" />
			<section className="flex gap-3">
				<button
					className="hidden sm:block rounded-cxs bg-darkgray md:display-block px-3 py-1.5 xl:px-4 xl:py-2.5 w-fit leading-none h-fit  hover:bg-lightgray transition-colors duration-200"
					type="button"
				>
					Connection
				</button>
				<button
					className="hidden sm:block rounded-cxs bg-purple px-3 py-1.5 xl:px-4 xl:py-2.5 w-fit leading-none h-fit font-medium hover:bg-[#A261FF] transition-colors duration-200 "
					type="button"
				>
					Inscription
				</button>
			</section>
		</header>
	);
}
