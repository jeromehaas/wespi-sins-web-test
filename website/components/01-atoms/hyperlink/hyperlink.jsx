// IMPORTS
import PropTypes from 'prop-types';

// COMPONENT
const HyperLink = ({ className = '', children = null, onClick = null, href = '/' }) => {

	// RENDER
	return (
		<a className={ ` ${ className } hyperlink` } href={ href } onClick={ onClick }>{ children }</a>
	);

};

// PROP-TYPES
HyperLink.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func,
};

// EXPORT
export default HyperLink;
