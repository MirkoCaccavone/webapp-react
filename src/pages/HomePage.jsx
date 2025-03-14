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
                    <div key={movie.id} className="col-md-4 mb-4">
                        <MovieCard movieProp={movie} />
                    </div>
                )
            }
        )
    }


    return (
        <>
            <div className="container mt-5">
                <h1>Bool Movies</h1>
                <h2><i>movies</i></h2>
                <div className="row">
                    {/* Render delle card */}
                    {renderMovie()}
                </div>
            </div>
        </>
    )
}
export default HomePage