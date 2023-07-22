'use client';

// IMPORTS
import Section from 'components/04-layouts/section/section';
import Bee from 'components/02-molecules/bee/bee';

// COMPONENT
const StartBeeAction = () => {

	// RENDER
	return (
		<Section className="start-bee-action">
			<div className="start-bee-action__background background background--upper" />
			<Bee className="start-bee-action__bee" />
			<div className="start-bee-action__background background background--lower" />
		</Section>
	);

};

// EXPORT
export default StartBeeAction;
