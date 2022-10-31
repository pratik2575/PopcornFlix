import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Carousel1 from 'component/carousel'

function HomeCarousel(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item className='carouselSize'>
                    <Carousel1 image={props.img1} />
                </Carousel.Item>
                <Carousel.Item className='carouselSize'>
                    <Carousel1 image={props.img2} />
                </Carousel.Item>
                <Carousel.Item className='carouselSize'>
                    <Carousel1 image={props.img3} />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
export default HomeCarousel;