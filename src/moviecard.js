import React from 'react';
import { PropTypes } from 'prop-types';

const MovieCard = ({ movie, states, onClick }) => {
    const handleclick = () => {
        states()
        onClick(movie.imdbID);
    }
    return (
        <div className="movie" id={movie.imdbID} onClick={handleclick} >
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    );

}


export default MovieCard;
