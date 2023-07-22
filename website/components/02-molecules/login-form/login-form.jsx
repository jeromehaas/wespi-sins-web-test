'use client';

// IMPORTS
import InputButton from 'components/01-atoms/input-button/input-button';
import Image from 'next/image';
import axios from 'axios';
import { gsap } from 'gsap';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next';

// COMPONENT
const LoginForm = ({ className }) => {

	// SETUP REFS
	const loginFormRef = useRef();

	// SETUP STATE
	const [input, setInput] = useState('');
	const [status, setStatus] = useState('');

	// SETUP ROUTER
	const router = useRouter();

	// HANDLE BUTTON
	const handleUpdate = (digit) => {
		if (input.length >= 6) return;
		setInput((value) => value + digit);
	};

	// HANDLE DELETE
	const handleDelete = () => {
		setInput((value) => value.substring(0, value.length - 1));
	};

	// HANDLE RESET
	const handleReset = () => {
		setInput('');
	};

	// HANDLE KEY PRESS
	const handleKeyPress = (event) => {
		const { key } = event;
		if (/^\d$/.test(key)) setInput((value) => value + key);
		if (key === 'Backspace') { setInput((value) => value.substring(0, value.length - 1)); }
		if (key === 'Escape') { setInput(''); }
	};

	// VALIDATE INPUT
	const validateInput = async () => {

		try {

			// SEND REQUEST
			const response = await axios({
				method: 'POST',
				url: '/api/auth',
				data: { pin: input },
			});

			// GET TOKEN
			const { token } = response.data;

			// ON SUCCESS
			if (token) {
				setStatus('success');
				setCookie('wespi-user-token', token);
				setTimeout(() => {
					setInput('');
					router.push('/');
				}, 2000);
			} ;

		// HANDLE ERRORS
		} catch (error) {
			setStatus('error');
			setTimeout(() => {
				setStatus('');
				setInput('');
			}, 2000);
		};

	};

	// UPDATE DOTS
	useEffect(() => {
		if (input.length > 6) return;
		gsap.context(() => {
			gsap.to('.login-form .dots__item', { backgroundColor: 'transparent', duration: 0.3 });
			input.length && gsap.to(`.login-form .dots__item:nth-child(-n+${ input.length })`, { backgroundColor: '#000', duration: 0.3 });
		}, loginFormRef);
	}, [input]);

	// VALIDATE INPUT
	useEffect(() => {
		if (input.length !== 6) return;
		validateInput();
	}, [input]);

	// UPDATE STATUS
	useEffect(() => {
		gsap.context(() => {
			if (status === '') gsap.to('.login-form .dots__item', { backgroundColor: 'transparent', duration: 0.3 });
			if (status === 'success') gsap.to('.login-form .dots__item', { backgroundColor: '#03A333', duration: 0.3 });
			if (status === 'error') gsap.to('.login-form .dots__item', { backgroundColor: '#E21100', duration: 0.3 });
		});
	}, [status]);

	// SETUP EVENTLISTENER FOR KEYDOWN
	useEffect(() => {
		window.addEventListener('keydown', handleKeyPress);
		return () => window.removeEventListener('keydown', handleKeyPress);
	}, []);

	// RENDER
	return (
		<div className={ `${ className } login-form` } ref={ loginFormRef }>
			<Image className="login-form__logo" src="/logos/logo-wespi-sins-bw-full.svg" width="160" height="160" alt="Wespi Sins Papeterie und Bluemeparadies" priority />
			<form className="login-form__form form">
				<InputButton className="form__input-button" digit="7" letters="ABC" onClick={ () => handleUpdate('7') } />
				<InputButton className="form__input-button" digit="8" letters="ABC" onClick={ () => handleUpdate('8') } />
				<InputButton className="form__input-button" digit="9" letters="ABC" onClick={ () => handleUpdate('9') } />
				<InputButton className="form__input-button" digit="4" letters="ABC" onClick={ () => handleUpdate('4') } />
				<InputButton className="form__input-button" digit="5" letters="ABC" onClick={ () => handleUpdate('5') } />
				<InputButton className="form__input-button" digit="6" letters="ABC" onClick={ () => handleUpdate('6') } />
				<InputButton className="form__input-button" digit="1" letters="ABC" onClick={ () => handleUpdate('1') } />
				<InputButton className="form__input-button" digit="2" letters="ABC" onClick={ () => handleUpdate('2') } />
				<InputButton className="form__input-button" digit="3" letters="ABC" onClick={ () => handleUpdate('3') } />
				<InputButton className="form__input-button" digit="B" letters="   " onClick={ () => handleDelete() } />
				<InputButton className="form__input-button" digit="0" letters="ABC" onClick={ () => handleUpdate('0') } />
				<InputButton className="form__input-button" digit="R" letters="   " onClick={ () => handleReset() } />
			</form>
			<div className="login-form__dots dots">
				<figure className="dots__item" />
				<figure className="dots__item" />
				<figure className="dots__item" />
				<figure className="dots__item" />
				<figure className="dots__item" />
				<figure className="dots__item" />
			</div>
		</div>
	);

};

// EXPORT
export default LoginForm;
