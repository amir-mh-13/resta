import Image from "next/image";
import { CircleQuestionMark } from "lucide-react";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
	{
		value: "item-1",
		trigger: "چطور اقامتگاه مناسب سفرم رو انتخاب کنم؟",
		content:
			"میتونی مقصد, تاریخ صفر و امکانات مورد نظرت رو بررسی کنی و اقامتگاه های مناسب رو باهم مقایسه کنی.",
	},
	{
		value: "item-2",
		trigger: "چه نوع اقامتگاه هایی میتونم پیدا کنم؟",
		content:
			"Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will be reflected in your next billing cycle.",
	},
	{
		value: "item-3",
		trigger: "قبل از رزرو به چه نکاتی توجه کنم؟",
		content:
			"We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
	},
	{
		value: "item-4",
		trigger: "آیا امکان لغو رزرو وجود داره؟",
		content:
			"We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
	},
]

export default function FAQ() {
	return (
		<section className="flex flex-col lg:flex-row justify-between md:px-18 py-8 px-4 lg:py-10 lg:px-8">
			<div className="flex flex-col gap-3 order-2 lg:order-1">
				<span className="text-primary text-lg text-center w-50 bg-primary/10 rounded-2xl py-1 px-6">سوالات متداول</span>
				<span className="text-foreground text-3xl">هرچیزی که لازمه بدونی</span>
				<span className="text-md text-gray-500 leading-8">پاسخ به سوالات رایج شما درباره رزرو اقامتگاه, پرداخت, شرایط رزرو و...</span>
				<Accordion defaultValue={["item-1"]} className="gap-4 mt-3 lg:mt-5 w-full lg:w-[45vw] xl:w-[50vw]">
					{items.map((item) => (
						<AccordionItem className="border-1 rounded-sm py-2 px-5 transition-colors data-open:bg-primary/20" key={item.value} value={item.value}>
							<AccordionTrigger className="flex gap-2 items-center text-md font-semibold text-right"><CircleQuestionMark className="text-primary self-start" /> {item.trigger}</AccordionTrigger>
							<AccordionContent>{item.content}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
			<div className="bg-primary/60 rounded-3xl order-1 lg:order-2 mb-4 flex justify-center lg:max-w-[44vw] xl:w-[40vw]">
				<Image
				className="p-5"
					src="/images/HomeFAQ.svg"
					alt="khikh"
					width="550"
					height="550"
				/>
			</div>
		</section>
	)
}