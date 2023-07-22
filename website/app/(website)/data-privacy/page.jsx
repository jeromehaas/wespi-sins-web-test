// IMPORTS
import { Fragment } from 'react';
import DataPrivacyIntro from 'components/03-organisms/data-privacy-intro/data-privacy-intro';
import DataPrivacyLegalInformations from 'components/03-organisms/data-privacy-legal-informations/data-privacy-legal-informations';

// META DESCRIPTION
const metadata = {
	title: 'Datenschutz | Papeterie- und Bluemeparadies Wespi',
	description: 'Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die datenschutz-rechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten. Wir halten diese Bestimmungen ein. Persönliche Daten werden streng vertraulich behandelt und weder an Dritte verkauft noch weiter gegeben. ',
};

// PAGE
const Page = () => {

	// RENDER
	return (
		<Fragment>
			<DataPrivacyIntro />
			<DataPrivacyLegalInformations />
		</Fragment>
	);

};

// EXPORT
export { metadata };
export default Page;
