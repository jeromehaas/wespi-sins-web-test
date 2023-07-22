// IMPORTS
import PropTypes from 'prop-types';
import Image from 'next/image';

// COMPONENT
const Picture = ({ className = '', src = '/', alt = '', quality = 100, priority = false, width = 2500, height = 1600 }) => {

	// RENDER
	return (
		<Image className={ `${ className} picture` } src={ src } alt={ alt } width={ width } height={ height } quality={ quality } priority={ priority } />
	);

};

// PROP-TYPES
Picture.propTypes = {
	className: PropTypes.string,
	quality: PropTypes.number,
	width: PropTypes.number,
	height: PropTypes.number,
	alt: PropTypes.string,
	src: PropTypes.string,
	priority: PropTypes.bool,
};

// EXPORT
export default Picture;
