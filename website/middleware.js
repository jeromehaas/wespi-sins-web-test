import { NextResponse } from 'next/server';

// GET RESPONSE METHODS
const { next, redirect } = NextResponse;

// MIDDLEWARE
export const middleware = async (request) => {

	try {

		// GET ENV VARIABLES
		const { APP_ENVIRONMENT: environment } = process.env;
		const { APP_USER_SECRET: userSecret } = process.env;

		// LET PASS ALWAYS IN PRODUCTION
		if (environment === 'production') {
			return next();
		};

		// GET PIN OF COOKIE
		const cookie = request.cookies.get('wespi-user-token');
		const value = JSON.parse(cookie.value);
		const { pin } = value.data;
		const { expiry } = value;

		// CHECK IF COOKIE IS VALID
		const now = Math.floor(Date.now() / 1000);
		if (expiry < now) return redirect(new URL('/login', request.url));

		// CHECK IF PIN IS VALID
		if (!pin) return redirect(new URL('/login', request.url));

		// IF PIN IS VALID LET USER PASS
		if (pin === userSecret) {
			return next();
		}

		// CATCH EXCEPTIONS
		return redirect(new URL('/login', request.url));

	// HANDLE ERRORS
	} catch (error) {
		return redirect(new URL('/login', request.url));
	};

};

// CONFIG
export const config = {

	// MATCHER
	matcher: [
		'/',
		'/flowers',
		'/stationery',
		'/about-us',
		'/contact',
		'/imprint',
		'/data-privacy',
	],

};
