// IMPORTS
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Fragment } from 'react';

// COMPONENT
const Button = ({ className = '', children = null, onClick = null, href = null, target = '_self' }) => {

	// RENDER
	return (
		<Fragment>
			{ href !== null ? (
				<Link className={ `${ className } button` } href={ href } target={ target }>
					{ children }
				</Link>
			) : (
				<button className={ `${ className } button` } type="button" onClick={ onClick }>
					{ children }
				</button>
			)}
		</Fragment>
	);

};

// PROP-TYPES
Button.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func,
	target: PropTypes.string,
};

// EXPORT
export default Button;
