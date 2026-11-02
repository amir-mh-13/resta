"use client";

import { useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
	children: React.ReactNode;
	className?: string;
	delay?: number;
};

export default function ScrollReveal({
	children,
	className = "",
	delay = 0,
}: ScrollRevealProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const element = ref.current;

		if (!element) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.unobserve(entry.target);
				}
			},
			{
				threshold: 0.1,
				rootMargin: "0px 0px -40px 0px",
			}
		);

		observer.observe(element);

		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			className={`scroll-reveal ${isVisible ? "is-visible" : ""} ${className}`}
			style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
		>
			{children}
		</div>
	);
}
