// COMPONENT
const Article = ({ className = '', children = null }) => {

	// RENDER
	return (
		<article className={ `${ className } article` }>
			{ children }
		</article>
	);

};

// EXPORT
export default Article;
