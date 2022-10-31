import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import PopularMovie from "component/popularMovies/PopularMovie";

function PopularSeriesCarousel(props) {
    const [seriesData, setSeriesData] = useState([]);
    const [series, setSeries] = useState([]);
    const [series1, setSeries1] = useState([]);
    const [series2, setSeries2] = useState([]);
    const [index, setIndex] = useState(0);
    const popularSeries = [
        {
            popularSeriesData: series
        },
        {
            popularSeriesData: series1
        },
        {
            popularSeriesData: series2
        }
    ]
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    useEffect(() => {
        setSeries(seriesData.slice(0, 7));
        setSeries1(seriesData.slice(7, 14));
        setSeries2(seriesData.slice(14, 21));
    }, [props.seriesData, seriesData])
    useEffect(() => {
        setSeriesData(props.seriesData);
    }, [props.seriesData])

    return (
        <>
            <Carousel Carousel activeIndex={index} onSelect={handleSelect} interval={null} indicators={false} >
                {popularSeries.map((info) => {
                    return (
                        <Carousel.Item>
                            <div className='d-flex justify-content-between space'>
                                {info.popularSeriesData.map((info) => {
                                    return (
                                        <PopularMovie image={info.image} id={info._id} />
                                    )
                                })}
                            </div>
                        </Carousel.Item>
                    )
                })}
            </Carousel >
        </>
    );
}
export default PopularSeriesCarousel;