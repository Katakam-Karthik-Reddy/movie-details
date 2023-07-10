import React from 'react';
import { useEffect, useState } from 'react';


import './App.css';
import SeachIcon from './search.svg';
import MovieCard from './moviecard';
import MovieDetails from './MovieDetails';



//This is an API Key
const API_URL = 'https://www.omdbapi.com?apikey=5076c410';
const API_URL_movie = 'https://www.omdbapi.com?apikey=5076c410';


const App = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setmovie] = useState();
  const [searchMovie, setSearchmovie] = useState('');
  const [searchpage, setsearchpage] = useState(true);

  useEffect(() => {
    searchMovies('Batman');
    getMovie("Batman Begins");
  }, []);
  //This is to get the response from Api for search
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
    console.log(data.Search);
  }


  //This is to get the response from Api for movie name
  const getMovie = async (movieid) => {
    const movieresponse = await fetch(`${API_URL_movie}&i=${movieid}`);
    const moviedata = await movieresponse.json();

    // setMovies(data.Search);
    setmovie(moviedata);
  }


  const changepagestate = () => {
    setsearchpage(false);
  }

  const getdata = (data) => {
    getMovie(data);
  }
  const changepagestatetotrue = () => {
    setsearchpage(true);
  }
  return (
    <div className='app'>
      <nav className='nav-bar'>
        <h1>Movies</h1>
        <div className='search'>
          <input
            placeholder='Search for Movie'
            value={searchMovie}
            onChange={(e) => {
              setSearchmovie(e.target.value)
            }}
          />
          <img src={SeachIcon}
            alt='search'
            onClick={() => {
              searchMovies(searchMovie);
              setsearchpage(true);
            }}
          />
        </div>
      </nav>
      {
        searchpage ? (
          movies?.length > 0
            ? (
              <div className='container'>
                {movies.map((movie) => (
                  <MovieCard movie={movie} states={changepagestate} onClick={getdata} />
                ))}
              </div>
            ) : (
              <div className='empty'>
                <h2>No Movies Found</h2>
              </div>
            )
        ) :
          (
            <div className='container'>
              <MovieDetails movie={movie} states={changepagestatetotrue} />
            </div>
          )
      }
    </div >
  );
}

export default App;
