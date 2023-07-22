'use client';

// IMPORTS
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Heading from 'components/01-atoms/heading/heading';
import Anchor from 'components/01-atoms/anchor/anchor';
import Markdown from 'components/01-atoms/markdown/markdown';
import Picture from 'components/01-atoms/picture/picture';
import Section from 'components/04-layouts/section/section';
import Action from 'components/01-atoms/action/action';

// COMPONENT
const StartNews = () => {

	// SETUP REFS
	const sectionRef = useRef();
	const sectionTimelineRef = useRef();
	const announcementTimelineRef = useRef();

	// FADE-IN ANIMATION
	useEffect(() => {
		const context = gsap.context(() => {
			announcementTimelineRef.current = gsap.timeline({ paused: true });
			announcementTimelineRef.current.to('.start-news .announcements .announcements__item', { bottom: '50%' });
		}, sectionRef);
		return () => { return context.revert(); };
	});

	// FADE-IN ANIMATION
	useEffect(() => {
		const context = gsap.context(() => {
			sectionTimelineRef.current = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: 'top bottom-=160px', end: 'bottom top+=160px', markers: false }, delay: 0.3 });
			sectionTimelineRef.current.to('.start-news .banner__heading', { autoAlpha: 1, top: 0, duration: 0.3 }, 0);
			sectionTimelineRef.current.to('.start-news .banner__list', { autoAlpha: 1, top: 0, duration: 0.3 }, 0);
		}, sectionRef);
		return () => context.revert();
	}, []);

	// SHOW ANNOUNCEMENT
	const showAnnouncement = (event, id) => {
		event.preventDefault();
		gsap.context(() => {
			announcementTimelineRef.current = gsap.timeline();
			document.querySelector(`.start-news .announcements__item[data-id="${ id }"] `) && announcementTimelineRef.current.to(`.start-news .announcements .announcements__item[data-id="${ id }"]`, { bottom: '0%', duration: 0.5 }, 0);
			document.querySelector(`.start-news .announcements__item[data-id="${ id }"] .content__navigator`) && announcementTimelineRef.current.to(`.start-news .announcements .announcements__item[data-id="${ id }"] .content__navigator`, { autoAlpha: 1, top: '0', duration: 0.5, ease: '' }, 0.75);
			document.querySelector(`.start-news .announcements__item[data-id="${ id }"] .content__image`) && announcementTimelineRef.current.to(`.start-news .announcements .announcements__item[data-id="${ id }"] .content__image`, { autoAlpha: 1, top: '0', duration: 0.5, ease: '' }, 1);
			document.querySelector(`.start-news .announcements__item[data-id="${ id }"] .content__heading `) && announcementTimelineRef.current.to(`.start-news .announcements .announcements__item[data-id="${ id }"] .content__heading`, { autoAlpha: 1, top: '0', duration: 0.5, ease: '' }, 1.25);
			document.querySelector(`.start-news .announcements__item[data-id="${ id }"] .content__text`) && announcementTimelineRef.current.to(`.start-news .announcements .announcements__item[data-id="${ id }"] .content__text`, { autoAlpha: 1, top: '0', duration: 0.5, ease: '' }, 1.5);
		}, sectionRef);
	};

	// CLOSE ANNOUNCEMENT
	const closeAnnouncement = (event) => {
		event.preventDefault();
		gsap.context(() => {
			announcementTimelineRef.current = gsap.timeline();
			announcementTimelineRef.current.to('.start-news .announcements .announcements__item .content__text', { autoAlpha: 0, top: '16px', duration: 0.5, ease: '' }, 0);
			announcementTimelineRef.current.to('.start-news .announcements .announcements__item .content__heading', { autoAlpha: 0, top: '16px', duration: 0.5, ease: '' }, 0.25);
			announcementTimelineRef.current.to('.start-news .announcements .announcements__item .content__image', { autoAlpha: 0, top: '16px', duration: 0.5, ease: '' }, 0.5);
			announcementTimelineRef.current.to('.start-news .announcements .announcements__item .content__navigator', { autoAlpha: 0, top: '16px', duration: 0.5, ease: '' }, 0.75);
			announcementTimelineRef.current.to('.start-news .announcements .announcements__item', { bottom: '100%', duration: 0.5 });
		}, sectionRef);
	};

	// RENDER
	return (
		<Section className="start-news" ref={ sectionRef }>
			<div className="start-news__banner banner">
				<Heading className="banner__heading animation--fade-in" level="h2">Aktuell</Heading>
				<div className="banner__list list animation--fade-in">
					<div className="list__item item">
						<Heading className="item__heading" level="h4">Adventsausstellung vom 15. bis 19. November 2023</Heading>
						<Anchor className="item__link" href="/" hasArrow onClick={ (event) => { return showAnnouncement(event, '1'); } }>Mehr erfahren</Anchor>
					</div>
					<div className="list__item item">
						<Heading className="item__heading" level="h4">Sins im Advent am 3. Dezember 2023</Heading>
						<Anchor className="item__link" href="/" hasArrow onClick={ (event) => { return showAnnouncement(event, '2'); } }>Mehr erfahren</Anchor>
					</div>
				</div>
			</div>
			<div className="start-news__announcements announcements">
				<div className="announcements__item item" data-id="1">
					<div className="item__inner">
						<div className="item__content content">
							<div className="item__content content">
								<Action className="content__navigator animation--fade-in" symbol="chevron-left" onClick={ (event) => { return closeAnnouncement(event); } }>zurück</Action>
								<Picture className="content__image animation--fade-in" src="/images/general/wespi-geschaeft.webp" alt="Adventausstellung" width={ 640 } height={ 400 } />
								<Heading className="content__heading animation--fade-in" level="h2">Adventsausstellung vom 15. bis 19. November 2023</Heading>
								<Markdown className="content__text animation--fade-in">
									An den Feiertagen unterstreichen Blumen mit ihrer Schönheit die Bedeutung des Festes. Wir laden Sie herzlichst ein, mit uns die Weihnachtszeit einzuläuten. Blumen schaffen es, in der stillen aber auch hektischen Jahreszeit für einen Moment innezuhalten und zu sein. Geniessen Sie bei uns einen Moment der Inspiration, Freude und Farbe.
									Lassen Sie sich inspirieren!
									Neben Blumen finden Sie bei uns weitere Geschenkideen für Weihnachten oder andere Gelegenheiten. Lassen Sie sich bei uns inspirieren und besuchen Sie uns an der Bahnhofstrasse 15. Wir freuen uns sehr.
								</Markdown>
							</div>
						</div>
					</div>
				</div>
				<div className="announcements__item item" data-id="2">
					<div className="item__inner">
						<div className="item__content content">
							<Action className="content__navigator animation--fade-in" symbol="chevron-left" onClick={ (event) => { return closeAnnouncement(event); } }>zurück</Action>
							<Picture className="content__image animation--fade-in" src="/images/general/wespi-blumen-sortiment.webp" alt="Adventausstellung" width={ 640 } height={ 400 } />
							<Heading className="content__heading animation--fade-in" level="h2">Sins im Advent</Heading>
							<Markdown className="content__text animation--fade-in">
								An den Feiertagen unterstreichen Blumen mit ihrer Schönheit die Bedeutung des Festes. Wir laden Sie herzlichst ein, mit uns die Weihnachtszeit einzuläuten. Blumen schaffen es, in der stillen aber auch hektischen Jahreszeit für einen Moment innezuhalten und zu sein. Geniessen Sie bei uns einen Moment der Inspiration, Freude und Farbe.
								Lassen Sie sich inspirieren!
								Neben Blumen finden Sie bei uns weitere Geschenkideen für Weihnachten oder andere Gelegenheiten. Lassen Sie sich bei uns inspirieren und besuchen Sie uns an der Bahnhofstrasse 15. Wir freuen uns sehr.
							</Markdown>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);

};

// EXPORT
export default StartNews;
