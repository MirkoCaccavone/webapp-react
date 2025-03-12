import axios from 'axios';

import { useState, useEffect } from 'react';

// import componente card
import MovieCard from './../components/MovieCard';


const HomePage = () => {

    const [movies, setMovies] = useState([])

    const fetchMovies = () => {
        axios.get('http://localhost:3000/api/movies')
            .then(res => { setMovies(res.data); })
            .catch(err => console.log(err))
    }

    useEffect(fetchMovies, []);

    const renderMovie = () => {
        return movies.map(
            movie => {
                return (
                    <div key={movie.id}>
                        <MovieCard movieProp={movie} />
                    </div>
                )
            }
        )
    }


    return (
        <>
            <h1>Bool Movies</h1>
            <h2><i>movies</i></h2>
            <div className="movie-list">
                {/* Libri qui */}
                {renderMovie()}
            </div>
        </>
    )
}
export default HomePage