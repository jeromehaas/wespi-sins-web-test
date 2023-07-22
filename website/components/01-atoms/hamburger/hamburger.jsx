// IMPORTS
import PropTypes from 'prop-types';

// COMPONENT
const Hamburger = ({ className = '', isOpen = false, onClick = null }) => {

	// RENDER
	return (
		<button className={ ` ${ className } hamburger hamburger--squeeze ${ isOpen ? 'hamburger--is-open' : '' } ` } type="button" aria-label="Hamburger" onClick={ onClick }>
			<span className="hamburger__box">
				<span className="hamburger__inner" />
			</span>
		</button>
	);

};

// PROPT-TYPES
Hamburger.propTypes = {
	className: PropTypes.string,
	isOpen: PropTypes.bool,
	onClick: PropTypes.func,
};

// EXPORT
export default Hamburger;
