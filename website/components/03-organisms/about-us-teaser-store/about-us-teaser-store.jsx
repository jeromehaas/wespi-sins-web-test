'use client';

// IMPORTS
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import Button from 'components/01-atoms/button/button';
import useSlider from 'hooks/use-slider';
import Slider from 'components/02-molecules/slider/slider';
import SliderNavigation from 'components/02-molecules/slider-navigation/slider-navigation';

// COMPONENT
const AboutUsTeaserStore = () => {

	// SETUP REFS
	const sectionRef = useRef();
	const sectionTimelineRef = useRef();

	// DEFINE IMAGES
	const images = [
		{ id: 1, src: '/images/general/wespi-blumen-sortiment.webp', width: 2001, height: 1334, alt: 'Placeholder' },
		{ id: 2, src: '/images/general/wespi-dekorationen.webp', width: 1334, height: 2001, alt: 'Placeholder' },
		{ id: 4, src: '/images/general/wespi-papeterie-theke.webp', width: 1334, height: 2001, alt: 'Placeholder' },
		{ id: 3, src: '/images/general/wespi-karten-auswahl.webp', width: 2001, height: 1334, alt: 'Placeholder' },
	];

	// BRING IN SLIDER
	const sliderController = useSlider({
		images: images,
		direction: 'rtl',
	});

	// REGISTER SCROLL-TRIGGER PLUGIN
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
	}, []);

	// FADE-IN ANIMATION
	useEffect(() => {
		const context = gsap.context(() => {
			sectionTimelineRef.current = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: 'top bottom-=160px', end: 'bottom top+=160px', markers: false }, delay: 0.3 });
			sectionTimelineRef.current.to('.about-us-teaser-store .content', { autoAlpha: 1, top: 0, duration: 0.3 }, 0);
			sectionTimelineRef.current.to('.about-us-teaser-store .slider', { autoAlpha: 1, top: 0, duration: 0.3 }, 0);
		}, sectionRef);
		return () => context.revert();
	}, []);

	// RENDER
	return (
		<Section className="about-us-teaser-store" ref={ sectionRef }>
			<Slider className="about-us-teaser-store__slider slider animation--fade-in" sliderController={ sliderController } />
			<div className="about-us-teaser-store__content content animation--fade-in">
				<Heading className="content__heading" level="h3">Hier finden Sie uns</Heading>
				<Paragraph className="content__text">Besuchen Sie uns in den geschichtsträchtigen Räumen an der Bahnhofstrasse 15 in Sins.</Paragraph>
				<Button className="content__button" href="https://www.google.com/maps/dir//Bluemeparadies+Wespi,+Bahnhofstrasse+15,+5643+Sins/@47.1882579,8.3977903,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x4790017b0cadfe5d:0xf01cc2646870bc95!2m2!1d8.3977903!2d47.1882579!3e1?entry=ttu" target="_blank">Anreise</Button>
				<SliderNavigation className="content__navigation" sliderController={ sliderController } />
			</div>
		</Section>
	);

};

export default AboutUsTeaserStore;
