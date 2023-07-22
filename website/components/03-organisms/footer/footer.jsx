'use client';

// IMPORTS
import { OrderContext } from 'contexts/order-context';
import { useContext, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { usePathname } from 'next/navigation';
import Section from 'components/04-layouts/section/section';
import Image from 'next/image';
import Heading from 'components/01-atoms/heading/heading';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import Link from 'next/link';
import Button from 'components/01-atoms/button/button';
import Anchor from 'components/01-atoms/anchor/anchor';

// COMPONENT
const Footer = () => {

	// SETUP REFS
	const sectionRef = useRef();
	const sectionTimelineRef = useRef();

	// GET PATHNAME
	const pathname = usePathname();

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
			sectionTimelineRef.current.to('.footer .logo', { autoAlpha: 1, top: 0, duration: 0.6 }, 0);
			sectionTimelineRef.current.to('.footer .contact-details', { autoAlpha: 1, top: 0, duration: 0.6 }, 0);
			sectionTimelineRef.current.to('.footer .links', { autoAlpha: 1, top: 0, duration: 0.6 }, 0);
		}, sectionRef);
		return () => context.revert();
	}, [pathname]);

	// RENDER
	return (
		<Section className="footer" ref={ sectionRef }>
			<Image className="footer__logo logo animation--fade-in" src="/logos/logo-wespi-sins-bw-full.png" width="300" height="300" alt="WESPI SINS Papeterie- und Bluemeparadies" />
			<address className="footer__contact-details contact-details animation--fade-in">
				<Heading className="contact-details__heading" level="h4">WESPI SINS <br /> Papeterie- und Bluemeparadies</Heading>
				<Paragraph className="contact-details__item paragraph">Bahnhofstrasse 15</Paragraph>
				<Paragraph className="contact-details__item paragraph">5643 Sins</Paragraph>
				<Link className="contact-details__item paragraph" href="mailto:info@wespi-sins.ch">info@wespi-sins.ch</Link>
				<Link className="contact-details__item paragraph" href="tel:0417870887">041 787 08 87</Link>
			</address>
			<div className="footer__links links animation--fade-in">
				<Button className="links__button" onClick={ handleOpenOrderMenu }>Bestellung Papeterieartikel</Button>
				<div className="links__navigation">
					<Anchor className="navigation__item" href="/data-privacy">Datenschutz</Anchor>
					<Anchor className="navigation__item" href="/imprint">Impressum</Anchor>
				</div>
			</div>
		</Section>
	);

};

// EXPORT
export default Footer;
