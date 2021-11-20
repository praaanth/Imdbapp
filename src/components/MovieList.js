import React from 'react'
import MovieCard from './MovieCard';
import  '../styles/movielist.css'
export default function MovieList({ Movielist,isLoading }) {
    if(isLoading){
        return "the search is loading";
    }
    
    else {
        return (
            <div className="movie-list">
              {Movielist.map((movie) => (
                <MovieCard movie={movie} key={movie.imdbID} />
              ))}
            </div>
          );
    }
  
}


