import { Link } from "react-router-dom"

const MovieCard = ({ movieProp }) => {

    const { id, title, director, genre, release_year, abstract, image } = movieProp

    return (
        // <div>
        //     <img
        //         src={image}
        //         alt={title} />
        //     <div>
        //         <h5>
        //             {title}
        //         </h5>
        //         <address><i>
        //             By {director}
        //         </i></address>
        //         <p>
        //             {abstract}
        //         </p>
        //         <Link to={`/movies/${id}`}>See more</Link>
        //     </div>
        // </div>


        <div className="card">
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{abstract}</p>
                <p className="text-muted"><i>By {director}</i></p>
                <Link to={`/movies/${id}`} className="btn btn-primary">See More</Link>
            </div>
        </div>

    )
}

export default MovieCard