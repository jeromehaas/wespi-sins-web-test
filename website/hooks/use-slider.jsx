'use client';

// IMPORTS
import { useRef, useEffect, useState } from 'react';

// HOOK
const useSlider = ({ images, direction }) => {

	// SETUP STATE
	const [counter, setCounter] = useState(1);
	const [userHasInteracted, setUserHasInteracted] = useState(false);
	const [touchStart, setTouchStart] = useState(0);
	const [touchEnd, setTouchEnd] = useState(0);
	const [viewportWidth, setViewportWidth] = useState();

	// SETUP REFS
	const sliderIntervalRef = useRef();

	// HANDLE TOUCH START
	const handleTouchStart = (e) => {
		setTouchEnd(0);
		setTouchStart(e.targetTouches[0].clientX);
		setUserHasInteracted(true);
	};

	// HANDLE TOUCH MOVE
	const handleTouchMove = (e) => {
		setTouchEnd(e.targetTouches[0].clientX);
	};

	// HANDLE TOUCH END
	const handleTouchEnd = () => {
		if (!touchStart || !touchEnd) return;
		const distance = touchStart - touchEnd;
		const isRightSwipe = distance > 50;
		const isLeftSwipe = distance < -50;
		if (viewportWidth >= 950 && direction === 'rtl') {
			if (isLeftSwipe && (counter <= images.length - 1)) setCounter((value) => { return value + 1; });
			if (isRightSwipe && (counter > 1)) setCounter((value) => { return value - 1; });
		};
		if (viewportWidth >= 950 && direction === 'ltr') {
			if (isLeftSwipe && (counter > 1)) setCounter((value) => { return value - 1; });
			if (isRightSwipe && (counter <= images.length - 1)) setCounter((value) => { return value + 1; });
		};
		if (viewportWidth < 950) {
			if (isLeftSwipe && (counter > 1)) setCounter((value) => { return value - 1; });
			if (isRightSwipe && (counter <= images.length - 1)) setCounter((value) => { return value + 1; });
		}
	};

	// HANDLE JUMP
	const handleJump = (index) => {
		setCounter(index);
		setUserHasInteracted(true);
	};

	// HANDLE RESIZE
	const handleResize = () => {
		setViewportWidth(window.innerWidth);
	};

	// AUTOPLAY
	const autoplay = () => {
		setCounter((value) => { return value + 1; });
	};

	// GET VIEWPORT WIDTH
	useEffect(() => {
		setViewportWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => { return window.removeEventListener('resize', handleResize); };
	});

	// START AUTOPLAY
	useEffect(() => {
		sliderIntervalRef.current = setInterval(() => {
			autoplay();
		}, 8000);
		return () => { return clearInterval(sliderIntervalRef.current); };
	}, []);

	// STOP AUTOPLAY ON LAST SLIDE
	useEffect(() => {
		if (counter >= images.length) {
			clearInterval(sliderIntervalRef.current);
		}
	}, [counter]);

	// STOP INTERVAL ON USER INTERACTION
	useEffect(() => {
		if (userHasInteracted) {
			clearInterval(sliderIntervalRef.current);
		};
	}, [userHasInteracted]);

	// RETURN
	return {
		autoplay,
		handleTouchMove,
		handleTouchStart,
		handleTouchEnd,
		handleJump,
		viewportWidth,
		counter,
		images,
		direction,
	};

};

// EXPORT
export default useSlider;
