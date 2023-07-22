'use client';

// IMPORTS
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import ContactForm from 'components/02-molecules/contact-form/contact-form';

// COMPONENT
const ContactContactForm = () => {

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
			sectionTimelineRef.current.to('.contact-contact-form .content', { autoAlpha: 1, top: 0, duration: 0.3 }, 0);
			sectionTimelineRef.current.to('.contact-contact-form .contact-form', { autoAlpha: 1, top: 0, duration: 0.3 }, 0);
		}, sectionRef);
		return () => context.revert();
	}, []);

	// RENDER
	return (
		<Section className="contact-contact-form" ref={ sectionRef }>
			<div className="contact-contact-form__content content animation--fade-in">
				<Heading className="content__heading" level="h2">Wir freuen uns auf ihre Nachricht</Heading>
				<Paragraph className="content__text">Sie möchten gerne bei uns etwas bestellen, haben eine Frage oder möchten sonst mit uns Kontakt aufnehmen? Schreiben Sie uns!</Paragraph>
			</div>
			<ContactForm className="contact-contact-form__contact-form contact-form animation--fade-in" />
		</Section>
	);

};

// EXPORT
export default ContactContactForm;
