import React, { useEffect, useState } from 'react'
import MoviesDetails from 'component/MovieDetails'
import { useSelector } from 'react-redux';

export default function MovieDetail() {
    const [details, setDetails] = useState({});
    const { movieDetails } = useSelector((state) => state.movie);
    useEffect(() => {
        setDetails(movieDetails);
    }, [movieDetails])
    return (
        <div>
            <MoviesDetails title={details.titleOriginal} year={details.year}
                imdb={details.rating} description={details.description} release={details.release} />
        </div>
    )
}
