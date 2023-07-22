// IMPORTS
import PropTypes from 'prop-types';

// COMPONENTS
const Paragraph = ({ className = '', children = null, onClick = null }) => {

	// RENDER
	return (
		<p className={ ` ${ className } paragraph` } onClick={ onClick }>
			{ children }
		</p>
	);

};

// PROP-TYPES
Paragraph.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

// EXPORT
export default Paragraph;
