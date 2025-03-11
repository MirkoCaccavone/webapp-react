import { Link } from "react-router-dom"

const MovieCard = () => {
    return (
        <div className="movie-card">
            <img
                src="http://localhost:3000/img/movies_cover/inception.jpg"
                alt="descrizione img" />
            <div>
                <h5>
                    Titolo del film
                </h5>
                <address><i>
                    By nome regista
                </i></address>
                <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto labore ad sapiente animi incidunt. Sit nihil sed, aliquam rerum ipsam illo optio impedit aperiam molestiae.
                </p>
                <Link to="/movies/2">See more</Link>
            </div>
        </div>
    )
}

export default MovieCard