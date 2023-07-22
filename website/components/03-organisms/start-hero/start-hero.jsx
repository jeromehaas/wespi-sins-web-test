'use client';

// IMPORTS
import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Heading from 'components/01-atoms/heading/heading';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import Section from 'components/04-layouts/section/section';
import Anchor from 'components/01-atoms/anchor/anchor';
import Article from 'components/04-layouts/article/article';

// COMPONENT
const StartHero = () => {

	// SETUP REFS
	const sectionRef = useRef();
	const sectionTimelineRef = useRef();
	const themeTimelineRef = useRef();
	const flowersVideoRef = useRef();
	const stationeryVideoRef = useRef();

	// SETUP STATE
	const [theme, setTheme] = useState('stationery');

	// PLAY VIDEO
	const playVideo = () => {
		if (theme === 'flowers') {
			stationeryVideoRef.current.pause();
			stationeryVideoRef.current.currentTime = 0;
			flowersVideoRef.current.play();
		};
		if (theme === 'stationery') {
			flowersVideoRef.current.pause();
			flowersVideoRef.current.currentTime = 0;
			stationeryVideoRef.current.play();
		};
	};

	// UPDATE THEME
	const updateTheme = () => {
		if (theme === 'flowers') return setTheme('stationery');
		if (theme === 'stationery') return setTheme('flowers');
	};

	// REGISTER SCROLL-TRIGGER PLUGIN
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
	}, []);

	// FADE-IN ANIMATION
	useEffect(() => {
		const context = gsap.context(() => {
			sectionTimelineRef.current = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: 'top bottom-=160px', end: 'bottom top+=160px', markers: false }, delay: 0 });
			sectionTimelineRef.current.to('.start-hero .boxes', { autoAlpha: 1, top: 0, duration: 0.6 }, 0.6);
		}, sectionRef);
		return () => context.revert();
	}, []);

	// SWITCH THEME LISTENER
	useEffect(() => {
		const context = gsap.context(() => {
			themeTimelineRef.current = gsap.timeline({ onComplete: updateTheme });
			themeTimelineRef.current.call(() => { return playVideo(); }, null, 0);
			themeTimelineRef.current.to(`.start-hero .boxes__item[data-theme="${ theme }"] .progress__status`, { right: '100%', duration: 0 }, 0);
			themeTimelineRef.current.to(`.start-hero .boxes__item[data-theme="${ theme }"] .progress__status`, { left: '0%', duration: 0 }, 0);
			themeTimelineRef.current.to(`.start-hero .background-video__video[data-theme="${ theme }"]`, { autoAlpha: 1, duration: 0.3 }, 0);
			themeTimelineRef.current.to(`.start-hero .boxes__item[data-theme="${ theme }"] .progress__status`, { right: '0%', duration: 7.5 }, 0.5);
			themeTimelineRef.current.to(`.start-hero .boxes__item[data-theme="${ theme }"] .progress__status`, { left: '100%', duration: 1 }, 7.5);
			themeTimelineRef.current.to('.start-hero .background-video__video', { autoAlpha: '0', duration: 0.3 }, 8.5);
		}, sectionRef);
		return () => { return context.revert; };
	}, [theme]);

	// RENDER
	return (
		<Section className="start-hero" ref={ sectionRef }>
			<div className="start-hero__background-video background-video">
				<video className="background-video__video video" muted data-theme="flowers" playsInline ref={ flowersVideoRef } poster="/images/covers/wespi-blumen-standbild.webp">
					<source src="/videos/hero/video-blumen.mp4" type="video/mp4" />
				</video>
				<video className="background-video__video video" data-theme="stationery" muted playsInline ref={ stationeryVideoRef } poster="/images/covers/wespi-papeterie-standbild.webp">
					<source src="/videos/hero/video-papeterie.mp4" type="video/mp4" />
				</video>
			</div>
			<div className="start-hero__boxes boxes animation--fade-in">
				<div className="boxes__item item" data-theme="stationery">
					<Article className="item__content content content">
						<Heading className="content__heading" level="h2">Papeterie</Heading>
						<Paragraph className="content__text">Von Schul oder Büromaterial über Geschenkideen bis zu Grusskarten</Paragraph>
						<Anchor className="content__link" href="/stationery" hasArrow>Mehr erfahren</Anchor>
					</Article>
					<div className="item__progress progress">
						<figure className="progress__background" />
						<figure className="progress__status" />
					</div>
				</div>
				<div className="boxes__item item" data-theme="flowers">
					<Article className="item__content content content">
						<Heading className="content__heading" level="h2">Blumen</Heading>
						<Paragraph className="content__text">Freude bereiten mit Geschenken aus der Natur.</Paragraph>
						<Anchor className="content__link" href="/flowers" hasArrow>Mehr erfahren</Anchor>
					</Article>
					<div className="item__progress progress">
						<figure className="progress__background" />
						<figure className="progress__status" />
					</div>
				</div>
			</div>
		</Section>
	);

};

// EXPORT
export default StartHero;
