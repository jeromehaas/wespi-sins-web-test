'use client';

// IMPORTS
import { useRef } from 'react';
import Section from 'components/04-layouts/section/section';
import Bee from 'components/02-molecules/bee/bee';

const StationeryBeeAction = () => {

	// SETUP REFS
	const sectionRef = useRef();

	// RENDER
	return (
		<Section className="stationery-bee-action" ref={ sectionRef }>
			<div className="stationery-bee-action__background background background--upper" />
			<Bee className="stationery-bee-action__bee" />
			<div className="stationery-bee-action__background background background--lower" />
		</Section>
	);

};

// EXPORT
export default StationeryBeeAction;
