'use client';

// IMPORTS
import Section from 'components/04-layouts/section/section';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import OrderPositionsForm from 'components/02-molecules/order-positions-form/order-positions-form';
import OrderAddressForm from 'components/02-molecules/order-address-form/order-address-form';
import OrderConfirmationForm from 'components/02-molecules/order-confirmation-form/order-confirmation-form';
import OrderSuccessForm from 'components/02-molecules/order-success-form/order-success-form';
import OrderCancelForm from 'components/02-molecules/order-cancel-form/order-cancel-form';
import { useForm, FormProvider } from 'react-hook-form';
import { useEffect, useRef, useContext } from 'react';
import { gsap } from 'gsap';
import { OrderContext } from 'contexts/order-context';

// COMPONENT
const Order = () => {

	// BRING IN ORDER-CONTEXT
	const orderContext = useContext(OrderContext);

	// SETUP REFS
	const orderRef = useRef();

	// BRING IN FORM
	const formMethods = useForm();

	// SHOW MENU
	useEffect(() => {
		gsap.context(() => {
			if (orderContext.menuIsOpen === true) return gsap.to('.order__menu', { right: '0%', duration: 0.5 });
			if (orderContext.menuIsOpen === false) return gsap.to('.order__menu', { right: '100%', duration: 0.5 });
		}, orderRef);
	}, [orderContext.menuIsOpen]);

	// STYLE NAVIGATION
	useEffect(() => {
		const context = gsap.context(() => {
			gsap.to('.menu__navigation .step .step__line', { backgroundColor: '#E4BCB5', duration: 0 });
			gsap.to(`.menu__navigation .step:nth-child(${ orderContext.step }) .step__line`, { backgroundColor: '#9E453E', duration: 0 });
		}, orderRef);
		return () => context.revert();
	}, [orderContext.step]);

	// RENEDER
	return (
		<Section className="order" ref={ orderRef }>
			<div className="order__menu menu">
				<div className="menu__inner">
					<div className="menu__navigation">
						<div className="navigation__step step">
							<figure className="step__line" />
							<Paragraph className="step__label paragraph--uppercase paragraph--bold">1. Bestellung</Paragraph>
						</div>
						<div className="navigation__step step">
							<figure className="step__line" />
							<Paragraph className="step__label paragraph--uppercase paragraph--bold">2. Rechnungsadresse</Paragraph>
						</div>
						<div className="navigation__step step">
							<figure className="step__line" />
							<Paragraph className="step__label paragraph--uppercase paragraph--bold">3. Bestellübersicht</Paragraph>
						</div>
					</div>
					<div className="menu__forms forms">
						<FormProvider { ...formMethods }>
							{ orderContext.step === 0 && <OrderCancelForm className="forms__form" /> }
							{ orderContext.step === 1 && <OrderPositionsForm className="forms__form" /> }
							{ orderContext.step === 2 && <OrderAddressForm className="forms__form" /> }
							{ orderContext.step === 3 && <OrderConfirmationForm className="forms__form" /> }
							{ orderContext.step === 4 && <OrderSuccessForm className="forms__form" /> }
						</FormProvider>
					</div>
				</div>
			</div>
		</Section>
	);

};

// EXPORT
export default Order;
