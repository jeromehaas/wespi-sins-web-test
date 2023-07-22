// IMPORTS
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { useEffect } from 'react';

// HOOK
const useScroll = () => {

	// SCROLL-TO
	const scrollTo = (target) => {
		gsap.to(window, { scrollTo: { y: target, offsetY: 0 }, ease: 'power1.inOut', duration: 1 });
	};

	// REGISTER SCROLLTRIGGER PLUGIN
	useEffect(() => {
		gsap.registerPlugin(ScrollToPlugin);
	}, []);

	// RETURN
	return {
		scrollTo,
	};

};

// EXPORT
export default useScroll;
