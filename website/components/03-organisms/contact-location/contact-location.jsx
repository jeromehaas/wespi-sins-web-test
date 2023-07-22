'use client';

// IMPORTS
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import Article from 'components/04-layouts/article/article';
import Picture from 'components/01-atoms/picture/picture';

// COMPONENT
const ContactLocation = () => {

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
			sectionTimelineRef.current.to('.contact-location .image', { autoAlpha: 1, top: 0, duration: 0.3 }, 0);
			sectionTimelineRef.current.to('.contact-location .content', { autoAlpha: 1, top: 0, duration: 0.3 }, 0);
		}, sectionRef);
		return () => context.revert();
	}, []);

	// RENDER
	return (
		<Section className="contact-location" ref={ sectionRef }>
			<div className="contact-location__item item">
				<Picture className="item__image image animation--fade-in" src="/images/general/wespi-geschaeft.webp" width={ 1920 } height={ 1080 } alt="Papeterie Dienstleistung" />
				<Article className="item__content content animation--fade-in">
					<Heading className="content__heading" level="h2">UNSER Kreatives Paradies In den alten Sinser Bahnhofsmauern </Heading>
					<Paragraph className="content__text">Besuchen Sie uns und lassen Sie sich von unserem Blumen- und Papeteriesortiment inspirieren.</Paragraph>
				</Article>
			</div>
		</Section>
	);

};

// EXPORT
export default ContactLocation;
