import Navbar from "../layout/Navbar";
import HomeSeatchBox from "./HomeSearchBox";
import { ShieldCheck, Headset, Star, Houses } from "lucide-react";
import SearchBoxPopover from "./SerachBoxPopover";
import "./ShowupAnimation.module.css"

const infoItems = [
	{ title: "پرداخت امن", info: "با درگاه های معتبر", icon: <ShieldCheck className="size-8" /> },
	{ title: "پشتیبانی 24 ساعته", info: "در هر زمان و مکان", icon: <Headset className="size-8" /> },
	{ title: "تضمین بهترین قیمت", info: "مستقیم از مالک", icon: <Star className="size-8" /> },
	{ title: "تنوع اقامتگاه", info: "هتل‚ ویلا, سوییت و...", icon: <Houses className="size-8" /> },
]

export default function Hero() {
	return (
		<section className="relative h-[700px] md:min-h-[900px] lg:min-h-[700px] w-full overflow-hidden">
			{/* Background image */}
			<div
				className="absolute z-0 hidden md:block inset-0 bg-cover bg-center"
				style={{
					backgroundImage: "url('/images/home-hero.png')",
				}}
			/>

			{/* Mobile background */}
			<div
				className="absolute inset-0 z-0 bg-cover bg-[center_60%] md:hidden"
				style={{
					backgroundImage: "url('/images/mobile-home-hero.png')",
				}}
			/>

			{/* Overlay */}
			<div className="absolute inset-0 md:bg-black/10 lg:bg-black/12" />

			{/* Content */}
			<div className="relative z-10">
				<Navbar />
				<div className="flex flex-col items-center justify-center text-center mt-28 lg:mt-35 px-3">
					<span className="hero-text-enter hero-delay-1 span-test text-2xl lg:text-xl text-white drop-shadow-lg">به رستا خوش آمدید</span>
					<span className="hero-text-enter hero-delay-2 text-5xl text-white drop-shadow-lg mt-4 font-semibold">اقامتگاه بعدی ات رو پیدا کن</span>
					<span className="hero-text-enter hero-delay-3 text-xl text-white drop-shadow-lg mt-5">هتل‚ ویلا و اقامتگاه های خاص در بهترین مقاصد ایران</span>
					<HomeSeatchBox />
					<div className="hidden hero-feature-enter hero-feature-delay-1 md:grid grid-cols-2 md:w-[70vw] lg:w-auto lg:flex items-center justify-around text-primary-foreground bg-black/15 backdrop-blur-[2px] rounded-xl p-3 lg:py-6 lg:px-5 mt-12 lg:mt-22 w-[70%]">
						{infoItems.map((item, index) => (
							<div key={index} className="item px-1 py-3 flex items-center justify-center gap-3">
								<div className="right flex flex-col">
									<span>{item.title}</span>
									<span>{item.info}</span>
								</div>
								<div className="left">
									{item.icon}
								</div>
								{index < infoItems.length - 1 && (
									<div className="hidden lg:inline h-8 w-px bg-white/30 mx-4" />
								)}
							</div>
						))}
					</div>
				</div>
			</div>

		</section>
	);
}