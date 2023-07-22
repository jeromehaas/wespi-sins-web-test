import Picture from 'components/01-atoms/picture/picture';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';

const Slider = ({ className = '', sliderController = null }) => {

	// SETUP REFS
	const sliderRef = useRef();
	const sliderTimelineRef = useRef();

	// UPDATE SLIDER ORDER
	useEffect(() => {
		gsap.context(() => {
			sliderTimelineRef.current = gsap.timeline();
			if (sliderController.viewportWidth && sliderController.viewportWidth >= 950 && sliderController.direction === 'rtl') {
				sliderTimelineRef.current.to(`.slider__item:nth-child(${ sliderController.counter })`, { left: '0%' }, 0);
				sliderTimelineRef.current.to(`.slider__item:nth-child(-n+${ sliderController.counter })`, { left: '0%' }, 0);
				sliderController.counter !== sliderController.images.length && sliderTimelineRef.current.to(`.slider__item:nth-child(${ sliderController.counter + 1 })`, { left: 'calc(-100% - 120px)' }, 0);
				sliderController.counter !== sliderController.images.length && sliderTimelineRef.current.to(`.slider__item:nth-child(n+${ sliderController.counter + 2 })`, { left: 'calc(-200% - 120px)' }, 0);
			}
			if (sliderController.viewportWidth && sliderController.viewportWidth >= 950 && sliderController.direction === 'ltr') {
				sliderTimelineRef.current.to(`.slider__item:nth-child(${ sliderController.counter })`, { right: '0%' }, 0);
				sliderTimelineRef.current.to(`.slider__item:nth-child(-n+${ sliderController.counter })`, { right: '0%' }, 0);
				sliderController.counter !== sliderController.images.length && sliderTimelineRef.current.to(`.slider__item:nth-child(${ sliderController.counter + 1 })`, { right: 'calc(-100% - 120px)' }, 0);
				sliderController.counter !== sliderController.images.length && sliderTimelineRef.current.to(`.slider__item:nth-child(n+${ sliderController.counter + 2 })`, { right: 'calc(-200% - 120px)' }, 0);
			}
			if (sliderController.viewportWidth && sliderController.viewportWidth < 950) {
				sliderTimelineRef.current.to(`.slider__item:nth-child(${ sliderController.counter })`, { right: '0%' }, 0);
				sliderTimelineRef.current.to(`.slider__item:nth-child(-n+${ sliderController.counter })`, { right: '0%' }, 0);
				sliderController.counter !== sliderController.images.length && sliderTimelineRef.current.to(`.slider__item:nth-child(${ sliderController.counter + 1 })`, { right: 'calc(-100% - 80px)' }, 0);
				sliderController.counter !== sliderController.images.length && sliderTimelineRef.current.to(`.slider__item:nth-child(n+${ sliderController.counter + 2 })`, { right: 'calc(-200% - 80px)' }, 0);
			}
		}, sliderRef);
	}, [sliderController.counter]);

	// RENDER
	return (
		<div className={ `${ className } slider slider--${ sliderController.direction }` } onTouchStart={ sliderController.handleTouchStart } onTouchMove={ sliderController.handleTouchMove } onTouchEnd={ sliderController.handleTouchEnd } ref={ sliderRef }>
			{ sliderController.images.map((image) => {
				return (
					<Picture className="slider__item" src={ image.src } key={ image.id } alt={ image.alt } width={ image.width } height={ image.height } priority />
				);
			})}
		</div>
	);

};

Slider.propTypes = {
	className: PropTypes.string,
};

export default Slider;
