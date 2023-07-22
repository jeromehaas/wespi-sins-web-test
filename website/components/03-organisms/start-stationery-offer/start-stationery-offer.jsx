'use client';

// IMPORTS
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Section from 'components/04-layouts/section/section';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import Heading from 'components/01-atoms/heading/heading';
import Picture from 'components/01-atoms/picture/picture';
import Anchor from 'components/01-atoms/anchor/anchor';
import Article from 'components/04-layouts/article/article';

// COMPONENT
const StartStationeryOffer = () => {

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
			sectionTimelineRef.current.to('.start-stationery-offer .content', { autoAlpha: 1, top: 0, duration: 0.3 });
			sectionTimelineRef.current.to('.start-stationery-offer .impressions .item', { autoAlpha: 1, top: 0, duration: 0.3, stagger: 0.3 });
		}, sectionRef);
		return () => context.revert();
	}, []);

	// RENDER
	return (
		<Section className="start-stationery-offer" ref={ sectionRef }>
			<div className="start-stationery__intro intro">
				<Article className="intro__content content animation--fade-in">
					<Heading className="content__heading" level="h2">Angebot Papeterieparadies</Heading>
					<Paragraph className="content__text">Ob Druckerpatrone, schöne Karten oder Geschenkverpackungen – in unserem Sortiment finden Sie das, was Sie brauchen.</Paragraph>
				</Article>
			</div>
			<div className="start-stationery⁻offer__impressions impressions">
				<div className="impressions__item item animation--fade-in">
					<div className="item__image-wrapper">
						<Picture className="item__image" src="/images/general/wespi-stifte-gross.webp" />
					</div>
					<div className="item__heading-wrapper">
						<Heading className="item__heading" level="h3">Schule</Heading>
						<Anchor className="item__link" href="/stationery#stationery-services" hasArrow>Mehr erfahren</Anchor>
					</div>
				</div>
				<div className="impressions__item item animation--fade-in">
					<div className="item__heading-wrapper">
						<Heading className="item__heading" level="h3">Büro</Heading>
						<Anchor className="item__link" href="/stationery#stationery-services" hasArrow>Mehr erfahren</Anchor>
					</div>
					<div className="item__image-wrapper">
						<Picture className="item__image" src="/images/general/wespi-papeterie-artikel.webp" />
					</div>
				</div>
			</div>
		</Section>
	);

};

// EXPORT
export default StartStationeryOffer;
