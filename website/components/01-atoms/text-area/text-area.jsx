// IMPORTS
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import PropTypes from 'prop-types';

// COMPONENT
const TextArea = ({ className = '', category, id = '', label = '', placeholder = '', register = null, validation = null, error = null }) => {

	// RENDER
	return (
		<div className={ `${ className } text-area ${ error && error[id] ? 'text-area--error' : null }` }>
			<label className="text-area__label" htmlFor={ id }>{ `${ label }` }</label>
			<textarea className="text-area__input" id={ id } placeholder={ placeholder } { ...register(`${ category }.${ id }`, validation) } rows={ 6 } />
			{ error && error[id] && error[id].message ? <Paragraph className="text-area__error paragraph--small">{ error[id].message }</Paragraph> : null }
		</div>
	);

};

// PROP-TYPES
TextArea.propTypes = {
	className: PropTypes.string,
	id: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	isRequired: PropTypes.bool,
	placeholder: PropTypes.string.isRequired,
	register: PropTypes.func.isRequired,
	errorText: PropTypes.string,
	errors: PropTypes.shape({
		id: PropTypes.shape({
			message: PropTypes.string,
		}),
	}),
};

// EXPORT
export default TextArea;
