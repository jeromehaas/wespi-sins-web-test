// IMPORTS
import PropTypes from 'prop-types';

// COMPONENTS
const SubmitButton = ({ className = '', children = null, disabled = false }) => {

	// RENDER
	return (
		<input className={ `${ className } submit-button` } type="submit" value={ children } disabled={ disabled } />
	);

};

// PROP-TYPES
SubmitButton.propTypes = {
	className: PropTypes.string,
	children: PropTypes.string,
	disabled: PropTypes.bool,
};

// EXPORT
export default SubmitButton;
