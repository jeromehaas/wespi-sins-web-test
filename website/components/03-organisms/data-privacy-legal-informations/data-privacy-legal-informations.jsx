'use client';

// IMPORTS
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import ListItem from 'components/01-atoms/list-item/list-item';
import Paragraph from 'components/01-atoms/paragraph/paragraph';

// COMPONENT
const DataPrivacyLegalInformations = () => {

	// SETUP REFS
	const sectionRef = useRef();
	const sectionTimelineRef = useRef();

	// REGISTER SCROLL-TRIGGER PLUGIN
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
	}, []);

	// FADE-IN ANIMATION
	useEffect(() => {
		const context = gsap.context(() => {
			sectionTimelineRef.current = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: 'top bottom-=160px', end: 'bottom top+=160px', markers: false }, delay: 0.3 }, 0);
			sectionTimelineRef.current.to('.data-privacy-legal-informations .paragraphs', { autoAlpha: 1, top: 0, duration: 0.3 }, 0);
		}, sectionRef);
		return () => context.revert();
	}, []);

	// RENDER
	return (
		<Section className="data-privacy-legal-informations" ref={ sectionRef }>
			<div className="data-privacy-legal-informations__paragraphs paragraphs animation--fade-in">
				<div className="paragraphs__item item">
					<Paragraph className="item__text">Diese Datenschutzerklärung beinhaltet allgemeinen Angaben zum Umgang von Wespi Sins mit Ihren Daten sowie Informationen über Ihre Rechte gemäss der Europäischen Datenschutz-Grundverordnung (DSGVO) und dem Bundesdatenschutzgesetz (BDSG).</Paragraph>
				</div>
				<div className="paragraphs__item item">
					<Heading className="item__heading" level="h4">Namen und Anschrift der für die Datenverarbeitung Verantwortlichen</Heading>
					<Paragraph className="item__text">Wespi Sins</Paragraph>
					<Paragraph className="item__text">Papeterie- und Bluemeparadies</Paragraph>
					<Paragraph className="item__text">Claudia Wespi </Paragraph>
					<Paragraph className="item__text">Bahnhofstrasse 15</Paragraph>
					<Paragraph className="item__text">5643 Sins</Paragraph>
				</div>
				<div className="paragraphs__item item">
					<Heading className="item__heading" level="h4">Datenschutzgesetz</Heading>
					<Paragraph className="item__text">Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die datenschutz-rechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten. Wir halten diese Bestimmungen ein. Persönliche Daten werden streng vertraulich behandelt und weder an Dritte verkauft noch weiter gegeben. In enger Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die Datenbanken so gut wie möglich vor fremden Zugriffen, Verlusten, Missbrauch oder vor Fälschung zu schützen. Beim Zugriff auf unsere Webseiten werden folgende Daten in Logfiles gespeichert: IP-Adresse, Datum, Uhrzeit, Browser-Anfrage und allg. übertragene Informationen zum Betriebssystem resp. Browser. Diese Nutzungsdaten bilden die Basis für statistische, anonyme Auswertungen, so dass Trends erkennbar sind, anhand derer wir unsere Angebote entsprechend verbessern können.</Paragraph>
				</div>
				<div className="paragraphs__item item">
					<Heading className="item__heading" level="h4">Allgemeines zur Datenverarbeitung</Heading>
					<Paragraph className="item__text">Der Schutz Ihrer Daten ist uns wichtig. Wir respektieren Ihre Privatsphäre und setzen uns dafür ein, dass Ihre Daten gemäss den geltenden Gesetzen bearbeitet werden. Wir verarbeiten personenbezogene Daten grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung personenbezogener Daten der betroffenen Person erfolgt nur nach und mit Ihrer Einwilligung. Eine Ausnahme gilt in solchen Fällen, in denen eine vorherige Einholung einer Einwilligung aus tatsächlichen Gründen nicht möglich ist und die Verarbeitung der Daten durch gesetzliche Vorschriften gestattet ist. Mit der vorliegenden Datenschutzerklärung informieren wir Sie umfassend über unsere Datenbearbeitungen.</Paragraph>
				</div>
				<div className="paragraphs__item item">
					<Heading className="item__heading" level="h4">Bearbeitung von Personaldaten</Heading>
					<Paragraph className="item__text">Unter Bearbeitung von Personendaten fallen z.B. die</Paragraph>
					<ListItem className="item__list-item">– Erhebung</ListItem>
					<ListItem className="item__list-item">– Speicherung</ListItem>
					<ListItem className="item__list-item">– Nutzung</ListItem>
					<ListItem className="item__list-item">– Übermittlung</ListItem>
					<ListItem className="item__list-item">– Bekanntgabe</ListItem>
					<ListItem className="item__list-item">– Löschung</ListItem>
					<Paragraph className="item__text">von Personendaten.</Paragraph>
					<Paragraph className="item__text">Wir sammeln Personendaten, welche bei Ihrem Besuch auf unserer Website automatisch erfasst werden. Es sind dies z.B. die Aktivitäten auf der Wespi Sins Webseite und die IP-Adresse von technischen Geräten.</Paragraph>
				</div>
				<div className="paragraphs__item item">
					<Heading className="item__heading" level="h4">Verwendung der Personaldaten</Heading>
					<Paragraph className="item__text">Wir verwenden Ihre Personendaten in erster Linie zum Zweck, um Daten über unsere Zielgruppe zu sammeln, damit wir die Webseite bestmöglich auf deren Bedürfnisse abstimmen können.</Paragraph>
				</div>
				<div className="paragraphs__item item">
					<Heading className="item__heading" level="h4">An wen gehen die Personendaten weiter?</Heading>
					<Paragraph className="item__text">Wir leiten Ihre Daten, falls für die hier in der Datenschutzerklärung genannten Zwecke notwendig, an Dritte weiter, um z.B. technische oder organisatorische Dienstleistungen in Anspruch zu nehmen, die wir für die Erfüllung der genannten Zwecke oder unserer sonstigen Geschäftstätigkeit benötigen. Unsere Dienstleistenden sind verpflichtet, die Personendaten ausschliesslich in unserem Auftrag und nach unseren Instruktionen zu bearbeiten. Wir verpflichten unsere Dienstleistenden zur Einhaltung von technischen und organisatorischen Maßnahmen, welche den Schutz der Personendaten sicherstellen.</Paragraph>
				</div>
				<div className="paragraphs__item item">
					<Heading className="item__heading" level="h4">Dauer der Aufbewahrung von Personendaten</Heading>
					<Paragraph className="item__text">Die personenbezogenen Daten der betroffenen Person werden gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt.</Paragraph>
				</div>
				<div className="paragraphs__item item">
					<Heading className="item__heading" level="h4">Protokollierung</Heading>
					<Paragraph className="item__text">Bei jedem Aufruf unserer Internetseite erfasst unser System automatisiert Daten und Informationen vom Computersystem des aufrufenden Rechners. Bei jedem Zugriff auf die Seiten von Wespi Sins werden Nutzungsdaten durch den jeweiligen Internetbrowser übermittelt und in Protokolldateien, den sogenannten Server-Logfiles, gespeichert. Die dabei gespeicherten Datensätze enthalten die folgenden Daten: Datum und Uhrzeit des Abrufs, Name der aufgerufenen Seite, IP-Adresse, Referrer-URL (Herkunfts-URL, von der aus Sie auf die Webseiten gekommen sind), die übertragene Datenmenge, sowie Produkt und Versions-Informationen des verwendeten Browsers. Diese Logfile-Datensätze werten wir aus, um unser Angebot auf der Wespi Sins Website weiter zu verbessern und nutzerfreundlicher zu gestalten, Fehler schneller zu finden und zu beheben sowie Serverkapazitäten zu steuern. Zugleich nutzen wir die Logfile-Datensätze zur Abwehr von Angriffen auf unsere Wespi Sins Website z.B. im Rahmen von sogenannten Distributed-Denial-of- Service-Attacken, die darauf abzielen, den Zugriff auf unseren Wespi Sins Website durch eine Überlastung mit Anfragen zu blockieren. Welche Daten genau erhoben werden, ist in den Abschnitten zu den einzelnen Analysetools aufgeführt.</Paragraph>
				</div>
				<div className="paragraphs__item item">
					<Heading className="item__heading" level="h4">Zweck und Dauer der Datenverarbeitung</Heading>
					<Paragraph className="item__text">Die vorübergehende Speicherung der IP-Adresse durch das System ist notwendig, um eine Auslieferung der Website an den Rechner des Nutzers / der Nutzerin zu ermöglichen. Hierfür muss die IP-Adresse des Nutzers / der Nutzerin für die Dauer der Sitzung gespeichert bleiben. Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind.</Paragraph>
				</div>
				<div className="paragraphs__item item">
					<Heading className="item__heading" level="h4">Widerspruchs- und Beseitigungsmöglichkeit</Heading>
					<Paragraph className="item__text">Die Erfassung der Daten zur Bereitstellung der Website und die Speicherung der Daten in Logfiles ist für den Betrieb der Internetseite zwingend erforderlich. Es besteht folglich seitens des Nutzers / der Nutzerin keine Widerspruchsmöglichkeit.</Paragraph>
				</div>
				<div className="paragraphs__item item">
					<Heading className="item__heading" level="h4">Cookies</Heading>
					<Paragraph className="item__text">Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert. Die meisten der von uns verwendeten Cookies sind so genannte «Session-Cookies». Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen. Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schliessen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein. Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen z.B. Warenkorbfunktion) erforderlich sind, werden gespeichert. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Soweit andere Cookies (z.B. Cookies zur Analyse Ihres Surfverhaltens) gespeichert werden, werden diese in dieser Datenschutzerklärung gesondert behandelt.</Paragraph>
				</div>
				<div className="paragraphs__item item">
					<Heading className="item__heading" level="h4">Haftung für Links</Heading>
					<Paragraph className="item__text">Wir erklären hiermit ausdrücklich, dass zum Zeitpunkt der Linksetzung keine illegalen Inhalte auf den zu verlinkenden Seiten erkennbar waren. Auf die aktuelle und zukünftige Gestaltung, die Inhalte oder die Urheberschaft der verlinkten/verknüpften Seiten hat Wespi Sins keinerlei Einfluss. Deshalb distanziert sie sich hiermit ausdrücklich von allen Inhalten aller verlinkten/verknüpften Seiten, die nach der Linksetzung verändert wurden. Diese Feststellung gilt für alle innerhalb des eigenen Internetangebotes gesetzten Links und Verweise. Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung solcherart dargebotener Informationen entstehen, haftet allein der Anbieter der Seite, auf welche verwiesen wurde, nicht derjenige, der über Links auf die jeweilige Veröffentlichung lediglich verweist. Aktualität und Änderung dieser Datenschutzerklärung Diese Datenschutzerklärung ist aktuell gültig und hat den Stand März 2021. Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.</Paragraph>
				</div>
				<div className="paragraphs__item item">
					<Heading className="item__heading" level="h4">Aktualität und Änderung dieser Datenschutzerklärung</Heading>
					<Paragraph className="item__text">Wespi Sins erklärt hiermit ausdrücklich, dass zum Zeitpunkt der Linksetzung keine illegalen Inhalte auf den zu verlinkenden Seiten erkennbar waren. Auf die aktuelle und zukünftige Gestaltung, die Inhalte oder die Urheberschaft der verlinkten/verknüpften Seiten hat Wespi Sins keinerlei Einfluss. Deshalb distanziert sie sich hiermit ausdrücklich von allen Inhalten aller verlinkten/verknüpften Seiten, die nach der Linksetzung verändert wurden. Diese Feststellung gilt für alle innerhalb des eigenen Internetangebotes gesetzten Links und Verweise. Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung solcherart dargebotener Informationen entstehen, haftet allein der Anbieter der Seite, auf welche verwiesen wurde, nicht derjenige, der über Links auf die jeweilige Veröffentlichung lediglich verweist. Aktualität und Änderung dieser Datenschutzerklärung Diese Datenschutzerklärung ist aktuell gültig und hat den Stand März 2023. Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.</Paragraph>
				</div>
			</div>
		</Section>
	);

};

// EXPORT
export default DataPrivacyLegalInformations;
