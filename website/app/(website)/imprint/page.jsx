import { Fragment } from 'react';
import ImprintIntro from 'components/03-organisms/imprint-intro/imprint-intro';
import ImprintResponsiibilities from 'components/03-organisms/imprint-responsibilities/imprint-responsibilities';

// META DESCRIPTION
const metadata = {
	title: 'Impressum | Papeterie- und Bluemeparadies Wespi',
	description: 'WESPI SINS | Papeterie- und Bluemeparadies | Claudia Wespi | Bahnhofstrasse 15 | 5643 Sins ',
};

// PAGE
const Page = () => {

	// RENDER
	return (
		<Fragment>
			<ImprintIntro />
			<ImprintResponsiibilities />
		</Fragment>
	);

};

// EXPORT
export { metadata };
export default Page;
