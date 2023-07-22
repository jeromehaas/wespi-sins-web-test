// IMPORTS
import PropTypes from 'prop-types';
import Paragraph from 'components/01-atoms/paragraph/paragraph';

// COMPONENT
const Action = ({ className = '', children = null, symbol = null, onClick = null }) => {

	// RENDER
	return (
		<div className={ `${ className } action` } onClick={ onClick }>
			{ symbol === 'close' ? (
				<svg className="action__icon" width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M17 1L1 17M1 1L17 17" stroke="#9E453E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			) : null }
			{ symbol === 'add-circle' ? (
				<svg className="action__icon" width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M11 7V15M7 11H15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z" stroke="#9E453E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			) : null }
			{ symbol === 'close-circle' ? (
				<svg className="action__icon" width="20" height="20" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M14.7991 9.14208L9.14228 14.7989M9.14228 9.14208L14.7991 14.7989M19.0418 19.0416C15.1365 22.9468 8.80488 22.9468 4.89964 19.0416C0.994392 15.1363 0.994392 8.80468 4.89964 4.89944C8.80488 0.994194 15.1365 0.994194 19.0418 4.89944C22.947 8.80468 22.947 15.1363 19.0418 19.0416Z" stroke="#9E453E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			) : null }
			{ symbol === 'chevron-left' ? (
				<svg className="action__icon" width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6 1L1.5 5.625L6 10.25" stroke="#9E453E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			) : null }
			{ symbol === 'arrow-left' ? (
				<svg className="action__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M15 8H1M1 8L8 15M1 8L8 1" stroke="#9E453E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			) : null }
			<Paragraph className="action__label">{ children }</Paragraph>
		</div>
	);

};

// PROP-TYPES
Action.propTypes = {
	className: PropTypes.string,
	children: PropTypes.string.isRequired,
	symbol: PropTypes.string,
	onClick: PropTypes.func,
};

// EXPORT
export default Action;
