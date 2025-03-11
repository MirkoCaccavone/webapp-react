import MovieCard from './../components/MovieCard';

const HomePage = () => {
    return (
        <>
            <h1>Bool Movies</h1>
            <h2><i>movies</i></h2>
            <div className="movie-list">
                {/* Libri qui */}
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
        </>
    )
}
export default HomePage