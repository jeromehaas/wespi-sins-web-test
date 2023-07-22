'use client';

// IMPORTS
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import HyperLink from 'components/01-atoms/hyperlink/hyperlink';
import useScroll from 'hooks/use-scroll';

// COMPONENT
const FlowersIntro = () => {

	// SETUP REFS
	const sectionRef = useRef();
	const sectionTimelineRef = useRef();

	// SCROLL HOOK
	const { scrollTo } = useScroll();

	// HANDLE CLICK
	const handleClick = (event, target) => {
		event.preventDefault();
		scrollTo(target);
	};

	// REGISTER SCROLL-TRIGGER PLUGIN
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
	}, []);

	// FADE-IN ANIMATION
	useEffect(() => {
		const context = gsap.context(() => {
			sectionTimelineRef.current = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: 'top bottom-=160px', end: 'bottom top+=160px', markers: false }, delay: 0.3 });
			sectionTimelineRef.current.to('.flowers-intro .heading', { autoAlpha: 1, top: 0, duration: 0.3 });
		}, sectionRef);
		return () => context.revert();
	}, []);

	// RENDER
	return (
		<Section className="flowers-intro" ref={ sectionRef }>
			<Heading className="flowers-intro__heading heading animation--fade-in" level="h1">
				Bei uns finden Sie Geschenke der Natur; <HyperLink onClick={ (event) => handleClick(event, '#flowers-teaser-seasonal') }>saisonale Blumen</HyperLink>, originelle <HyperLink onClick={ (event) => handleClick(event, '#flowers-teaser-house-creations') }>Hauskreationen</HyperLink>, Blumiges zu <HyperLink onClick={ (event) => handleClick(event, '#flowers-teaser-weddings') }>Hochzeiten</HyperLink> oder <HyperLink onClick={ (event) => handleClick(event, '#flowers-teaser-mourning') }>Trauerfeiern</HyperLink>.
			</Heading>
		</Section>
	);

};

// EXPORT
export default FlowersIntro;
