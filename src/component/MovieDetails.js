import Carousel from 'component/carousel'
import Star from 'assets/star.js'
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import PopularMovieCarousel from 'component/popularMovies/PopularMoviesCarousel'
import { getMovieDetails, getMovieGenre, getSeriesGenre } from 'store/movie/action';
import Navbar from 'component/Navbar'

function MoviesDetails() {
  // const { release, year, imdb, description, title } = props;
  const location = useLocation();
  const dispatch = useDispatch();
  const [details, setDetails] = useState({})
  const [relatedShows, setRelatedShows] = useState([])
  const { series, movieDetails, movie, id } = useSelector((state) => state.movie);

  useEffect(() => {
    if (movieDetails && movieDetails._id) {
      movieDetails.hasOwnProperty('episodes') ? dispatch(getSeriesGenre(movieDetails.genres[0].uuid))
        :
        dispatch(getMovieGenre(movieDetails.genres[0].uuid))
    }

  }, [movieDetails])

  useEffect(() => {
    if (movie || series) {
      movieDetails.hasOwnProperty('episodes') ? setRelatedShows(series) : setRelatedShows(movie)
    }
  }, [series, movie])

  useEffect(() => {
    location.state && dispatch(getMovieDetails(location.state))
  }, [location])

  useEffect(() => {
    setDetails(movieDetails)
  }, [movieDetails])

  const handleWatchMovie = () => {
    window.open("https://youtu.be/wUn05hdkhjM")
  }
  return (
    <>
      <Navbar />
      <div className="container my-4">
        <div className='d-flex justify-content-between'>
          <div className='my-2'>
            <h1 className=' fontColor'>Released on - {details.release ? details.release : ""} </h1>
            <p className='my-2 fontColor'>
              <span></span><span className='mx-2'>{details.year ? details.year : ""}</span><span className='mx-2'>Popcornflix Prime Video</span>
            </p>
          </div>
          <div className='my-2 fontColor'>
            <div className='d-grid'>
              <strong className='h6'>IMDB RATING</strong>
              <div className='d-flex justify-content-center'>
                <div className='me-2 color '><Star /></div>
                <div className='h3'>{details.imdb ? details.imdb : "9.5/10"}</div>
              </div>
            </div>
          </div>
        </div>
        <div className=''>
          <Carousel description={details.description ? details.description : ""} title={details.title ? details.title : ""} />
        </div>
        <div className='d-flex justify-content-end '>
          <div className='my-4 col-6'>
            <p className='fontColor mt-3'>{details.description ? details.description : ""}</p>
          </div>
          <div className='col-6 '>
            <div className="d-grid mx-4 my-5">
              <Button variant="warning rounded-3 dark" size="lg" onClick={handleWatchMovie}>
                Watch Trailer On YouTube
              </Button>
            </div>
          </div>
        </div>
        <div className='mt-3'>
          <h3 className='mb-4 fontColor'>Related {movieDetails.hasOwnProperty('episodes') ? "Series" : "Movie"}</h3>
          <PopularMovieCarousel moviesData={relatedShows ? relatedShows : []} limit={5} />
        </div>
      </div>
    </>
  );
}

export default MoviesDetails;