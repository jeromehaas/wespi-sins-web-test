'use client';

// IMPORTS
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Section from 'components/04-layouts/section/section';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import Heading from 'components/01-atoms/heading/heading';
import Link from 'next/link';

// COMPONENT
const ContactInfo = () => {

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
			sectionTimelineRef.current.to('.contact-info .intro', { autoAlpha: 1, top: 0, duration: 0.3 }, 0);
			sectionTimelineRef.current.to('.contact-info .contact-details', { autoAlpha: 1, top: 0, duration: 0.3 }, 0);
			sectionTimelineRef.current.to('.contact-info .business-hours', { autoAlpha: 1, top: 0, duration: 0.3 }, 0);
		}, sectionRef);
		return () => context.revert();
	}, []);

	// RENDER
	return (
		<Section className="contact-info" ref={ sectionRef }>
			<div className="contact-info__intro intro animation--fade-in">
				<Paragraph className="intro__text">Uns ist es eine Ehre, in den alten, seit 1881 standhaften Bahnhofsmauern kreativ zu wirken und den Menschen mit Blumen und Papeterieartikeln ein Lächeln ins Gesicht zu zaubern. Wir schätzen den persönlichen Kontakt sehr und freuen uns, Sie zu sehen, zu hören oder von Ihnen zu lesen.</Paragraph>
			</div>
			<div className="contact-info__contact-details contact-details animation--fade-in">
				<Heading className="contact-details__heading" level="h2">Wespi Sins</Heading>
				<Paragraph className="contact-details__item">Papeterie- und Bluemeparadies</Paragraph>
				<Paragraph className="contact-details__item">Bahnhofstrasse 15</Paragraph>
				<Paragraph className="contact-details__item">5643 Sins</Paragraph>
				<Link className="contact-details__item paragraph" href="tel:0417870887">041 787 08 87</Link>
				<Link className="contact-details__item paragraph" href="mailto:info@wespi-sins.ch">info@wespi-sins.ch</Link>
			</div>
			<div className="contact-info__business-hours business-hours animation--fade-in">
				<Heading className="business-hours__heading" level="h2">Öffnungszeiten</Heading>
				<Paragraph className="business-hours__item">Montag, Dienstag, Donnerstag und Freitag</Paragraph>
				<Paragraph className="business-hours__item">08.30 – 12.00, 14.00 – 18.30 Uhr</Paragraph>
				<Paragraph className="business-hours__item">Samstag</Paragraph>
				<Paragraph className="business-hours__item">08.00 – 15.00 Uhr</Paragraph>
			</div>
		</Section>
	);

};

// EXPORT
export default ContactInfo;
