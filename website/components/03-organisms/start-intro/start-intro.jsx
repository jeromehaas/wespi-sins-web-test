'use client';

// IMPORTS
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Heading from 'components/01-atoms/heading/heading';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import Button from 'components/01-atoms/button/button';
import Section from 'components/04-layouts/section/section';
import Article from 'components/04-layouts/article/article';

// COMPONENT
const StartIntro = () => {

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
			sectionTimelineRef.current.to('.start-intro .content', { autoAlpha: 1, top: 0, duration: 0.3 }, 0);
		}, sectionRef);
		return () => context.revert();
	}, []);

	// RENDER
	return (
		<Section className="start-intro" ref={ sectionRef }>
			<Article className="start-intro__content content animation--fade-in">
				<Heading className="content__heading" level="h2">Seit Jahren mit viel Herzblut UND Leidenschaft für Sie da</Heading>
				<Paragraph className="content__text">Ob im Alltag, an Hochzeiten, zu Trauer- oder Geburtstagsfesten – wir erfüllen saisonale Blumenwünsche. Zu Blumen gehört oft eine Karte und dazu braucht es natürlich einen toller Stift. Auch hier lassen wir Sie nicht im Stich; bei uns gibt es seit über 17 Jahren Papeterieprodukte zu kaufen. Ob zum Geschenk oder für Ihren Bürobedarf, wir beraten Sie gerne, damit Sie die für sich passenden Produkte finden.</Paragraph>
				<Button href="/about-us">Mehr über uns</Button>
			</Article>
		</Section>
	);

};

// EXPORT
export default StartIntro;
