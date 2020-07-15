import { LOAD_PAGE_CONTENCT } from "../actions/types";

const initialState = {
  visible: false,
  loading: true,
  likedMovies: [],
  blockedMovies: [],
  allMovie: [],
  page: 1,
  pageList: [],
  pageMovie: [],
  sortBy: "primary_release_date",
  order: "desc",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PAGE_CONTENCT:
      return {
        ...state,
        allMovie: action.payload,
      };
    default:
      return state;
  }
};
