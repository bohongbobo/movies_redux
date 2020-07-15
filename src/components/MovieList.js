import React, { useEffect } from "react";
import { loadPageContent } from "../actions/actions";
import { connect } from "react-redux";

const MovieList = ({ movies_arr: { allMovie }, loadPageContent }) => {
  console.log(allMovie, "allMovie");

  useEffect(() => {
    loadPageContent();
  }, []);

  return (
    <div>
      <h1 className="white-text">Movies</h1>
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
