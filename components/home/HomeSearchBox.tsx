"use client"

import * as React from "react"
import { cn } from "cn"
import { format } from "date-fns"
import { Calendar as CalendarIcon, Search, MapPin } from "lucide-react"

import "./ShowupAnimation.module.css";

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

const formatPersianDate = (date: Date) => {
	return new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
		year: "numeric",
		month: "long",
		day: "numeric",
	}).format(date);
};

interface Props {
	title: string,
	secondTitle: string
}

function DataPicker({ title, secondTitle }: Props) {
	const [date, setDate] = React.useState<Date>()

	return (
		<Popover>
			<PopoverTrigger className="p-7 gap-3"
				render={
					<Button
						variant="outline"
						data-empty={!date}
						className="w-full lg:w-auto justify-start text-left font-normal data-[empty=true]:text-muted-foreground"
					/>
				}
			>
				<CalendarIcon className="text-secondary-foreground size-5" />
				<div className="flex flex-col items-start">
					<span>{title}</span>
					{date ? formatPersianDate(date) : <span className="text-secondary-foreground text-md">{secondTitle}</span>}
				</div>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0">
				<Calendar dir="rtl" mode="single" selected={date} onSelect={setDate} />
			</PopoverContent>
		</Popover>
	)
}

export default function HomeSeatchBox() {
	const [open, setOpen] = React.useState(false);

	return (
		<div className="hero-text-enter hero-delay-4 md:bg-primary/7 w-full md:w-[75vw] lg:w-auto backdrop-blur-[1px] md:backdrop-blur-[2px] rounded-4xl mt-5">
			<form action="" className="z-10 flex flex-col lg:flex-row items-center gap-4 rounded-3xl bg-card/50 md:bg-card p-4 m-4 shadow-xl">
				<input type="text" className="border-2 md:border-1 rounded-lg py-4 px-3 w-full placeholder:text-white md:placeholder-gray-500 lg:min-w-65 outline-none focus:border-primary" placeholder="مقصد یا نام اقامتگاه :" />

				<DataPicker title="تاریخ ورود" secondTitle="تاریخ ورود را انتخاب کنید" />
				<DataPicker title="تاریخ خروج" secondTitle="تاریخ خروج را انتخاب کنید" />
				<Button className="w-full lg:w-auto home-search-box-button p-7 flex items-center justify-center text-md" type="submit">جست و جو <Search className="size-5" /></Button>
			</form>
		</div>
	)
}