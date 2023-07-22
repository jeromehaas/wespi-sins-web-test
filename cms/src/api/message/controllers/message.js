const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::message.message', ({ strapi }) => {

	// SEND
	const send = async (ctx) => {

		// TRY-CATCH BLOCK
		try {

			// GET DATA BODY
			const data = ctx.request.body;

			// CREATE MESSAGE
			const message = await strapi.entityService.create('api::message.message', {
				data: data.message,
			});

			// NOTIFY CUSTOMER
			await strapi.service('api::message.message').notifyCustomer(message);

			// NOTIDY SHOP
			await strapi.service('api::message.message').notifyShop(message);

			// SEND RESPONSE
			ctx.status = 201;
			ctx.body = {
				success: true,
				data: {
					message: message
				},
			};

		// HANDLE ERRORS
		} catch (error) {

			// PRINT ERROR
			console.error(`Error: ${ error.message }`)

			// SEND RESPONSE
			ctx.status = 500;
			ctx.body = {
				success: false,
				error: error.message
			};

		};

	};

	// RETURN
	return {
		send,
	};

 });
