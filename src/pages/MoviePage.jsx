import axios from 'axios';

import { useState, useEffect } from 'react';

import { Link, useParams, useNavigate } from "react-router-dom"
import ReviewCard from './../components/ReviewCard';

import ReviewForm from './../components/ReviewForm';

const MoviePage = () => {

    // recuperiamo l'id del film richiesto
    const { id } = useParams();

    // utilizzo il reedirect
    const redirect = useNavigate();

    // settiamo lo stato del componente
    const [movie, setMovie] = useState({});

    // funzione di chiamata all API per il film richiesto
    const fetchMovie = () => {
        axios.get('http://localhost:3000/api/movies/' + id)
            .then(res => { setMovie(res.data) })
            .catch(err => {
                console.log(err);
                if (err.status === 404) redirect('/404')
            })

    }
    // chiamata all'API al montaggio del componente
    useEffect(fetchMovie, []);

    // funzione di rendering delle reviews
    const renderReviews = () => {
        return movie.reviews?.map(
            review => <ReviewCard key={review.id} reviewProp={review} />
        )
    }


    return (
        <div className="container mt-5">
            <header className="row">
                <div className="col-lg-4 mb-4">
                    <img src={movie.image} className="img-fluid rounded" alt={movie.title} />
                </div>
                <div className="col-lg-8">
                    <h1 className="display-4">{movie.title}</h1>
                    <h3 className="text-muted"><i>By {movie.director}</i></h3>
                    <p>{movie.abstract}</p>
                    <p><strong>Release Year:</strong> {movie.release_year}</p>
                    <p><strong>Genre:</strong> {movie.genre}</p>
                </div>
            </header>

            <section>
                <h2 className="mt-5">Our Community Reviews</h2>

                {/* Reviews qui */}
                {renderReviews()}

            </section>

            <section className="mt-4">
                <ReviewForm movie_id={movie.id} reloadReviews={fetchMovie} />
            </section>

            <footer className="mt-5">
                <Link to="/" className="btn btn-secondary">Back to Home</Link>
            </footer>
        </div>
    )
}

export default MoviePage
