import React, { useEffect, useState } from 'react';
import MoviesItems from "component/MoviesItems";
import PropTypes from 'prop-types';
import Spinner from 'component/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieGenre, getMovies, getSeries, getSeriesGenre } from '../store/movie/action'
import InfiniteScroll from 'react-infinite-scroll-component';
import { Button } from 'react-bootstrap';
import Datanotfound from 'assets/datanotfound'
import ScrollToTop from "react-scroll-to-top";
import Navbar from 'component/Navbar'
export default function Movies(props) {
    const { type } = props;
    const { searchValue, char } = useSelector(state => state.movie);
    const { movie, series } = useSelector(state => state.movie);
    const [genres, setGenres] = useState("");
    const [genresTitle, setGeneresTitle] = useState("")
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState([]);
    const [loading, setLoading] = useState(false);
    const [character, setCharacter] = useState(false);
    const [datanotfound, setDatanotFound] = useState(false);
    const dispatch = useDispatch();
    const routs = [
        {
            to: "accion",
            title: "Action"
        },
        {
            to: "drama",
            title: "Drama"
        },
        {
            to: "documental",
            title: "Documentary"
        },
        {
            to: "comedia",
            title: "Comedy"
        },
        {
            to: "ciencia-ficcion",
            title: "Scince - Fiction"
        },
        {
            to: "aventura",
            title: "Advanture"
        },
        {
            to: "animacion",
            title: "Animation"
        },
    ]

    useEffect(() => {
        setLoading(true)
        dispatch(getMovies())
        dispatch(getSeries())
    }, [])

    useEffect(() => {
        if (genres !== "") {
            dispatch(getMovieGenre(genres));
            dispatch(getSeriesGenre(genres));
        }
    }, [genres])

    useEffect(() => {
        setPage(movies.slice(0, 12))
    }, [movies, type, series])

    useEffect(() => {
        setMovies(type === "movies" ? movie : series);
        setLoading(false);
    }, [type, genres, series, movie])

    useEffect(() => {
        setCharacter(char);
    }, [char])

    useEffect(() => {
        handleSearch();
    }, [searchValue, char])

    const handleSearch = () => {
        if (searchValue !== "" && character === true) {
            const filter = type === "movies" ? movie : series;
            searchValue.split("").map((x) => {
                const sMovies = filter.filter(info => {
                    const movieTitle = info.titleOriginal;
                    return movieTitle.includes(x)
                })
                setDatanotFound(sMovies.length === 0 ? true : false)
                setMovies(sMovies);
                setLoading(false)
            })
        } else if (searchValue === "") {
            setDatanotFound(false);
            setMovies(type === "movies" ? movie : series);
        }
    }

    const handleFatchmoreData = () => {
        const start = page.length;
        const end = page.length + 12;
        setPage(page.concat(movies.slice(start, end)))
    }

    return (
        <>
        <Navbar/>
            <div className='container'>
                <div className='d-flex justify-content-between'>
                    <h1 className='text-uppercase fontColor mt-4' >{type}  <span className='h2'> {genresTitle && ` - ${genresTitle}`}</span></h1>
                    <div className='mt-4'>
                        {routs.map((info) => {
                            return (
                                <Button key={info.title} className='me-3 rounded-pill white' variant="outline-dark"
                                    onClick={(e) => {
                                        setGenres(e.target.value);
                                        setGeneresTitle(info.title);
                                    }} value={info.to}>{info.title}</Button>
                            )
                        })}
                    </div>
                </div>
                {datanotfound && <Datanotfound />}
                {loading ? <Spinner /> :
                    <>
                        <InfiniteScroll
                            dataLength={page.length} 
                            next={handleFatchmoreData}
                            hasMore={page.length !== movies.length}
                            loader={<Spinner />}
                            endMessage={
                                <p style={{ textAlign: 'center', color: "white" }} className="mt-5">
                                    <b>Yay! You have seen it all</b>
                                </p>
                            }>
                            <div className='row'>
                                {page.map((data) => {
                                    return (
                                        <div className='mt-4 col-2' key={data._id}>
                                            <MoviesItems title={data.titleOriginal !== "" ? data.titleOriginal.slice(0, 13) : ""}
                                                year={data.year}
                                                image={data.image}
                                                released={data.release}
                                                id={data._id} />
                                        </div>)
                                })
                                }
                            </div>
                        </InfiniteScroll>
                    </>
                }
                <ScrollToTop smooth color="#151334" />
            </div>
        </>
    )
}
Movies.defaultProps = {
    type: "movies"
}
Movies.propTypes = {
    type: PropTypes.string
}