// IMPORTS
import { Fragment } from 'react';
import StartIntro from 'components/03-organisms/start-intro/start-intro';
import StartNews from 'components/03-organisms/start-news/start-news';
import StartHero from 'components/03-organisms/start-hero/start-hero';
import StartFlowersOffer from 'components/03-organisms/start-flowers-offer/start-flowers-offer';
import StartStationeryOffer from 'components/03-organisms/start-stationery-offer/start-stationery-offer';
import StartBeeAction from 'components/03-organisms/start-bee-action/start-bee-action';

// META DESCRIPTION
const metadata = {
	title: 'Papeterie- und Bluemeparadies Wespi',
	metadata: 'Seit Jahren mit viel Herzblut und Leidenschaft für Sie da. Ob im Alltag, an Hochzeiten, zu Trauer- oder Geburtstagsfesten – wir erfüllen saisonale Blumenwünsche. Zu Blumen gehört oft eine Karte und dazu braucht es natürlich einen toller Stift.',
};

// PAGE
const Page = () => {

	// RENDER
	return (
		<Fragment>
			<StartHero />
			<StartNews />
			<StartIntro />
			<StartBeeAction />
			<StartFlowersOffer />
			<StartStationeryOffer />
		</Fragment>
	);

};

// EXPORT
export { metadata };
export default Page;
