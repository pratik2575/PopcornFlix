import { GET_MOVIES, GET_SERIES, GET_MOVIE_DETAILS, GET_SEARCH_VALUE, GET_CHAR_VALUE, GET_MOVIE_GENRE, GET_SERIES_GENRE,GET_ACCOUNT_DETAILS } from "./types";
import axios from "axios";
import { movieData } from "staticData/MovieData"
import { seriesData } from "staticData/SeriesData"

export const getMovies = () => (dispatch) => {
    // axios.get(`movies?type=${type}&genres=${genres}`, {
    //     headers: {
    //         'X-RapidAPI-Key': '5d622be203msh5816a603d9e0abdp1c4fb3jsnecffe9b0f86c',
    //         'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
    //     }
    // }).then((res) => {
    // dispatch({ type: GET_MOVIES, payload: res.data.results })

    // }).catch((error) => { console.log(error) })
    dispatch({ type: GET_MOVIES, payload: movieData })
}
export const getSeries = () => (dispatch) => {
    // axios.get(`movies?type=${type}`, {
    //     headers: {
    //         'X-RapidAPI-Key': '5d622be203msh5816a603d9e0abdp1c4fb3jsnecffe9b0f86c',
    //         'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
    //     }
    // }).then((res) => {
    //     dispatch({ type: GET_SERIES, payload: res.data.results })

    // }).catch((error) => { console.log(error) })
    dispatch({ type: GET_SERIES, payload: seriesData })
}
export const getMovieGenre = (genres) => (dispatch) => {
    try {
        let genresData = []
        movieData.map((item) => {
            const data = item.genres.find((x) => x.uuid === genres);
            if (data) {
                genresData.push(item);
            }
        })
        dispatch({ type: GET_MOVIE_GENRE, payload: genresData })
    } catch (error) {
        console.log(error)
    }
}
export const getSeriesGenre = (genres) => (dispatch) => {
    try {
        let genresData = []
        seriesData.map((item) => {
            const data = item.genres.find((x) => x.uuid === genres);
            if (data) {
                genresData.push(item);
            }
        })
        dispatch({ type: GET_SERIES_GENRE, payload: genresData })
    } catch (error) {
        console.log(error)
    }
}
export const getMovieDetails = (id) => (dispatch) => {
    axios.get(`movie/${id}`, {
        headers: {
            'X-RapidAPI-Key': '5d622be203msh5816a603d9e0abdp1c4fb3jsnecffe9b0f86c',
            'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
        }
    }).then((res) => {
        dispatch({ type: GET_MOVIE_DETAILS, payload: res.data.result })

    }).catch((error) => { console.log(error) })
}
export const getSearchValue = (value) => (dispatch) => {
    dispatch({
        type: GET_SEARCH_VALUE,
        payload: value
    })
}
export const getAccountValue = (value) => (dispatch) => {
    dispatch({
        type: GET_ACCOUNT_DETAILS,
        payload: value
    })
}
export const getCharValue = () => (dispatch) => {
    dispatch({
        type: GET_CHAR_VALUE,
    })
}


