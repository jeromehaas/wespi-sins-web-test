// IMPORTS
import { Fragment } from 'react';
import ContactIntro from 'components/03-organisms/contact-intro/contact-intro';
import ContactDetails from 'components/03-organisms/contact-info/contact-info';
import ContactGuide from 'components/03-organisms/contact-guide/contact-guide';
import ContactLocation from 'components/03-organisms/contact-location/contact-location';
import ContactContactForm from 'components/03-organisms/contact-contact-form/contact-contact-form';

// META DESCRIPTION
const metadata = {
	title: 'Kontakt | Papeterie- und Bluemeparadies Wespi',
	description: 'Wir sind gerne für Sie da und freuen uns auf Ihren Besuch. Uns ist es eine Ehre, in den alten, seit 1881 standhaften Bahnhofsmauern kreativ zu wirken und den Menschen mit Blumen und Papeterieartikeln ein Lächeln ins Gesicht zu zaubern. Wir schätzen den persönlichen Kontakt sehr und freuen uns, Sie zu sehen, zu hören oder von Ihnen zu lesen.',
};

// PAGE
const Page = () => {

	// RENDER
	return (
		<Fragment>
			<ContactIntro />
			<ContactDetails />
			<ContactGuide />
			<ContactContactForm />
			<ContactLocation />
		</Fragment>
	);

};

// EXPORT
export { metadata };
export default Page;
