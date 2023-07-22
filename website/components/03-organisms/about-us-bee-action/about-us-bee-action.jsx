'use client';

// IMPORTS
import { useRef } from 'react';
import Section from 'components/04-layouts/section/section';
import Bee from 'components/02-molecules/bee/bee';

// COMPONENT
const AboutUsBeeAction = () => {

	// SETUP REFS
	const sectionRef = useRef();

	// RENDER
	return (
		<Section className="about-us-bee-action" ref={ sectionRef }>
			<div className="about-us-bee-action__background background background--upper" />
			<Bee className="about-us-bee-action__bee" />
			<div className="about-us-bee-action__background background background--lower" />
		</Section>
	);

};

// EXPORT
export default AboutUsBeeAction;
