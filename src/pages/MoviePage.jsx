import { Link } from "react-router-dom"
import ReviewCard from './../components/ReviewCard';

const MoviePage = () => {
    return (
        <div className="movie-page">
            <header>
                <div>
                    <img
                        src="http://localhost:3000/img/movies_cover/inception.jpg"
                        alt="descrizione img" />
                    <div>
                        <h1>Titolo Film</h1>
                        <h3>
                            <i>
                                By Nome regista
                            </i>
                        </h3>
                        <p>
                            Abscract lorem ipsm dolor sit amet...
                        </p>
                    </div>
                </div>
            </header>
            <section id="reviews">

                <h2>Our community reviews</h2>

                {/* Reviews qui */}
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </section>
            <footer>
                <Link to="/">Back to home</Link>
            </footer>
        </div>
    )
}

export default MoviePage
