'use client';

// IMPORTS
import { useRef, useEffect, useContext } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { OrderContext } from 'contexts/order-context';
import Heading from 'components/01-atoms/heading/heading';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import Button from 'components/01-atoms/button/button';
import Section from 'components/04-layouts/section/section';
import Article from 'components/04-layouts/article/article';

// COMPONENT
const StationeryTeaser = () => {

	// SETUP REFS
	const sectionRef = useRef();
	const sectionTimelineRef = useRef();

	// BRING IN CONTEXT
	const orderContext = useContext(OrderContext);

	// HANDLE OPEN ORDER MENU
	const handleOpenOrderMenu = () => {
		orderContext.setStep(1);
		orderContext.setMenuIsOpen(true);
	};

	// REGISTER SCROLL-TRIGGER PLUGIN
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
	}, []);

	// FADE-IN ANIMATION
	useEffect(() => {
		const context = gsap.context(() => {
			sectionTimelineRef.current = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: 'top bottom-=160px', end: 'bottom top+=160px', markers: false }, delay: 0.3 });
			sectionTimelineRef.current.to('.stationery-teaser .content', { autoAlpha: 1, top: 0, duration: 0.3 });
		}, sectionRef);
		return () => context.revert();
	}, []);

	// RENDER
	return (
		<Section className="stationery-teaser" ref={ sectionRef }>
			<Article className="stationery-teaser__content content animation--fade-in">
				<Heading className="content__heading" level="h2">Bequem online bestellen</Heading>
				<Paragraph className="content__text">Als bestehender Kunde können Sie jederzeit hier online bestellen. Die Bestellung ist innerhalb von maximal fünf Arbeitstagen bei uns abholbereit und wird mittels Monatsrechnung verrechnet. Falls Sie noch kein Kunde von uns sind, rufen Sie uns am besten an. </Paragraph>
				<Button className="content__button" onClick={ handleOpenOrderMenu }>Jetzt bestellen</Button>
			</Article>
		</Section>
	);

};

// EXPORT
export default StationeryTeaser;
