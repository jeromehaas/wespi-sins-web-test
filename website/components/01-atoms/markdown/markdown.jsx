// IMPORTS
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

// COMPONENT
const Markdown = ({ className, children, modifier, size }) => {

	// RENDER
	return (
		<ReactMarkdown className={ ` ${ className } markdown ${ modifier ? `markdown--${ modifier }` : '' } ${ size ? `markdown--${ size }` : '' }` }>
			{ children }
		</ReactMarkdown>
	);

};

// PROP-TYPES
Markdown.propTypes = {
	className: PropTypes.string,
	children: PropTypes.string,
	modifier: PropTypes.string,
	size: PropTypes.string,
};

// EXPORT
export default Markdown;
