import { NextResponse } from 'next/server';

// GET NEXTRESPONSE MEHTODS
const { json } = NextResponse;

// LOGIN
export async function POST(request) {

	try {

		// GET BODY
		const { pin } = await request.json();
		if (!pin) throw new Error('no pin provided');

		// GET ENV VARIABLES
		const { APP_USER_SECRET: userSecret } = process.env;
		if (!userSecret) throw new Error('user-secret is not defined');

		// CHECK PIN
		if (pin !== userSecret) throw new Error('pin not valid');

		// GENERATE TOKEN
		const token = {
			expiry: Math.floor(Date.now() / 1000) + (60 * 60 * 24),
			data: { pin: pin },
		};

		// RETURN
		return json(
			{ message: 'login was successfull', token: token },
			{ status: 200 },
		);

	// HANDLE ERRORS
	} catch (error) {
		return json(
			{ message: error.message },
			{ status: 401 },
		);
	};

};
