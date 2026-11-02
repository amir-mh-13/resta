"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, MapPinHouse } from "lucide-react";
import Link from "next/link";

const popularDestinations = [
	{ title: "رامسر", image: "/images/ramsar-casino.png" },
	{ title: "قشم", image: "/images/popular-dest-gheshm.png" },
	{ title: "لاهیجان", image: "/images/popular-dest-lahijan.png" },
	{ title: "رامسر", image: "/images/ramsar-casino.png" },
	{ title: "قشم", image: "/images/popular-dest-gheshm.png" },
	{ title: "لاهیجان", image: "/images/popular-dest-lahijan.png" },
	{ title: "رامسر", image: "/images/ramsar-casino.png" },
	{ title: "قشم", image: "/images/popular-dest-gheshm.png" },
	{ title: "لاهیجان", image: "/images/popular-dest-lahijan.png" },
	{ title: "رامسر", image: "/images/ramsar-casino.png" },
	{ title: "قشم", image: "/images/popular-dest-gheshm.png" },
	{ title: "لاهیجان", image: "/images/popular-dest-lahijan.png" },
	{ title: "رامسر", image: "/images/ramsar-casino.png" },
	{ title: "قشم", image: "/images/popular-dest-gheshm.png" },
	{ title: "لاهیجان", image: "/images/popular-dest-lahijan.png" },
];

export default function PopularDestinations() {
	const [visibleCount, setVisibleCount] = useState(4);
	const [minCount, setMinCount] = useState(4);

	const visibleDestinations = popularDestinations.slice(
		0,
		visibleCount
	);

	useEffect(() => {
		const mobileQuery = window.matchMedia("(max-width: 639px)");
		const tabletQuery = window.matchMedia(
			"(min-width: 640px) and (max-width: 1023px)"
		);
		const desktopQuery = window.matchMedia("(min-width: 1024px)");

		const updateVisibleCount = () => {
			let count = 4;

			if (desktopQuery.matches) {
				count = 10;
			} else if (tabletQuery.matches) {
				count = 6;
			}

			setMinCount(count);
			setVisibleCount(count);
		};


		updateVisibleCount();

		mobileQuery.addEventListener("change", updateVisibleCount);
		tabletQuery.addEventListener("change", updateVisibleCount);
		desktopQuery.addEventListener("change", updateVisibleCount);

		return () => {
			mobileQuery.removeEventListener("change", updateVisibleCount);
			tabletQuery.removeEventListener("change", updateVisibleCount);
			desktopQuery.removeEventListener("change", updateVisibleCount);
		};
	}, []);


	return (
		<section className="w-full mt-10 lg:mt-13">
			<div className="mx-auto w-full px-4 md:px-2 sm:max-w-[640px] md:max-w-[820px] lg:max-w-[1240px] flex flex-col gap-3">
				<div className="flex flex-col items-center justify-center text-foreground">
					<span className="text-2xl font-semibold text-primary bg-primary/10 rounded-2xl py-1 px-7 mb-4">مقاصد محبوب</span>
					<span className="text-xl mb-3">مقصد بعدی سفرت رو انتخاب کن</span>
					<span className="text-gray-500 text-center mb-3">از شهرهای ساحلی تا طبیعت سرسبز شمال و شهرهای تاریخی، مقصدهای جذابی رو برای ساختن یه سفر به‌یادموندنی کشف کن.</span>
				</div>

				{/* Mobile */}
				<div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
					{visibleDestinations.map((item, idx) => (
						<Link href="/" key={`${item.title}-${idx}`}>
							<div
								// key={`${item.title}-${idx}`}
								className="group relative aspect-[3/4] overflow-hidden rounded-xl shadow-sm"
							>
								<img
									src={item.image}
									alt={item.title}
									className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
									loading="lazy"
								/>

								<div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-center p-3">
									<div className="w-full rounded-lg bg-black/45 px-3 py-2 text-center backdrop-blur-sm">
										<span className="block text-md font-semibold text-white">
											{item.title}
										</span>
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>

				{/* Mobile Load More */}
				{visibleCount < popularDestinations.length && (
					<button
						onClick={() =>
							setVisibleCount((prev) =>
								Math.min(prev + minCount, popularDestinations.length)
							)
						}
						className="mt-3 rounded-lg hover:bg-background hover:border hover:border-secondary px-6 py-2 text-sm lg:text-md font-semibold hover:text-secondary transition-colors bg-secondary text-white cursor-pointer"
					>
						مشاهده بیشتر
						<ChevronDown className="h-4 w-4 inline-block" />
					</button>
				)}


				{visibleCount > minCount && (
					<button
						onClick={() => setVisibleCount(minCount)}
						className=" mt-2  rounded-lg hover:bg-background hover:border hover:border-secondary px-6 py-2 text-sm lg:text-md font-semibold hover:text-secondary transition-colors bg-secondary text-white cursor-pointer"
					>
						مشاهده کمتر
						<ChevronUp className="h-4 w-4 inline-block" />
					</button>
				)}
			</div>
		</section>
	)
}