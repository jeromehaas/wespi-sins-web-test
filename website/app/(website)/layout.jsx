// IMPORTS
import Website from 'components/04-layouts/website/website';
import { Fragment } from 'react';

// LAYOUT
const RootLayout = ({ children }) => {

	// RENDER
	return (
		<Fragment>
			<Website>
				{children}
			</Website>
		</Fragment>
	);

};

// EXPORT
export default RootLayout;
