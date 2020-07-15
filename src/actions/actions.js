import { LOAD_PAGE_CONTENCT } from "./types";

export const loadPageContent = () => (dispatch, getState) => {
  const page = getState().movies_arr.page;

  //   const allMovie = getState().movies_arr.allMovie;

  const API_KEY = "76177c7fb779da86955a3e56aab3bcec";
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: LOAD_PAGE_CONTENCT,
        payload: data.results,
      });
    });
};
