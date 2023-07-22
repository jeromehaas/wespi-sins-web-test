'use client';

// IMPORTS
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Heading from 'components/01-atoms/heading/heading';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import Section from 'components/04-layouts/section/section';

// COMPONENT
const AboutUsQuote = () => {

	// SETUP REFS
	const sectionRef = useRef();
	const sectionTimelineRef = useRef();

	// REGISTER SCROLL-TRIGGER PLUGIN
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
	}, []);

	// FADE-IN ANIMATION
	useEffect(() => {
		const context = gsap.context(() => {
			sectionTimelineRef.current = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: 'top bottom-=160px', end: 'bottom top+=160px', markers: false }, delay: 0.3 });
			sectionTimelineRef.current.to('.about-us-quote .content', { autoAlpha: 1, top: 0, duration: 0.3 });
		}, sectionRef);
		return () => context.revert();
	}, []);

	// RENDER
	return (
		<Section className="about-us-quote" ref={ sectionRef }>
			<div className="about-us-quote__content content animation--fade-in">
				<Heading className="content__heading" level="h3">«Ich liebe das Leben, die Menschen, die Natur, die Kreativität, das Einzigartige und das Sinnliche.»</Heading>
				<Paragraph className="content__text">Claudia Wespi, Inhaberin</Paragraph>
			</div>
		</Section>
	);

};

// EXPORT
export default AboutUsQuote;
