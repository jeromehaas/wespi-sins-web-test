'use client';

// IMPORTS
import Section from 'components/04-layouts/section/section';
import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';

// COMPONENT
const Grid = () => {

	// SETUP REFS
	const gridRef = useRef();

	// SHOW GRID
	const showGrid = (event) => {
		if (event && event.key === 'g' && event.altKey) {
			gsap.context(() => {
				gsap.to('.grid__column', { display: 'block' });
			}, gridRef);
		}
	};

	// HIDE GRID
	const hideGrid = (event) => {
		if (event && event.key === 'g') {
			gsap.context(() => {
				gsap.to('.grid__column', { display: 'none' });
			}, gridRef);
		}
	};

	// LISTEN ON KEY "G" TO TOGGLE GRID
	useEffect(() => {
		document.addEventListener('keydown', (event) => { return showGrid(event); });
		return () => { return document.removeEventListener('keydown', showGrid); };
	}, []);

	// LISTEN ON KEY "G" TO TOGGLE GRID
	useEffect(() => {
		document.addEventListener('keyup', (event) => { return hideGrid(event); });
		return () => { return document.removeEventListener('keyup', hideGrid); };
	}, []);

	// RENDER
	return (
		<Section className="grid" ref={ gridRef }>
			<div className="grid__column" />
			<div className="grid__column" />
			<div className="grid__column" />
			<div className="grid__column" />
			<div className="grid__column" />
			<div className="grid__column" />
			<div className="grid__column" />
			<div className="grid__column" />
			<div className="grid__column" />
			<div className="grid__column" />
			<div className="grid__column" />
			<div className="grid__column" />
		</Section>
	);

};

// EXPORT
export default Grid;
