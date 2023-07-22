'use client';

// IMPORTS
import { useRef, useEffect, useContext } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { OrderContext } from 'contexts/order-context';
import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import Anchor from 'components/01-atoms/anchor/anchor';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import Article from 'components/04-layouts/article/article';
import Picture from 'components/01-atoms/picture/picture';

// COMPONENT
const StationeryServices = () => {

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
			sectionTimelineRef.current.to('.stationery-services .item', { autoAlpha: 1, top: 0, duration: 0.3, stagger: 0.3 });
		}, sectionRef);
		return () => context.revert();
	}, []);

	// RENDER
	return (
		<Section className="stationery-services" ref={ sectionRef }>
			<div className="stationery-services__item item animation--fade-in">
				<Article className="item__content content">
					<Heading className="content__heading" level="h2">Papeterie Artikel für Ihr Büro</Heading>
					<Paragraph className="content__text">Mit kleinen Helfern wird vieles einfacher. Wir haben auch ein paar tolle Artikel, mit denen das Arbeiten mehr Spass macht (Bsp. Agenda, Kalender, Verpacken, Schreibgeräte, Ordner, ...).</Paragraph>
					<Anchor className="content__link" onClick={ handleOpenOrderMenu } hasArrow>Jetzt bestellen</Anchor>
				</Article>
				<Picture className="item__image" src="/images/general/wespi-papeterie-artikel.webp" width={ 1920 } height={ 1080 } alt="Papeterie Dienstleistung" />
			</div>
			<div className="stationery-services__item item animation--fade-in">
				<Picture className="item__image" src="/images/general/wespi-stifte-kein.webp" width={ 1920 } height={ 1080 } alt="Papeterie Dienstleistung" />
				<Article className="item__content content">
					<Heading className="content__heading" level="h2">Papeterie Artikel für die Schule</Heading>
					<Paragraph className="content__text">Stylisches und Praktisches für die Schule finden Sie bei uns direkt kombiniert. Ob Bleistifte, Radierer, Lineal, Kugelschreiber, Couverts, Buntstifte, Füller, Schreibhefter, Agenden, Schulrechner, Papiere, Lernhilfen oder Produkte aus dem Sortiment Lehrplan 21.</Paragraph>
					<Anchor className="content__link" onClick={ handleOpenOrderMenu } hasArrow>Jetzt bestellen</Anchor>
				</Article>
			</div>
		</Section>
	);

};

// EXPORT
export default StationeryServices;
