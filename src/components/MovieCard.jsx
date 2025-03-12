import { Link } from "react-router-dom"

const MovieCard = ({ movieProp }) => {

    const { id, title, director, genre, release_year, abstract, image } = movieProp

    return (
        <div className="movie-card">
            <img
                src={image}
                alt={title} />
            <div>
                <h5>
                    {title}
                </h5>
                <address><i>
                    By {director}
                </i></address>
                <p className="card-text">
                    {abstract}
                </p>
                <Link to={`/movies/${id}`}>See more</Link>
            </div>
        </div>
    )
}

export default MovieCard