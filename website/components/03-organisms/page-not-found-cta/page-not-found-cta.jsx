// IMPORTS
import Section from 'components/04-layouts/section/section';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import Button from 'components/01-atoms/button/button';

// COMPONENT
const PageNotFoundCta = () => {

	// RENDER
	return (
		<Section className="page-not-found-cta">
			<div className="page-not-found-cta__content content">
				<Paragraph className="content__text">Es scheint, dass diese Seite nicht mehr zu existieren scheint. Bitte kehren Sie zurück zur Website</Paragraph>
				<Button className="content__button" href="/">Zurück zur Website</Button>
			</div>
		</Section>
	);

};

// EXPORT
export default PageNotFoundCta;
