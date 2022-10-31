import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import PopularMovie from "component/popularMovies/PopularMovie";
import { useSelector } from 'react-redux';

function ControlledCarousel(props) {
    const [moviesData, setMoviesData] = useState([])
    const [movies, setMovies] = useState([]);
    const [movies1, setMovies1] = useState([]);
    const [movies2, setMovies2] = useState([]);
    const [index, setIndex] = useState(0);
    const popularMovies = [
        {
            popularMoviesData: movies
        },
        {
            popularMoviesData: movies1
        },
        {
            popularMoviesData: movies2
        }
    ]

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        setMovies(moviesData.slice(0, props.limit));
        setMovies1(moviesData.slice(props.limit, props.limit * 2));
        setMovies2(moviesData.slice(props.limit * 2, props.limit * 3));
    }, [moviesData])

    useEffect(() => {
        setMoviesData(props.moviesData);
    }, [props.moviesData])

    return (
        <>
            <div>
                <Carousel Carousel activeIndex={index} onSelect={handleSelect} interval={null} indicators={false} >
                    {popularMovies.map((info) => {
                        return (
                            <Carousel.Item>
                                <div className='d-flex justify-content-between space'>
                                    {info.popularMoviesData.map((info) => {
                                        return (
                                            <PopularMovie image={info.image} id={info._id} />
                                        )
                                    })}
                                </div>
                            </Carousel.Item>
                        )
                    })}
                </Carousel >
            </div>
        </>
    );
}
export default ControlledCarousel