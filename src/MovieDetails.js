import React from 'react';

const MovieDetails = ({ movie, states }) => {
    const handleclick = () => {
        states();
    }
    return (
        <div className="main-container">
            <div className='inner-first-div'>
                <button className='back-button' onClick={handleclick}>Back</button>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
            </div>
            <div className='secondary-container'>
                <div className='inner-divs'>
                    <p>{movie.Title}</p>
                    <p>{movie.Year}</p>
                </div>
                <p>Language : {movie.Language}</p>
                <p>Rated : {movie.Rated}</p>
                <p>Release Date : {movie.Released}</p>
                <p>Runtime : {movie.Runtime}</p>
                <p>Genre : {movie.Genre}</p>
                <hr
                    style={{
                        color: 'white',
                        backgroundColor: 'rgb(78, 159, 225)',
                        height: 5
                    }}
                />
                <p>Director : {movie.Director}</p>
                <p>Writer : {movie.Writer}</p>
                <p>Actors : {movie.Actors}</p>
                <hr
                    style={{
                        color: 'white',
                        backgroundColor: 'rgb(78, 159, 225)',
                        height: 5
                    }}
                />
                <div className='plot'>
                    <p>Plot : {movie.Plot}</p>
                </div>
                <p>Country : {movie.Country}</p>
                <p>Awards : {movie.Awards}</p>
                <hr
                    style={{
                        color: 'white',
                        backgroundColor: 'rgb(78, 159, 225)',
                        height: 5
                    }}
                />
                <p>imdbRating : {movie.imdbRating}</p>
                <p>imdbVotes : {movie.imdbVotes}</p>
                <p>Type : {movie.Type}</p>
                <p>BoxOffice : {movie.BoxOffice}</p>
            </div>
        </div>

    );

}

export default MovieDetails;