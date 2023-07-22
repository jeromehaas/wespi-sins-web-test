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
const ContactGuide = () => {

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
			sectionTimelineRef.current.to('.contact-guide .box', { autoAlpha: 1, top: 0, duration: 0.3 }, 0);
		}, sectionRef);
		return () => context.revert();
	}, []);

	// RENDER
	return (
		<Section className="contact-guide" ref={ sectionRef }>
			<div className="contact-guide__box box animation--fade-in">
				<Picture className="box__image" src="/images/general/wespi-stiften-regal.webp" width={ 1920 } height={ 1080 } alt="Papeterie Dienstleistung" />
				<Article className="box__content content">
					<Heading className="content__heading" level="h2">Papeterie anfragen</Heading>
					<Paragraph className="content__text">Sie suchen nach dem passenden Schreibmaterial oder einer Geburtstagskarte? Egal ob Büro- oder Schulmaterial, eine passende Karte oder ein Füller, welcher Sie wieder zum Schreiben von Hand motiviert, in unserem Sortiment finden Sie eine breite Auswahl an Papeterieprodukten.</Paragraph>
					<Paragraph className="content__text">Sie können bei uns online bestellen oder via Mail oder Telefon mit uns Kontakt aufnehmen.</Paragraph>
					<Anchor className="content__link" onClick={ handleOpenOrderMenu } hasArrow>Zur Onlinebestellung</Anchor>
				</Article>
			</div>
			<div className="contact-guide__box box animation--fade-in">
				<Picture className="box__image" src="/images/general/wespi-floristik.webp" width={ 1920 } height={ 1080 } alt="Papeterie Dienstleistung" />
				<Article className="box__content content">
					<Heading className="content__heading" level="h2">Blumige Anfragen</Heading>
					<Paragraph className="content__text">Sie möchten jemandem oder Ihnen selbst Blumen schenken und benötigen eine Beratung? Es ist uns eine Ehre, Ihnen zu ganz verschiedenen Anlässen ein Lächeln oder Anteilnahme ins Herz zu zaubern. </Paragraph>
					<Paragraph className="content__text">Persönlichen Kontakt schätzen wir sehr, daher freuen wir uns auf Ihren Besuch in Sins oder auf Ihren Anruf.</Paragraph>
				</Article>
			</div>
		</Section>
	);
};

// EXPORT
export default ContactGuide;
