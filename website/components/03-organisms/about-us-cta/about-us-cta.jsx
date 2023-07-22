'use client';

// IMPORTS
import { useRef, useEffect, useContext } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import Anchor from 'components/01-atoms/anchor/anchor';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import Article from 'components/04-layouts/article/article';
import Picture from 'components/01-atoms/picture/picture';
import ListItem from 'components/01-atoms/list-item/list-item';
import { OrderContext } from 'contexts/order-context';

// COMPONENT
const AboutUsCta = () => {

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
			sectionTimelineRef.current.to('.about-us-cta .content', { autoAlpha: 1, top: 0, duration: 0.3 }, 0);
			sectionTimelineRef.current.to('.about-us-cta .image', { autoAlpha: 1, top: 0, duration: 0.3 }, 0);
		}, sectionRef);
		return () => context.revert();
	}, []);

	// RENDER
	return (
		<Section className="about-us-cta" ref={ sectionRef }>
			<div className="about-us-cta__item item">
				<Article className="item__content content animation--fade-in">
					<Heading className="content__heading" level="h2">Wir sind für Sie da</Heading>
					<Paragraph className="content__text">Alle in unserem Team bringen andere Fähigkeiten und Eigenschaften mit. Somit sind wir gemeinsam perfekt und seit über 10 Jahren ein Team, welches sich gegenseitig unterstützt und weiterbringt. Neben dem Team an der Front, unterstützen uns unsere Wichtelhelfer tatkräftig im Hintergrund.</Paragraph>
					<ListItem className="content__list-item">– Claudia, Inhaberin, Floristin EFZ</ListItem>
					<ListItem className="content__list-item">– Daniela, Floristin EFZ</ListItem>
					<ListItem className="content__list-item">– Debbi, Floristin EFZ</ListItem>
					<Anchor className="content__link" onClick={ handleOpenOrderMenu } hasArrow>Jetzt bestellen</Anchor>
				</Article>
				<Picture className="item__image image animation--fade-in" src="/images/general/wespi-geschenk.webp" width={ 1920 } height={ 1080 } alt="Papeterie Dienstleistung" />
			</div>
		</Section>
	);
};

// EXPORT
export default AboutUsCta;
