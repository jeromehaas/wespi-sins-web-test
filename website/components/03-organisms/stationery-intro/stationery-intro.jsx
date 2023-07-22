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
const StationeryIntro = () => {

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
			sectionTimelineRef.current.to('.stationery-intro .heading', { autoAlpha: 1, top: 0, duration: 0.3 });
		}, sectionRef);
		return () => context.revert();
	}, []);

	// RENDER
	return (
		<Section className="stationery-intro" ref={ sectionRef }>
			<Heading className="stationery-intro__heading heading animation--fade-in" level="h1">
				Bei uns finden Sie eine grosse Auswahl an <HyperLink onClick={ (event) => handleClick(event, '#stationery-services') }>Büro-</HyperLink> und <HyperLink onClick={ (event) => handleClick(event, '#stationery-services') }>Schulmaterial</HyperLink>. In Sins oder Online.
			</Heading>
		</Section>
	);

};

// EXPORT
export default StationeryIntro;
