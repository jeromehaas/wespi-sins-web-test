'use client';

// IMPORTS
import InputField from 'components/01-atoms/input-field/input-field';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import SubmitButton from 'components/01-atoms/submit-button/submit-button';
import TextArea from 'components/01-atoms/text-area/text-area';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// COMPONENT
const ContactForm = ({ className }) => {

	// SETUP REFS
	const contactFormRef = useRef();
	const toastTimelineRef = useRef();

	// BRING IN REACT-HOOK-FORM
	const { register, formState, handleSubmit, getValues, reset } = useForm();

	// SETUP TOAST STATE
	const [toast, setToast] = useState({
		status: 'hidden',
		message: '',
	});

	// HANDLE SUBMIT
	const handleDispatch = async () => {

		try {

			// GET MESSAGE
			const { message } = getValues();

			// SEND THE MESSAGE
			const response = await axios({
				method: 'POST',
				url: `${ process.env.NEXT_PUBLIC_CMS_BASE_URL }/api/message`,
				data: {
					message: message,
				},
			});

			// // CHECK IF REQUEST WAS SUCCESSFULL
			if (response.status >= 200 && response.status < 300) {

				// 	// SHOW TOAST
				setToast({ status: 'success', message: 'Die Nachricht wurde erfolgreich übermittelt.' });

				// 	// RESET FORM
				reset();

			};

		// HANDLE ERRORS
		} catch (error) {

			// SHOW TOAST
			setToast({ status: 'error', message: 'Die Nachricht konnte nicht übermittelt werden.' });

		};

	};

	// UPDATE TOAST
	useEffect(() => {
		if (toast.status === 'hidden') return;
		const context = gsap.context(() => {
			toastTimelineRef.current = gsap.timeline();
			toastTimelineRef.current.to('.contact-form .toast', { bottom: 'calc(0% + 32px)', duration: 1 }, 0);
			toastTimelineRef.current.to('.contact-form .toast .toast__progress .progress__status', { right: '0%', duration: 4 }, 1);
			toastTimelineRef.current.to('.contact-form .toast .toast__progress .progress__status', { left: '100%', duration: 1 }, 5);
			toastTimelineRef.current.to('.contact-form .toast', { bottom: '-240px', duration: 1 }, 7);
		}, contactFormRef);
		return () => { return context.revert(); };
	}, [toast]);

	// RENDER
	return (
		<div className={ `${ className } contact-form ` } onSubmit={ handleSubmit(handleDispatch) } ref={ contactFormRef }>
			<form className="contact-form__form form">
				<InputField className="form__input-field" id="company" label="Firma" placeholder="Firmenname" category="message" type="text" register={ register } error={ formState.errors['message'] } validation={ { 	required: { value: false } } } />
				<InputField className="form__input-field" id="firstname" label="Vorname*" placeholder="Ihr Vorname" category="message" type="text" register={ register } error={ formState.errors['message'] } validation={ { 	required: { value: true, message: 'Bitte geben Sie Ihren Vornamen an' } } } />
				<InputField className="form__input-field" id="lastname" label="Nachname*" placeholder="Ihr Nachname" category="message" type="text" register={ register } error={ formState.errors['message'] } validation={ { 	required: { value: true, message: 'Bitte geben Sie Ihren Nachnamen an' } } } />
				<InputField className="form__input-field" id="phone" label="Telefonnummer*" placeholder="Ihre Telefonnummer" category="message" type="text" register={ register } error={ formState.errors['message'] } validation={ { 	required: { value: true, message: 'Bitte geben Sie Ihre Telefonnummer an' }, 	pattern: { value: /^(0041|\+41)?\s?[0-9]\s?(\d{2})[\s.-]?(\d{2,4})[\s.-]?(\d{0,2})[\s.-]?(\d{0,2})$/i, message: 'Bitte geben Sie eine gültige Telefonnummer an' } } } />
				<InputField className="form__input-field" id="email" label="E-Mail-Adresse*" placeholder="Ihre E-Mail-Adresse" category="message" type="text" register={ register } error={ formState.errors['message'] } validation={ { 	required: { value: true, message: 'Bitte geben Sie Ihre E-Mail-Adresse an' }, 	pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Bitte geben Sie eine gültige E-Mail-Adresse an' } } } />
				<InputField className="form__input-field" id="subject" label="Betreff" placeholder="Betreff" category="message" type="text" register={ register } error={ formState.errors['message'] } validation={ { 	required: { value: false } } } />
				<TextArea className="form__input-field" id="content" label="Nachricht*" placeholder="Ihre Nachricht" category="message" type="text" register={ register } error={ formState.errors['message'] } validation={ { 	required: { value: true, message: 'Bitte verfassen Sie eine Nachricht' } } } />
				<SubmitButton className="form__submit-button" onClick={ handleSubmit(handleDispatch) }>Nachricht senden</SubmitButton>
			</form>
			<div className="contact-form__toast toast">
				<div className="toast__content content">
					{ toast && toast.status === 'success' ? (
						<svg className="content__icon" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M14.9285 7.74652L9.5235 15.2296L7.69096 12.4541" stroke="#9E453E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							<circle cx="11" cy="11" r="10" stroke="#9E453E" strokeWidth="2" />
						</svg>
					) : null }
					{ toast && toast.status === 'error' ? (
						<svg className="content__icon" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M14.7991 9.14208L9.14228 14.7989M9.14228 9.14208L14.7991 14.7989M19.0418 19.0416C15.1365 22.9468 8.80488 22.9468 4.89964 19.0416C0.994392 15.1363 0.994392 8.80468 4.89964 4.89944C8.80488 0.994194 15.1365 0.994194 19.0418 4.89944C22.947 8.80468 22.947 15.1363 19.0418 19.0416Z" stroke="#9E453E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					) : null }
					<Paragraph className="content__message">{ toast.message }</Paragraph>
				</div>
				<div className="toast__progress progress">
					<figure className="progress__background" />
					<figure className="progress__status" />
				</div>
			</div>
		</div>
	);

};

// EXPORT
export default ContactForm;
