'use client';

// IMPORTS
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import Anchor from 'components/01-atoms/anchor/anchor';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import Article from 'components/04-layouts/article/article';
import Picture from 'components/01-atoms/picture/picture';

// COMPONENT
const FlowersServices = () => {

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
			sectionTimelineRef.current.to('.flowers-services .box', { autoAlpha: 1, top: 0, duration: 0.3 });
		}, sectionRef);
		return () => context.revert();
	}, []);

	// RENDER
	return (
		<Section className="flowers-services" ref={ sectionRef }>
			<div className="flowers-services__box box animation--fade-in">
				<Picture className="box__image" src="/images/general/wespi-claudia-wespi.webp" width={ 540 } height={ 320 } />
				<Article className="box__content content">
					<Heading className="content__heading" level="h2">Individuelle Beratung</Heading>
					<Paragraph className="content__text">Blumen haben eine eigene Sprache und wir lieben es, diese zu übersetzen. Gerne beraten wir Sie und unterstützen Sie in der Auswahl.</Paragraph>
					<Anchor className="content__link" href="/about-us/#about-us-cta" hasArrow>Mehr erfahren</Anchor>
				</Article>
			</div>
			<div className="flowers-services__box box animation--fade-in">
				<Picture className="box__image" src="/images/general/wespi-lieferung.webp" width={ 540 } height={ 320 } />
				<Article className="box__content content">
					<Heading className="content__heading" level="h2">Heimlieferung im oberen Freiamt</Heading>
					<Paragraph className="content__text">Lieferungen führen wir sehr gerne aus. Die Kosten belaufen sich von CHF 8.– bis 25.–. Bei Dekorations-Auslieferungen bis CHF 150.– (je nach Zeitaufwand). Gerne informieren wir Sie telefonisch oder persönlich im Bluemeparadies.</Paragraph>
					<Anchor className="content__link" href="/contact#contact-guide" hasArrow>Mehr erfahren</Anchor>
				</Article>
			</div>
		</Section>
	);

};

// EXPORT
export default FlowersServices;
