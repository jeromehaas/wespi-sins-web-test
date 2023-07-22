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
const AboutUsOwner = () => {

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
			sectionTimelineRef.current.to('.about-us-owner .image', { autoAlpha: 1, top: 0, duration: 0.3 }, 0);
			sectionTimelineRef.current.to('.about-us-owner .content', { autoAlpha: 1, top: 0, duration: 0.3 }, 0);
		}, sectionRef);
		return () => context.revert();
	}, []);

	// RENDER
	return (
		<Section className="about-us-owner" ref={ sectionRef }>
			<div className="about-us-owner__item item">
				<Picture className="item__image image animation--fade-in" src="/images/general/wespi-claudia-wespi.webp" width={ 1920 } height={ 1080 } alt="Papeterie Dienstleistung" />
				<Article className="item__content content animation--fade-in">
					<Heading className="content__heading" level="h2">Claudia Wespi</Heading>
					<Paragraph className="content__text">1996 hat sich Claudia Wespi mit dem Bluemeparadies einen Traum erfüllt. Und der hält bis heute an. Für viele ist das Bluemeparadies ein Ort wo alles möglich ist und genau das macht Claudia Wespi glücklich. Ihr Bluemeparadies soll Freude schenken.</Paragraph>
				</Article>
			</div>
		</Section>
	);

};

// EXPORT
export default AboutUsOwner;
