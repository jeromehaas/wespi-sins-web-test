'use client';

// IMPORTS
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

// COMPONENT
const Bee = ({ className = '' }) => {

	// SETUP STATE
	const [viewportWidth, setViewportWidth] = useState();

	// SETUP REFS
	const beeRef = useRef();
	const beeTimelineRef = useRef();

	// HANDLE RESIZE
	const handleResize = () => {
		setViewportWidth(window.innerWidth);
	};

	// REGISTER SCROLLTRIGGER PLUGIN
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
	}, []);

	// GET VIEWPORT WIDTH
	useEffect(() => {
		setViewportWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => { return window.removeEventListener('resize', handleResize); };
	}, []);

	// SETUP ANIMATION
	useEffect(() => {
		const context = gsap.context(() => {
			beeTimelineRef.current = gsap.timeline({ delay: 0.25, scrollTrigger: { trigger: beeRef.current, start: 'top bottom-=160px', end: 'bottom top+=160px', markers: false } });
			if (viewportWidth >= 1200) {
				beeTimelineRef.current.to('.bee .bee__image', { right: '120px', duration: 1 });
			} else if (viewportWidth < 1200 && viewportWidth >= 850) {
				beeTimelineRef.current.to('.bee .bee__image', { right: '64px', duration: 1 });
			} else if (viewportWidth < 850) {
				beeTimelineRef.current.to('.bee .bee__image', { right: '-320px', duration: 1 });
				beeTimelineRef.current.to('.bee .bee__image', { right: '200%', duration: 0 });
				beeTimelineRef.current.to('.bee .bee__image', { right: 'calc(100% - 160px)', duration: 1 });
			};
		}, beeRef);
		return () => { return context.revert(); };
	}, [viewportWidth]);

	// RENDER
	return (
		<div className={ `${ className } bee` } ref={ beeRef }>
			<Image className="bee__image" src="/logos/logo-websi-sins-bw-bee-only.png" alt="Bee" width="520" height="320" />
		</div>
	);

};

// EXPORT
export default Bee;
