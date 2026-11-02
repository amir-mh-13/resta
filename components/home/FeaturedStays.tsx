"use client";

import { Suspense } from "react";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { MapPin } from "lucide-react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "@base-ui/react";

type Stay = {
  id: number;
  title: string;
  city: string;
  image: string;
  pricePerNight: number;
  capacity: number;
  bedrooms: number;
  category: "villa" | "hotel" | "suite" | "ecolodge";
};

const stays: Stay[] = [
  {
    id: 1,
    title: "هتل ساحلی سی ساید",
    city: "رامسر",
    image: "/images/SeaSideHotel.png",
    pricePerNight: 2500000,
    capacity: 4,
    bedrooms: 20,
    category: "hotel",
  },
  {
    id: 2,
    title: "هتل ساحلی سی ساید",
    city: "رامسر",
    image: "/images/SeaSideHotel.png",
    pricePerNight: 2500000,
    capacity: 4,
    bedrooms: 20,
    category: "hotel",
  },
  {
    id: 3,
    title: "هتل ساحلی سی ساید",
    city: "رامسر",
    image: "/images/SeaSideHotel.png",
    pricePerNight: 2500000,
    capacity: 4,
    bedrooms: 20,
    category: "hotel",
  },
  {
    id: 4,
    title: "هتل ساحلی سی ساید",
    city: "رامسر",
    image: "/images/SeaSideHotel.png",
    pricePerNight: 2500000,
    capacity: 4,
    bedrooms: 20,
    category: "hotel",
  },
  {
    id: 5,
    title: "هتل ساحلی سی ساید",
    city: "رامسر",
    image: "/images/SeaSideHotel.png",
    pricePerNight: 2500000,
    capacity: 4,
    bedrooms: 20,
    category: "hotel",
  },
  {
    id: 6,
    title: "هتل ساحلی سی ساید",
    city: "رامسر",
    image: "/images/SeaSideHotel.png",
    pricePerNight: 2500000,
    capacity: 4,
    bedrooms: 20,
    category: "hotel",
  },
];

export default function FeaturedStays() {
  return (
    <div className="mt-16  bg-primary/25">
      <div className="flex flex-col gap-1 px-8 items-center justify-center pt-3">
        <span className="text-xl font-semibold text-primary bg-primary/10 py-2 px-5 rounded-3xl">
          اقامتگاه های پیشنهادی
        </span>
        <span className="text-2xl md:text-xl text-center">
          برای سفر بعدیت یه اقامتگاه خاص پیدا کن!
        </span>
      </div>

      <Suspense
        fallback={
          <span className="text-3xl text-center">
            در حال بارگذاری اطلاعات....
          </span>
        }
      >
        <Swiper
          className="stays-swiper"
          dir="rtl"
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={1}
          // slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            639: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 3,
            },
            1023: {
              slidesPerView: 4,
            },
          }}
        >
          {stays.map((stay) => (
            <SwiperSlide key={stay.id} className="p-4.5 mb-7">
              <Link href="/">
                <article className="group overflow-hidden rounded-xl bg-card text-card-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus-within:ring-2 focus-within:ring-ring/50 cursor-pointer">
                  {/* Image */}
                  <div className="relative aspect-[6/4.1] w-full overflow-hidden">
                    <img
                      src={stay.image}
                      alt={stay.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    {/* Gradient overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                    {/* Category badge */}
                    <div className="absolute right-3 top-3">
                      <span className="inline-flex items-center rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                        {stay.category === "hotel"
                          ? "هتل"
                          : stay.category === "villa"
                            ? "ویلا"
                            : stay.category === "suite"
                              ? "سوئیت"
                              : "اکولوژ"}
                      </span>
                    </div>

                    {/* City */}
                    <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between gap-3">
                      <p className="truncate flex gap-1 text-sm font-medium text-white">
                        <MapPin className="size-5" /> {stay.city}
                      </p>

                      {/* Fake rating (replace with real data later) */}
                      <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-black/35 px-2.5 py-1 text-xs text-white backdrop-blur">
                        <span aria-hidden>★</span>
                        4.8
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-3 p-4">
                    <h3 className="line-clamp-1 text-base font-semibold">
                      {stay.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                      <span className="rounded-full bg-muted px-2.5 py-1 text-foreground/80">
                        ظرفیت {stay.capacity} نفر
                      </span>
                      <span className="rounded-full bg-muted px-2.5 py-1 text-foreground/80">
                        {stay.bedrooms} اتاق
                      </span>
                    </div>

                    <div className="mt-1 border-t-1 flex items-end justify-between gap-3">
                      <div className="flex flex-col mt-3">
                        <span className="text-xs text-muted-foreground">
                          هر شب از
                        </span>
                        <span className="text-base font-bold text-foreground">
                          {stay.pricePerNight.toLocaleString("fa-IR")}{" "}
                          <span className="text-xs font-medium text-muted-foreground">
                            تومان
                          </span>
                        </span>
                      </div>

                      <Button className="inline-flex items-center justify-center rounded-lg bg-secondary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring/50">
                        مشاهده
                      </Button>
                    </div>
                  </div>
                </article>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Suspense>
    </div>
  );
}
