'use client';

// IMPORTS
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import Link from 'next/link';

// COMPONENT
const ImprintResponsiibilities = () => {

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
			sectionTimelineRef.current.to('.imprint-responsibilities .contributor', { autoAlpha: 1, top: 0, duration: 0.3 }, 0);
			sectionTimelineRef.current.to('.imprint-responsibilities .disclaimer', { autoAlpha: 1, top: 0, duration: 0.3 }, 0);
		}, sectionRef);
		return () => context.revert();
	}, []);

	// RENDER
	return (
		<Section className="imprint-responsibilities" ref={ sectionRef }>
			<div className="imprint-responsibilities__contributor contributor animation--fade-in">
				<Heading className="contributor__heading" level="h4">Inhaberin</Heading>
				<Paragraph className="contributor__item">WESPI SINS</Paragraph>
				<Paragraph className="contributor__item">Papeterie- und Bluemeparadies</Paragraph>
				<Paragraph className="contributor__item">Claudia Wespi</Paragraph>
				<Paragraph className="contributor__item">Bahnhofstrasse 15</Paragraph>
				<Paragraph className="contributor__item">5643 Sins</Paragraph>
			</div>
			<div className="imprint-responsibilities__contributor contributor animation--fade-in">
				<Heading className="contributor__heading" level="h4">Fotografie</Heading>
				<Paragraph className="contributor__item">Samira Haas</Paragraph>
				<Link className="contributor__item" href="https://samirahaas.ch">samirahaas.ch</Link>
			</div>
			<div className="imprint-responsibilities__contributor contributor animation--fade-in">
				<Heading className="contributor__heading" level="h4">Webkonzeption und Gestaltung</Heading>
				<Paragraph className="contributor__item">heller grafik</Paragraph>
				<Paragraph className="contributor__item" href="https://hellergrafik.ch">Isabel Heller</Paragraph>
			</div>
			<div className="imprint-responsibilities__contributor contributor animation--fade-in">
				<Heading className="contributor__heading" level="h4">Programmierung</Heading>
				<Paragraph className="contributor__item">haas web solutions</Paragraph>
				<Link className="contributor__item" href="https://haaswebsolutions.io">haaswebsolutions.io</Link>
			</div>
			<div className="imprint-responsibilities__disclaimer disclaimer animation--fade-in">
				<Paragraph>Copyright © 2023 Claudia Wespi. Alle Rechte vorbehalten. Für die Vervielfältigung oder Veränderung jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.</Paragraph>
			</div>
		</Section>
	);

};

// EXPORT
export default ImprintResponsiibilities;
