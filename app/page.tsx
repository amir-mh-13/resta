"use client"

import React from 'react';
import Hero from '@/components/home/hero';
import PopularDestinations from '@/components/home/PopularDestinations';
import FeaturedStays from '@/components/home/FeaturedStays';
import StayCategories from '@/components/home/Category';
import WhyResta from '@/components/home/WhyResta';
import FAQ from '@/components/home/FAQ';
import Footer from '@/components/layout/Footer';

import ScrollReveal from "@/components/ui/ScrollReveal";

const Home = () => {
	return (
		<main>
			<Hero />
			<ScrollReveal>
				<PopularDestinations />
			</ScrollReveal>
			<ScrollReveal>
				<FeaturedStays />
			</ScrollReveal>
			<ScrollReveal>
				<StayCategories />
			</ScrollReveal>
			<ScrollReveal>
				<WhyResta />
			</ScrollReveal>
			<ScrollReveal>
				<FAQ />
			</ScrollReveal>
			<Footer />
		</main>
	)
}

export default Home