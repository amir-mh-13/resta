import Image from "next/image";
import { MapPinned, SearchCheck, ShieldCheck } from "lucide-react";

const benefits = [
	{
		title: "تجربه‌ای متناسب با تو",
		description: "امکانات، موقعیت مکانی و ویژگی‌های اقامتگاه‌ها رو بررسی کن تا انتخابی آگاهانه و متناسب با نیازت داشته باشی.",
		image: "/images/WhyRestaCard2.png",
		icon: ShieldCheck,
		imageAlt: "تراس دنج با چشم‌انداز ساحل هنگام غروب",
	},
	{
		title: "انتخاب راحت‌تر",
		description: "با فیلترهای متنوع و اطلاعات کامل اقامتگاه‌ها، گزینه مناسب سفرت رو پیدا کن و با خیال راحت مقایسه کن.",
		image: "/images/WhyRestaCard1.png",
		icon: SearchCheck,
		imageAlt: "اقامتگاه ساحلی با چشم‌انداز دریا",
	},
	{
		title: "وجود اقامتگاه در مقصد های متنوع",
		description: "از سواحل آرام گرفته تا جنگل‌های سرسبز و کوهستان‌های بکر، برای هر سلیقه‌ای یک مقصد خاص وجود داره.",
		image: "/images/WhyRestaCard1.png",
		icon: MapPinned,
		imageAlt: "کلبه چوبی در دل جنگل",
	},
];

export default function HomeOutro() {
	return (
		<section
			dir="rtl"
			className="relative overflow-hidden bg-gradient-to-b from-[#FAF9FF] to-white px-4 py-10 md:px-8 md:py-10"
		>
			<div className="mx-auto max-w-7xl">
				{/* Section heading */}
				<div className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
					<span className="mb-4 inline-flex rounded-full bg-[#EEE9FF] px-4 py-2 text-md font-medium text-[#6C5CE7]">
						چرا رستا؟
					</span>

					<h2 className="mb-4 text-2xl font-bold text-[#20204A] md:text-3xl">
						چرا رستا رو انتخاب کنیم؟
					</h2>

					<p className="text-sm leading-7 text-gray-500 md:text-base">
						با رستا، سفر به تجربه‌ای ساده، امن و لذت‌بخش تبدیل می‌شه.
						ما اینجا هستیم تا بهترین اقامتگاه‌ها رو برای سفرهای خودتون پیدا کنید.
					</p>
				</div>

				{/* Benefit cards */}
				<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
					{benefits.map((benefit) => {
						const Icon = benefit.icon;

						return (
							<article
								key={benefit.title}
								className="group flex flex-row sm:flex-col sm:flex-row gap-1 md:gap-5 rounded-2xl border border-[#EAE6FA] bg-white p-2 sm:p-3 md:p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#D5CCFF] hover:shadow-xl hover:shadow-[#6C5CE7]/5 sm:flex-row sm:items-center"
							>
								{/* Card content */}
								<div className="flex flex-1 flex-col items-start gap-3 py-1">
									<div className="flex size-12 items-center justify-center rounded-full bg-[#F0EBFF] text-[#6C5CE7]">
										<Icon size={24} strokeWidth={1.8} />
									</div>

									<h3 className="text-lg font-bold text-[#20204A]">
										{benefit.title}
									</h3>

									<p className="text-sm leading-7 text-gray-500">
										{benefit.description}
									</p>
								</div>

								{/* Card image */}
								<div className="relative w-[40vw] shrink-0 overflow-hidden rounded-xl sm:h-64 sm:w-[44%]">
									<Image
										src={benefit.image}
										alt={benefit.imageAlt}
										fill
										sizes="(max-width: 640px) 100vw, (max-width: 1279px) 45vw, 280px"
										className="object-cover transition-transform duration-500 group-hover:scale-105"
									/>
								</div>

							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
}