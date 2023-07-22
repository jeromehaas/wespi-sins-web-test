// IMPORTS
import PropTypes from 'prop-types';
import { Fragment, forwardRef } from 'react';

// COMPONENT
const Section = forwardRef(({ className = '', children = null }, ref) => {

	// RENDER
	return (
		<Fragment>
			<div className={ `${ className }__target target` } id={ className } />
			<section className={ `${ className } section` } ref={ ref }>
				<div className={ `${ className }__inner section__inner` }>{ children }</div>
			</section>
		</Fragment>
	);

});

// PROP-TYPES
Section.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
};

// EXPORT
export default Section;
