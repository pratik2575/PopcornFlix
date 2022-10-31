import React, { useEffect, useState } from "react";
import HomeCarousel from "component/HomePageCarousel";
import PopularMoviesCarousel from "component/popularMovies/PopularMoviesCarousel";
import PopularSeriesCarousel from "component/popularMovies/PopularSeriesCarousel";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, getSeries } from "../store/movie/action";
import Navbar from 'component/Navbar'

export default function HomePage() {
  const dispatch = useDispatch();
  const { movie, series, searchValue, char } = useSelector(
    (state) => state.movie
  );
  const [moviesData, setMoviesData] = useState([]);
  const [seriesData, setSeriesData] = useState([]);
  const [homePageCarousel, setHomePageCarousel] = useState(true);
  const url =
    "https://www.heavenofhorror.com/wp-content/uploads/2021/05/spiral-from-the-book-of-saw-review-627x360.jpg";
  const mImage =
    "https://deadtalknews.com/wp-content/uploads/Armond-930x534.jpg";
  const sImage =
    "http://2.bp.blogspot.com/-DAXQhZZmfnU/U0NqTfBNORI/AAAAAAAAvg0/FfrBeFE7ZnM/s1600/got2-930x534.jpg";

  useEffect(() => {
    dispatch(getMovies());
    dispatch(getSeries());
  }, []);

  useEffect(() => {
    setSeriesData(series);
    setMoviesData(movie);
  }, []);

  useEffect(() => {
    handleSearch();
  }, [searchValue, movie]);

  const handleSearch = () => {
    if (searchValue !== "" && char === true) {
      searchValue.split("").map((x) => {
        const sMovies = movie.filter((info) => {
          const movieTitle = info.titleOriginal;
          return movieTitle.includes(x);
        });
        const sSeries = series.filter((info) => {
          const seriesTitle = info.titleOriginal;
          return seriesTitle.includes(x);
        });
        setHomePageCarousel(false);
        setMoviesData(sMovies);
        setSeriesData(sSeries);
      });
    } else if (searchValue === "") {
      setMoviesData(movie);
      setSeriesData(series);
      setHomePageCarousel(true);
    }
  };
  return (
    <>
    <Navbar/>
      <div className="mb-4">
        <div className="">
          {homePageCarousel ? (
            <div className="col-md-12 mt-4 mx-auto carouselSize">
              <HomeCarousel img1={url} img2={mImage} img3={sImage} />
            </div>
          ) : null}
        </div>
        <div className=" mt-4">
          <div className="">
            <h1 className="fontColor ps-2 ">
              Popular Movies on <span className="yellow"> Popcornflix</span>
            </h1>
            <div className="col-12 mt-4">
              <PopularMoviesCarousel moviesData={moviesData} limit={7} />
            </div>
          </div>
          <div className=" mt-4">
            <h1 className="fontColor ps-2">
              Popular Series on <span className="yellow"> Popcornflix</span>
            </h1>
            <div className="col-12 mt-4">
              <PopularSeriesCarousel seriesData={seriesData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
