import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Detail from "../components/Detail";

const Movie = () => {
  const { id } = useParams();

  return (
    <>
      <Header />
      <SearchBox />
      <Detail movie_id={Number(id)} />
      <Footer />
    </>
  );
};

export default Movie;
