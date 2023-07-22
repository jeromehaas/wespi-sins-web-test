import PropTypes from 'prop-types';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const SliderNavigation = ({ className = '', sliderController }) => {

	// SETUP REFS
	const sliderNavigationRef = useRef();
	const sliderNavigationTimelineRef = useRef();

	// UPDATE SLIDER ORDER
	useEffect(() => {
		gsap.context(() => {
			sliderNavigationTimelineRef.current = gsap.timeline();
			sliderNavigationTimelineRef.current.to('.navigation__item .item__dash', { width: '0px' }, 0);
			sliderNavigationTimelineRef.current.to('.navigation__item .item__index', { color: '#9E453E' }, 0);
			sliderNavigationTimelineRef.current.to(`.navigation__item:nth-child(${ sliderController.counter }) .item__index`, { color: '#000000' }, 0);
			sliderController.counter !== sliderController.images.length && sliderNavigationTimelineRef.current.to(`.navigation__item:nth-child(${ sliderController.counter }) .item__dash`, { width: '24px' }, 0);
		}, sliderNavigationRef);
	}, [sliderController.counter]);

	return (
		<div className={ `${ className } slider-navigation` } ref={ sliderNavigationRef }>
			{ sliderController.images.map((image, index) => {
				return (
					<div className="navigation__item item" key={ image.id }>
						<Paragraph className="item__index" onClick={ () => { return sliderController.handleJump(index + 1); } }>{ String(index + 1).padStart(2, 0) }</Paragraph>
						<figure className="item__dash" />
					</div>
				);
			})}
		</div>
	);

};

SliderNavigation.propTypes = {
	className: PropTypes.string,
};

export default SliderNavigation;
