import React, { useEffect } from "react";
import { loadPageContent } from "../actions/actions";
import { connect } from "react-redux";
import MovieItems from "./items/MovieItems";
import "./css/movieslist.css";

const MovieList = ({ movies_arr: { allMovie }, loadPageContent }) => {
  console.log(allMovie, "allMovie");

  useEffect(() => {
    loadPageContent();
  }, []);

  return (
    <div>
      <div className="car-list">
        {allMovie.map((movie) => (
          <MovieItems key={movie.id} allMovie={movie} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies_arr: state.movies_arr,
});

const mapDispatchToProps = {
  loadPageContent,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
