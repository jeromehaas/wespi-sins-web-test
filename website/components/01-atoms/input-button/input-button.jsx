// IMPORTS
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import PropTypes from 'prop-types';

// COMPONENT
const InputButton = ({ className = '', onClick = null, digit = '', letters = '' }) => {

	// RENDER
	return (
		<button className={ `${ className } input-button` } onClick={ onClick } type="button">
			{ digit === 'B' ? (
				<svg width="18" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6 1L1.5 5.625L6 10.25" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			) : null }
			{ digit === 'R' ? (
				<svg width="18" height="12" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M17 1L1 17M1 1L17 17" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			) : null }
			{ digit && digit !== 'B' && digit !== 'R' ? (
				<Paragraph className="input-button__digit">{ digit }</Paragraph>
			) : null }
			<Paragraph className="input-button__letters paragraph--small">{ letters }</Paragraph>
		</button>
	);

};

// PROP-TYPES
InputButton.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
	letters: PropTypes.string,
	digit: PropTypes.string,
};

// EXPORT
export default InputButton;
