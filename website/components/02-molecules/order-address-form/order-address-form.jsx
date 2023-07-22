// IMPORTS
import Heading from 'components/01-atoms/heading/heading';
import Button from 'components/01-atoms/button/button';
import InputField from 'components/01-atoms/input-field/input-field';
import Action from 'components/01-atoms/action/action';
import { OrderContext } from 'contexts/order-context';
import { useContext, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

// COMPONENT
const OrderAddressForm = ({ className }) => {

	// SETUP CONTEXT
	const orderContext = useContext(OrderContext);

	// BRING IN FORM
	const { register, formState, getValues, trigger, setValue } = useFormContext();

	// HANDLE NEXT STEP
	const handleNextStep = async () => {
		const formIsValid = await trigger();
		const values = getValues();
		if (formIsValid) {
			orderContext.storeAddress(values['address']);
			orderContext.setStep(3);
		};
	};

	// HANDLE PREVIOUS STEP
	const handlePreviousStep = () => {
		const values = getValues();
		orderContext.storeAddress(values['address']);
		orderContext.setStep(1);
	};

	// HANDLE CANCEL
	const handleCancel = () => {
		orderContext.setStep(0);
	};

	// SET STORED OR DEFAULT POSITIONS
	useEffect(() => {
		const defaultAddress = orderContext.getDefaultAddressValues();
		setValue('address', defaultAddress);
	}, [orderContext.menuIsOpen, orderContext.step]);

	// RENDER
	return (
		<div className={ `${ className } order-address-form` }>
			<Action className="order-address-form__cancel-button" symbol="arrow-left" onClick={ handleCancel }>Bestellung abbrechen</Action>
			<div className="order-address-form__form form">
				<Heading className="form__heading" level="h2">Rechnungsadresse</Heading>
				<InputField className="form__input-field" category="address" id="company" label="Firma*" placeholder="Firmenname" error={ formState.errors['address'] } type="text" register={ register } validation={ { 	required: { value: true, message: 'Bitte geben Sie Ihren Firmennamen an' } } } />
				<InputField className="form__input-field" category="address" id="firstname" label="Vorname*" placeholder="Ihr Vorname" error={ formState.errors['address'] } type="text" register={ register } validation={ { 	required: { value: true, message: 'Bitte geben Sie Ihren Vornamen an' } } } />
				<InputField className="form__input-field" category="address" id="lastname" label="Nachname*" placeholder="Ihr Nachname" error={ formState.errors['address'] } type="text" register={ register } validation={ { 	required: { value: true, message: 'Bitte geben Sie Ihren Nachnamen an' } } } />
				<InputField className="form__input-field" category="address" id="phone" label="Telefonnummer*" placeholder="Ihre Telefonnummer" error={ formState.errors['address'] } type="text" register={ register } validation={ { 	required: { value: true, message: 'Bitte geben Sie Ihre Telefonnummer an' }, 	pattern: { value: /^(0041|\+41)?\s?[0-9]\s?(\d{2})[\s.-]?(\d{2,4})[\s.-]?(\d{0,2})[\s.-]?(\d{0,2})$/i, message: 'Bitte geben Sie eine gültige E-Mail-Adresse an' } } } />
				<InputField className="form__input-field" category="address" id="email" label="E-Mail-Adresse*" placeholder="Ihre E-Mail-Adresse" error={ formState.errors['address'] } type="text" register={ register } validation={ { 	required: { value: true, message: 'Bitte geben Sie Ihre E-Mail-Adresse an' }, 	pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Bitte geben Sie eine gültige E-Mail-Adresse an' } } } />
				<InputField className="form__input-field" category="address" id="street" label="Strasse und Hausnummer" placeholder="Ihre E-Mail-Adresse" error={ formState.errors['address'] } type="text" register={ register } validation={ { 	required: { value: true, message: 'Bitte geben Sie Ihre E-Mail-Adresse an' } } } />
				<InputField className="form__input-field" category="address" id="town" label="PLZ, Ort" placeholder="PLZ, Ort" error={ formState.errors['address'] } type="text" register={ register } validation={ { 	required: { value: true, message: 'Bitte geben Sie Ihre PLZ und Ihren Ort an' } } } />
			</div>
			<div className="order-address-form__actions actions">
				<Action className="actions__back-button" symbol="chevron-left" onClick={ handlePreviousStep }>zurück</Action>
				<Button className="actions__next-button" onClick={ (event) => handleNextStep(event) }>Speichern und weiter</Button>
			</div>
		</div>
	);

};

// EXPORTS
export default OrderAddressForm;
