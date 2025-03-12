import axios from 'axios';

import { useState, useEffect } from 'react';

import { Link, useParams, useNavigate } from "react-router-dom"
import ReviewCard from './../components/ReviewCard';

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
                if (err.status === 404) redirect('*')
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
        <div className="movie-page">
            <header>
                <div className='detail-content'>
                    <img
                        src={movie.image}
                        alt={movie.title} />
                    <div>
                        <h1>{movie.title}</h1>
                        <h3>
                            <i>
                                By {movie.director}
                            </i>
                        </h3>
                        <p>
                            {movie.abstract}
                        </p>
                    </div>
                </div>
            </header>
            <section id="reviews">

                <h2>Our community reviews</h2>

                {/* Reviews qui */}
                {renderReviews()}
            </section>
            <footer>
                <Link to="/">Back to home</Link>
            </footer>
        </div>
    )
}

export default MoviePage
