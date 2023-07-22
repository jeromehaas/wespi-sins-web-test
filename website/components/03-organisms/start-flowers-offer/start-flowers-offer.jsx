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
const StartFlowersOffer = () => {

	// SETUP REFS
	const startFlowersOfferRef = useRef();
	const sectionTimelineRef = useRef();

	// REGISTER SCROLL-TRIGGER PLUGIN
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
	}, []);

	// FADE-IN ANIMATION
	useEffect(() => {
		const context = gsap.context(() => {
			sectionTimelineRef.current = gsap.timeline({ scrollTrigger: { trigger: startFlowersOfferRef.current, start: 'top bottom-=160px', end: 'bottom top+=160px', markers: false }, delay: 0.3 });
			sectionTimelineRef.current.to('.start-flowers-offer .content', { autoAlpha: 1, top: 0, duration: 0.3 });
			sectionTimelineRef.current.to('.start-flowers-offer .impressions .item', { autoAlpha: 1, top: 0, duration: 0.3, stagger: 0.3 });
		}, startFlowersOfferRef);
		return () => context.revert();
	}, []);

	// RENDER
	return (
		<Section className="start-flowers-offer" ref={ startFlowersOfferRef }>
			<div className="start-flowers__intro intro">
				<Article className="intro__content content animation--fade-in">
					<Heading className="content__heading" level="h2">Angebot Bluemeparadies</Heading>
					<Paragraph className="content__text">Was uns die Natur mit Blumen widerspiegelt und schenkt, begeistert uns immer wieder aufs Neue. Mittels der Schönheit von Blumen Menschen dabei zu unterstützen, besondere Momente zu unterstreichen oder gar unvergesslich zu machen, ist für uns das schönste.</Paragraph>
				</Article>
			</div>
			<div className="start-flowers⁻offer__impressions impressions">
				<div className="impressions__item item animation--fade-in">
					<div className="item__image-wrapper">
						<Picture className="item__image" src="/images/placeholders/placeholder-landscape.png" />
					</div>
					<div className="item__heading-wrapper">
						<Heading className="item__heading" level="h3">Hauskreationen</Heading>
						<Anchor className="item__link" href="/flowers#flowers-teaser-house-creations" hasArrow>Mehr erfahren</Anchor>
					</div>
				</div>
				<div className="impressions__item item animation--fade-in">
					<div className="item__heading-wrapper">
						<Heading className="item__heading" level="h3">Saisonales</Heading>
						<Anchor className="item__link" href="/flowers#flowers-teaser-seasonal" hasArrow>Mehr erfahren</Anchor>
					</div>
					<div className="item__image-wrapper">
						<Picture className="item__image" src="/images/placeholders/placeholder-portrait.png" />
					</div>
				</div>
				<div className="impressions__item item animation--fade-in">
					<div className="item__image-wrapper">
						<Picture className="item__image" src="/images/placeholders/placeholder-portrait.png" />
					</div>
					<div className="item__heading-wrapper">
						<Heading className="item__heading" level="h3">Hochzeit</Heading>
						<Anchor className="item__link" href="/flowers#flowers-teaser-weddings" hasArrow>Mehr erfahren</Anchor>
					</div>
				</div>
				<div className="impressions__item item animation--fade-in">
					<div className="item__heading-wrapper">
						<Heading className="item__heading" level="h3">Trauer / Beerdigung</Heading>
						<Anchor className="item__link" href="/flowers#flowers-teaser-mourning" hasArrow>Mehr erfahren</Anchor>
					</div>
					<div className="item__image-wrapper">
						<Picture className="item__image" src="/images/placeholders/placeholder-landscape.png" />
					</div>
				</div>
			</div>
		</Section>
	);

};

// EXPORT
export default StartFlowersOffer;
