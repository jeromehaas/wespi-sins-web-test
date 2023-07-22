// IMPORTS
import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';

// COMPONENT
const PageNotFoundIntro = () => {

	// RENDER
	return (
		<Section className="page-not-found-intro">
			<Heading className="page-not-found-intro__heading" level="h1">
				Diese Seite konnte nicht gefunden werden...
			</Heading>
		</Section>
	);

};

// EXPORT
export default PageNotFoundIntro;
