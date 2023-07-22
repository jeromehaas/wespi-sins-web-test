'use client';

// IMPORTS
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { usePathname } from 'next/navigation';
import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import Paragraph from 'components/01-atoms/paragraph/paragraph';

// COMPONENT
const OpeningTimes = () => {

	// SETUP REFS
	const sectionRef = useRef();
	const sectionTimelineRef = useRef();

	// GET PATHNAME
	const pathname = usePathname();

	// REGISTER SCROLL-TRIGGER PLUGIN
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
	}, []);

	// FADE-IN ANIMATION
	useEffect(() => {
		const context = gsap.context(() => {
			sectionTimelineRef.current = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: 'top bottom-=160px', end: 'bottom top+=160px', markers: false }, delay: 0.3 });
			sectionTimelineRef.current.to('.opening-times .heading', { autoAlpha: 1, top: 0, duration: 0.6 }, 0);
			sectionTimelineRef.current.to('.opening-times .content', { autoAlpha: 1, top: 0, duration: 0.6 }, 0);
		}, sectionRef);
		return () => context.revert();
	}, [pathname]);

	// RENDER
	return (
		<Section className="opening-times" ref={ sectionRef }>
			<Heading className="opening-times__heading heading animation--fade-in" level="h2">Öffnungszeiten</Heading>
			<div className="opening-times__content content animation--fade-in">
				<div className="content__item item">
					<Heading className="item__heading" level="h4">Montag, Dienstag, Donnerstag und Freitag</Heading>
					<Paragraph className="item__times">08.30 – 12.00, 14.00 – 18.30 Uhr</Paragraph>
				</div>
				<div className="content__item item">
					<Heading className="item__heading" level="h4">Samstag</Heading>
					<Paragraph className="item__times">08.00 – 15.00 Uhr</Paragraph>
				</div>
			</div>
		</Section>
	);

};

// EXPORT
export default OpeningTimes;
