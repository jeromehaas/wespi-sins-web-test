'use client';

// IMPORTS
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import useSlider from 'hooks/use-slider';
import Slider from 'components/02-molecules/slider/slider';
import SliderNavigation from 'components/02-molecules/slider-navigation/slider-navigation';

// COMPONENT
const FlowersTeaserHouseCreations = () => {

	// SETUP REFS
	const sectionRef = useRef();
	const sectionTimelineRef = useRef();

	// DEFINE IMAGES
	const images = [
		{ id: 1, src: '/images/placeholders/placeholder-landscape.png', width: 1920, height: 1080, alt: 'Placeholder' },
		{ id: 2, src: '/images/placeholders/placeholder-portrait.png', width: 1080, height: 1350, alt: 'Placeholder' },
		{ id: 3, src: '/images/placeholders/placeholder-landscape.png', width: 1920, height: 1080, alt: 'Placeholder' },
		{ id: 4, src: '/images/placeholders/placeholder-portrait.png', width: 1080, height: 1350, alt: 'Placeholder' },
		{ id: 5, src: '/images/placeholders/placeholder-landscape.png', width: 1920, height: 1080, alt: 'Placeholder' },
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
			sectionTimelineRef.current.to('.flowers-teaser-house-creations .content', { autoAlpha: 1, top: 0, duration: 0.3 }, 0);
			sectionTimelineRef.current.to('.flowers-teaser-house-creations .slider', { autoAlpha: 1, top: 0, duration: 0.3 }, 0);
		}, sectionRef);
		return () => context.revert();
	}, []);

	// RENDER
	return (
		<Section className="flowers-teaser-house-creations" ref={ sectionRef }>
			<Slider className="flowers-teaser-house-creations__slider slider animation--fade-in" sliderController={ sliderController } />
			<div className="flowers-teaser-house-creations__content content animation--fade-in">
				<Heading className="content__heading" level="h3">Haus-Kreationen</Heading>
				<Paragraph className="content__text">Besondere Momente verlangen nach etwas Besonderem. Wir denken unkonventionell und überraschend, damit ihr Moment mit unseren Blumen unvergesslich wird.</Paragraph>
				<SliderNavigation className="content__navigation" sliderController={ sliderController } />
			</div>
		</Section>
	);

};

// EXPORT
export default FlowersTeaserHouseCreations;
