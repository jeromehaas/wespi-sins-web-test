const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::message.message', ({ strapi }) => {

	// SEND
	const create = async (ctx) => {

		// TRY-CATCH BLOCK
		try {

			// GET DATA BODY
			const data = ctx.request.body;

			// CREATE ORDER
			const order = await strapi.entityService.create('api::order.order', {
				data: {
					address: data.order.address,
					positions: data.order.positions,
				},
				populate: ['address', 'positions'],
			});

			// NOTIFY CUSTOMER
			await strapi.service('api::order.order').notifyCustomer(order);

			// NOTIFY SHOP
			await strapi.service('api::order.order').notifyShop(order);

			// SEND RESPONSE
			ctx.status = 201;
			ctx.body = {
				success: true,
				data: {
					order: order
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
		create,
	};

 });
