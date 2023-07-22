'use client';

// IMPORTS
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Section from 'components/04-layouts/section/section';
import Picture from 'components/01-atoms/picture/picture';

// COMPONENT
const FlowersImpression = () => {

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
			sectionTimelineRef.current.to('.flowers-impression .image', { autoAlpha: 1, duration: 0.3 });
		}, sectionRef);
		return () => context.revert();
	}, []);

	return (
		<Section className="flowers-impression" ref={ sectionRef }>
			<Picture className="flowers-impression__image image animation--appear" src="/images/general/wespi-blumen-angebot.webp" width={ 1920 } height={ 1600 } priority />
		</Section>
	);

};

export default FlowersImpression;
