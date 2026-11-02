import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BedDouble, House, Leaf, Trees,ListSortAscending } from "lucide-react";

const Categories = [
	{
		title: "ویلا",
		description: "فضای اختصاصی برای سفر",
		icon: House,
		image: "/images/hotel-category.png",
	},
	{
		title: "هتل",
		description: "اقامتی راحت و بی‌دغدغه",
		icon: BedDouble,
		image: "/images/hotel-category.png",
	},
	{
		title: "کلبه جنگلی",
		description: "آرامش در دل طبیعت",
		icon: Trees,
		image: "/images/hotel-category.png",
	},
	{
		title: "بوم‌گردی",
		description: "تجربه زندگی محلی",
		icon: Leaf,
		image: "/images/hotel-category.png",
	},
];

export default function StayCategories() {
	return (
		<section className="px-4 py-12 md:px-8 lg:px-12">
			<div className="mx-auto max-w-7xl">
				{/* Section heading */}
				<div className="mb-6 text-right md:mb-10">
					<span className="mb-3 inline-flex items-center gap-1 rounded-full bg-primary/10 px-4 py-2 text-md font-medium text-primary">
						<ListSortAscending size={16} />
						دسته‌بندی اقامتگاه‌ها
					</span>

					<h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
						از بین دسته ها مناسب ترین دسته رو برای خودت انتخاب کن
					</h2>

					<p className="mt-3 max-w-3xl text-sm leading-7 text-gray-500 md:text-base">
						هر سلیقه‌ای، یه نوع اقامتگاه می‌خواد. اینجا می‌تونی از بین انواع
						اقامتگاه‌ها، گزینه‌ی مورد نظرت رو برای سفر بعدیت انتخاب کنی.
					</p>
				</div>

				{/* Category cards */}
				<div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
					{Categories.map((category, index) => {
						const Icon = category.icon;

						return (
							<Link href="/" key={`${category.title}-${index}`}>
								<article
									className="group relative isolate aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl bg-gray-200 shadow-sm transition-shadow duration-300 hover:shadow-xl"
								>
									{/* Background image */}
									<Image
										src={category.image}
										alt={category.title}
										fill
										sizes="(max-width: 1023px) 50vw, 25vw"
										className="object-cover transition-transform duration-700 group-hover:scale-110"
									/>

									{/* Dark gradient */}
									<div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

									{/* Category content */}
									<div className="absolute inset-x-0 bottom-0 p-4 text-white md:p-5">
										<div className="flex items-center gap-1">
											<div className="mb-0 lg:mb-3 flex size-9 md:size-11 items-center justify-center rounded-full bg-[#6C5CE7] shadow-lg shadow-black/10 transition-transform duration-300 group-hover:-translate-y-1">
												<Icon className="size-4 lg:size-5" />
											</div>

											<h3 className="text-lg font-bold md:text-xl">
												{category.title}
											</h3>
										</div>


										<p className="mt-2 text-xs leading-6 text-white/80 md:text-sm">
											{category.description}
										</p>

										<div className="mt-1 md:mt-4 flex items-center justify-between">
											<span className="text-xs text-white/90">
												مشاهده اقامتگاه‌ها
											</span>

											<span className="flex size-9 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm transition-colors duration-300 group-hover:bg-[#6C5CE7]">
												<ArrowLeft size={18} />
											</span>
										</div>
									</div>
								</article>
							</Link>

						);
					})}
				</div>
			</div>
		</section>
	);
}