"use client"

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Compass, Home } from "lucide-react";

export default function NotFound() {
	return (
		<main
			dir="rtl"
			className="relative flex min-h-[calc(100vh-100px)] items-center overflow-hidden bg-[#fcfaff] px-5 py-12 sm:px-8 lg:px-12"
		>
			{/* Decorative background */}
			<div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-purple-100/50 blur-3xl" />
			<div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-violet-100/60 blur-3xl" />

			<div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
				{/* Text content */}
				<section className="order-1 flex flex-col items-center text-center lg:pr-18  lg:items-start lg:text-right">
					<span className="mb-3 text-8xl font-black tracking-tight text-[#4026a5] sm:text-8xl md:text-9xl">
						404
					</span>

					<h1 className="text-2xl font-extrabold leading-relaxed text-[#21165f] sm:text-3xl md:text-4xl">
						صفحه مورد نظر پیدا نشد!
					</h1>

					<p className="mt-5 max-w-lg text-base leading-8 text-[#8179ad] sm:text-lg">
						به نظر می‌رسه مسیری که دنبالش بودی،
						<br className="hidden sm:block" />
						 وجود نداره یا جابه‌جا شده.
					</p>

					<div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
						<Link
							href="/"
							className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-gradient-to-l from-primary to-[#6940df] px-7 py-4 font-bold text-white shadow-lg shadow-purple-200/60 transition hover:-translate-y-0.5 hover:shadow-xl"
						>
							<Home size={21} fill="currentColor" />
							بازگشت به خانه
						</Link>

						<button
							type="button"
							onClick={() => window.history.back()}
							className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border-2 border-primary/20 px-7 py-4 font-bold text-[#30217d] transition hover:border-primary hover:bg-purple-50"
						>
							<Compass size={21} className="text-[#8051ed]" />
							رفتن به صفحه قبل
							<ArrowLeft size={17} />
						</button>
					</div>
				</section>

				{/* Illustration: replace the temporary image with your final transparent PNG */}
				<div className="order-2 relative mx-auto aspect-[4/3] w-full max-w-[650px]">
					<Image
						src="/images/not-found.png"
						alt="صفحه مورد نظر پیدا نشد!"
						fill
						priority
						sizes="(max-width: 1023px) 100vw, 50vw"
						className="object-contain"
					/>
				</div>
			</div>
		</main>
	);
}
