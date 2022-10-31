import { GET_MOVIES, GET_SERIES, GET_MOVIE_DETAILS, GET_SEARCH_VALUE, GET_CHAR_VALUE, GET_MOVIE_GENRE, GET_SERIES_GENRE, GET_ID_VALUE, GET_ACCOUNT_DETAILS } from "./types";

const initialState = {
    movie: [],
    series: [],
    movieDetails: {},
    searchValue: '',
    char: false,
    account:[]
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES:
            return {
                ...state,
                movie: action.payload
            }
        case GET_SERIES:
            return {
                ...state,
                series: action.payload
            }
        case GET_MOVIE_DETAILS:
            return {
                ...state,
                movieDetails: action.payload
            }
        case GET_MOVIE_GENRE:
            return {
                ...state,
                movie: action.payload
            }
        case GET_SERIES_GENRE:
            return {
                ...state,
                series: action.payload
            }
        case GET_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.payload
            }
        case GET_CHAR_VALUE:
            return {
                ...state,
                char: true,
            }
        case GET_ACCOUNT_DETAILS:
            return {
                ...state,
                account: action.payload,
            }
       
        default:
            return state;
    }
}

export default movieReducer