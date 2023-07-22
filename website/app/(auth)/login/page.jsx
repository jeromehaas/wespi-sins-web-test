// IMPORTS
import Login from 'components/03-organisms/login/login';
import { Fragment } from 'react';

// META DESCRIPTION
const metadata = {
	title: 'Login | Papeterie- und Bluemeparadies Wespi',
};

// PAGE
const Page = () => {

	// RENDER
	return (
		<Fragment>
			<Login />
		</Fragment>
	);

};

// EXPORT
export { metadata };
export default Page;
