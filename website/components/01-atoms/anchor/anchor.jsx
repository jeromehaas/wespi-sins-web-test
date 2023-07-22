// IMPORTS
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Fragment } from 'react';

// COMPONENT
const Anchor = ({ className = '', children = null, href = null, onClick = null, hasArrow = false }) => {

	// RENDER
	return (
		<Fragment>
			{ href !== null ? (
				<Link className={ ` ${ className } anchor` } href={ href } onClick={ onClick }>
					<span className="anchor__label">{ children }</span>
					{ hasArrow ? (
						<svg className="anchor__icon icon" width="30" height="13" viewBox="0 0 30 13" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M24 11.125L28.5 6.5L24 1.875M1.5 6.5L28.5 6.5L1.5 6.5Z" stroke="#9E453E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					) : null }
				</Link>
			) : (
				<button className={ ` ${ className } anchor` } type="button" onClick={ onClick }>
					<span className="anchor__label">{ children }</span>
					{ hasArrow ? (
						<svg className="anchor__icon icon" width="30" height="13" viewBox="0 0 30 13" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M24 11.125L28.5 6.5L24 1.875M1.5 6.5L28.5 6.5L1.5 6.5Z" stroke="#9E453E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					) : null }
				</button>
			)}
		</Fragment>
	);

};

// PROP-TYPES
Anchor.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	href: PropTypes.string,
	onClick: PropTypes.func,
	hasArrow: PropTypes.bool,
};

// EXPORT
export default Anchor;
