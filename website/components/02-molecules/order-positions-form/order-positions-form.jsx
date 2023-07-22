// IMPORTS
import Heading from 'components/01-atoms/heading/heading';
import InputTable from 'components/01-atoms/input-table/input-table';
import Button from 'components/01-atoms/button/button';
import Action from 'components/01-atoms/action/action';
import { OrderContext } from 'contexts/order-context';
import { useContext, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

// COMPONENT
const OrderPositionsForm = ({ className }) => {

	// BRING IN ORDER-CONTEXT
	const orderContext = useContext(OrderContext);

	// BRING IN FORM
	const { register, control, formState, getValues, trigger, setValue } = useFormContext();

	// HANDLE NEXT STEP
	const handleNextStep = async () => {
		const formIsValid = await trigger();
		const values = getValues();
		if (formIsValid) {
			orderContext.storePositions(values['positions']);
			orderContext.setStep(2);
		};
	};

	// HANDLE CANCEL
	const handleCancel = () => {
		orderContext.setStep(0);
	};

	// SET STORED OR DEFAULT POSITIONS
	useEffect(() => {
		const defaultPositions = orderContext.getDefaultPositionsValues();
		setValue('positions', defaultPositions);
	}, [orderContext.menuIsOpen, orderContext.step]);

	// RENDER
	return (
		<div className={ `${ className } order-positions-form` }>
			<Action className="order-positions-form__cancel-button" symbol="arrow-left" onClick={ handleCancel }>Bestellung abbrechen</Action>
			<div className="order-positions-form__form form">
				<Heading className="form__heading" level="h2">Bestellung</Heading>
				<InputTable
					className="form__input"
					register={ register }
					category="positions"
					error={ formState.errors['positions'] }
					control={ control }
					formState={ formState }
					defaultValues={ { 'description': '', 'manufacturer': '', 'serial': '', 'quantity': '' } }
					labels={ { add: 'Weitere Artikel hinzufügen', remove: 'Artikel entfernen' } }
					options={ [
						{ id: 'description', label: 'Artikelbezeichnung', placeholder: 'Artikelbezeichnung', defaultValue: '', validation: { required: { value: true, message: 'Bitte geben Sie die Artikelbezeichnung an' } }, type: 'text' },
						{ id: 'manufacturer', label: 'Artikelhersteller', placeholder: 'Artikelhersteller', defaultValue: '', validation: { 	required: { value: true, message: 'Bitte geben Sie den Artikelhersteller an' } }, type: 'text' },
						{ id: 'serial', label: 'Bestellnummer', placeholder: 'Bestellnummer', defaultValue: '', validation: { 	required: { value: true, message: 'Bitte geben Sie die Bestellnummer an' } }, type: 'text' },
						{ id: 'quantity', label: 'Anzahl', placeholder: '1', defaultValue: '', validation: { required: { value: true, message: 'Bitte geben Sie die Anzahl an' } }, type: 'text' },
					] }
				/>
			</div>
			<div className="order-positions-form__actions actions">
				<Button className="actions__next-button" onClick={ handleNextStep }>Speichern und weiter</Button>
			</div>
		</div>
	);

};

// EXPORT
export default OrderPositionsForm;
