'use client';

// IMPORTS
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';

// COMPONENT
const ContactIntro = () => {

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
			sectionTimelineRef.current.to('.contact-intro .heading', { autoAlpha: 1, top: 0, duration: 0.3 });
		}, sectionRef);
		return () => context.revert();
	}, []);

	// RENDER
	return (
		<Section className="contact-intro" ref={ sectionRef }>
			<Heading className="contact-intro__heading heading animation--fade-in" level="h1">
				Wir sind gerne für Sie da und freuen uns auf Ihren Besuch.
			</Heading>
		</Section>
	);

};

// EXPORT
export default ContactIntro;
