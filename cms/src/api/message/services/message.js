const { notifyCustomerTemplate, notifyShopTemplate } = require('../templates/index.js');

module.exports = () => {

	const notifyCustomer = async (message) => {

		// TRY-CATCH 
		try {

			// EMAIL TEMPLATE
			const emailTemplate = {
				subject: notifyCustomerTemplate.subject,
				text: notifyCustomerTemplate.text,
				html: notifyCustomerTemplate.html,
			};

			// EMAIL CONFIGS
			const emailConfigs = {
				to: message.email,
				from: 'info@prototype-area.com',
			};

			// EMAIL VARIABLES
			const emailVariables = {
				data: {
					firstname: message.firstname,
					lastname: message.lastname,
				},
			};

			// SEND EMAIL
				await strapi.plugins.email.services.email.sendTemplatedEmail(
					emailConfigs,
					emailTemplate,
					emailVariables,
				);

		// HANDLE ERRORS
		} catch (error) {

			// PRINT ERROR MESSAGE
			console.log(error.message);

		};

	};

	const notifyShop = async (message) => {
	
		// TRY-CATCH 
		try {

			// EMAIL TEMPLATE
			const emailTemplate = {
				subject: notifyShopTemplate.subject,
				text: notifyShopTemplate.text,
				html: notifyShopTemplate.html,
			};

			// EMAIL CONFIGS
			const emailConfigs = {
				to: 'info@prototype-area.com',
				from: 'info@prototype-area.com',
			};

			// EMAIL VARIABLES
			const emailVariables = {
				data: {
					message: message,
				},
			};

			// SEND EMAIL
				await strapi.plugins.email.services.email.sendTemplatedEmail(
					emailConfigs,
					emailTemplate,
					emailVariables,
				);

		// HANDLE ERRORS
		} catch (error) {

			// PRINT ERROR MESSAGE
			console.log(error.message);

		};

	};

	return {
		notifyCustomer,
		notifyShop,
	};

};
