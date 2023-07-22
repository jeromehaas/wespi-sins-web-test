// IMPORTS
import Heading from 'components/01-atoms/heading/heading';
import Button from 'components/01-atoms/button/button';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import { OrderContext } from 'contexts/order-context';
import { useContext } from 'react';

// COMOPNENT
const OrderSuccessForm = ({ className }) => {

	// SETUP CONTEXT
	const orderContext = useContext(OrderContext);

	// HANDLE CLOSE MENU
	const handleCloseMenu = () => {
		orderContext.setMenuIsOpen(false);
	};

	// RENDER
	return (
		<div className={ `${ className} order-success-form` }>
			<div className="order-success-form__form form">
				<Heading className="form__heading" level="h2">Vielen Dank für Ihre Bestellung</Heading>
				<Paragraph className="form__text">Wir werden ihre Bestellung gerne innerhalb den nächsten fünf Arbeitstagen bearbeiten. Sie werden von uns benachrichtigt, sobald Sie die Bestellung bei uns in Sins abholen können. </Paragraph>
			</div>
			<div className="order-success-form__actions actions">
				<Button className="actions__back-button" onClick={ handleCloseMenu }>Zurück zur Website</Button>
			</div>
		</div>
	);

};

// EXPORT
export default OrderSuccessForm;
