// IMPORTS
import { Fragment } from 'react';
import PageNotFoundIntro from 'components/03-organisms/page-not-found-intro/page-not-found-intro';
import PageNotFoundCta from 'components/03-organisms/page-not-found-cta/page-not-found-cta';

// META DESCRIPTION
const metadata = {
	title: 'Page not found | Papeterie- und Bluemeparadies Wespi',
};

// PAGE
const Page = () => {

	// RENDER
	return (
		<Fragment>
			<PageNotFoundIntro />
			<PageNotFoundCta />
		</Fragment>
	);

};

// EXPORT
export { metadata };
export default Page;
