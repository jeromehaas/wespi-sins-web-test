// IMPORTS
import { Fragment } from 'react';
import AboutUsIntro from 'components/03-organisms/about-us-intro/about-us-intro';
import AboutUsSpeciality from 'components/03-organisms/about-us-speciality/about-us-speciality';
import AboutUsBeeAction from 'components/03-organisms/about-us-bee-action/about-us-bee-action';
import AboutUsOwner from 'components/03-organisms/about-us-owner/about-us-owner';
import AboutUsQuote from 'components/03-organisms/about-us-quote/about-us-quote';
import AboutUsCta from 'components/03-organisms/about-us-cta/about-us-cta';
import AboutUsTeaserStore from 'components/03-organisms/about-us-teaser-store/about-us-teaser-store';

// META DESCRIPTION
const metadata = {
	title: 'Über Uns | Papeterie- und Bluemeparadies Wespi',
	description: 'Im kleinen Team überzeugen wir gross. Wir sind ein eingespieltes Team und freuen uns über berührende Begegnungen mit verschiedensten Menschen. Ihr Wunsch oder Anliegen trifft auf unsere Kreativität – gemeinsam finden wir für Sie das passende Produkt.',
};

// PAGE
const Page = () => {

	// RENDER
	return (
		<Fragment>
			<AboutUsIntro />
			<AboutUsSpeciality />
			<AboutUsBeeAction />
			<AboutUsOwner />
			<AboutUsQuote />
			<AboutUsCta />
			<AboutUsTeaserStore />
		</Fragment>
	);

};

// EXPORT
export { metadata };
export default Page;
