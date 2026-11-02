
import Link from "next/link";
import {
	// Instagram,
	Send,
	// Twitter,
	// Linkedin,
	Heart,
	ArrowLeft,
	Download,
	Mail,
} from "lucide-react";

const quickLinks = [
	{ title: "صفحه اصلی", href: "/" },
	{ title: "مقاصد محبوب", href: "/#destinations" },
	{ title: "دسته‌بندی اقامتگاه‌ها", href: "/#categories" },
	{ title: "درباره ما", href: "/about" },
	{ title: "تماس با ما", href: "/contact" },
];

const informationLinks = [
	{ title: "قوانین و مقررات", href: "/terms" },
	{ title: "حریم خصوصی", href: "/privacy" },
	{ title: "سوالات متداول", href: "/#faq" },
	{ title: "راهنمای رزرو", href: "/guide" },
];

const socialLinks = [
	{ label: "اینستاگرام", href: "#", icon: Send },
	{ label: "تلگرام", href: "#", icon: Send },
	{ label: "توییتر", href: "#", icon: Send },
	{ label: "لینکدین", href: "#", icon: Send },
];

export default function Footer() {
	return (
		<footer
			dir="rtl"
			className="relative overflow-hidden border-t border-primary/10 bg-gradient-to-b from-primary/[0.15] to-primary/[0.09]"
		>
			{/* Decorative background */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -top-32 left-1/3 size-72 rounded-full bg-primary/[0.05] blur-3xl"
			/>

			<div className="relative mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-14">
				<div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.7fr_1.7fr_1.7fr] lg:gap-12">

					{/* Brand */}
					<div className="flex flex-col items-center text-center md:text-start md:items-start">
						<Link
							href="/"
							aria-label="رستا، صفحه اصلی"
							className="mb-4 inline-flex items-center gap-2 text-primary"
						>
							<span className="flex size-11 items-center justify-center rounded-2xl bg-primary text-white shadow-md shadow-primary/20">
								<Heart size={25} strokeWidth={2.2} />
							</span>

							<span className="flex flex-col">
								<span className="text-3xl font-black leading-none">
									رستا
								</span>
								<span className="mt-1 text-[10px] text-muted-foreground">
									سفری به سبک تو
								</span>
							</span>
						</Link>

						<p className="max-w-sm text-sm leading-8 text-muted-foreground">
							رستا، مرجع رزرو اقامتگاه‌های خاص در شمال ایران.
							از ویلا و هتل تا کلبه‌های جنگلی و اقامتگاه‌های بوم‌گردی،
							برای سفری به‌یادماندنی کنار تو هستیم.
						</p>

						<div className="mt-5 flex items-center gap-4">
							{socialLinks.map(({ label, href, icon: Icon }) => (
								<a
									key={label}
									href={href}
									aria-label={label}
									className="text-foreground/80 transition-colors hover:text-primary"
								>
									<Icon size={20} strokeWidth={2} />
								</a>
							))}
						</div>
					</div>


					<div className="flex justify-around">
						{/* Quick links */}
						<div>
							<h3 className="mb-5 font-bold text-lg text-foreground">
								لینک‌های سریع
							</h3>

							<ul className="flex flex-col gap-3">
								{quickLinks.map((link) => (
									<li key={link.href}>
										<Link
											href={link.href}
											className="text-md text-muted-foreground transition-colors hover:text-primary"
										>
											{link.title}
										</Link>
									</li>
								))}
							</ul>
						</div>

						{/* Information */}
						<div>
							<h3 className="mb-5 font-bold text-lg text-foreground">
								اطلاعات بیشتر
							</h3>

							<ul className="flex flex-col gap-3">
								{informationLinks.map((link) => (
									<li key={link.href}>
										<Link
											href={link.href}
											className="text-md text-muted-foreground transition-colors hover:text-primary"
										>
											{link.title}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>


					{/* Newsletter and apps */}
					<div>
						<h3 className="mb-3 font-bold text-lg text-foreground">
							با ما در ارتباط باش
						</h3>

						<p className="mb-4 text-sm leading-6 text-muted-foreground">
							برای دریافت جدیدترین پیشنهادها و تخفیف‌ها،
							ایمیلت رو وارد کن.
						</p>

						<form
							action="#"
							onSubmit={(event) => event.preventDefault()}
							className="flex flex-col gap-2"
						>
							<label htmlFor="footer-email" className="sr-only">
								ایمیل شما
							</label>

							<div className="flex items-center gap-2 rounded-xl border border-primary/10 bg-white/80 px-3 transition-colors focus-within:border-primary/50">
								<Mail
									size={17}
									className="shrink-0 text-muted-foreground"
								/>

								<input
									id="footer-email"
									type="email"
									placeholder="ایمیل شما"
									className="min-w-0 flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground/70"
								/>
							</div>

							<button
								type="submit"
								className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90"
							>
								عضویت در خبرنامه
								<ArrowLeft size={16} />
							</button>
						</form>

						<div className="mt-7">
							<h4 className="mb-3 text-sm font-bold text-foreground">
								دانلود اپلیکیشن رستا
							</h4>

							<div className="flex flex-wrap gap-2">
								<a
									href="#"
									className="flex min-w-0 flex-1 items-center justify-center gap-2 rounded-lg bg-foreground px-3 py-2 text-white transition-opacity hover:opacity-85"
								>
									<Download size={19} />
									<span className="text-right">
										<span className="block text-[9px] text-white/70">
											دریافت از
										</span>
										<span className="block text-xs font-semibold">
											Google Play
										</span>
									</span>
								</a>

								<a
									href="#"
									className="flex min-w-0 flex-1 items-center justify-center gap-2 rounded-lg bg-foreground px-3 py-2 text-white transition-opacity hover:opacity-85"
								>
									<Download size={19} />
									<span className="text-right">
										<span className="block text-[9px] text-white/70">
											دانلود از
										</span>
										<span className="block text-xs font-semibold">
											App Store
										</span>
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className="mt-10 border-t border-primary/15 pt-5">
					<p className="text-center text-xs leading-6 text-muted-foreground md:text-right">
						تمامی حقوق برای رستا محفوظ است. © 2026
					</p>
				</div>
			</div>
		</footer>
	);
}
