// IMPORTS
import Heading from 'components/01-atoms/heading/heading';
import Button from 'components/01-atoms/button/button';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import Action from 'components/01-atoms/action/action';
import { OrderContext } from 'contexts/order-context';
import { useContext } from 'react';

// COMPONENT
const OrderCancelForm = ({ className }) => {

	// SETUP CONTEXT
	const orderContext = useContext(OrderContext);

	// HANDLE CANCEL
	const handleCancel = () => {
		orderContext.setMenuIsOpen(false);
	};

	// HANDLE PREVIOUS STEP
	const handlePreviousStep = () => {
		orderContext.setStep(1);
	};

	// RENDER
	return (
		<div className={ `${ className } cancel-form` }>
			<div className="cancel-form__form form">
				<Heading className="form__heading" level="h2">Bestellung abbrechen</Heading>
				<Paragraph className="form__text">Sind Sie sicher, dass Sie Ihre Bestellung abbrechen möchten?</Paragraph>
			</div>
			<div className="cancel-form__actions actions">
				<Button className="actions__cancel-button" onClick={ handleCancel }>Abbrechen und schliessen</Button>
				<Action className="actions__back-button" symbol="chevron-left" onClick={ handlePreviousStep }>zurück</Action>
			</div>
		</div>
	);

};

// EXPORT
export default OrderCancelForm;
