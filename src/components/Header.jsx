import { Link } from "react-router-dom"

export default function Header() {
    return (
        <>
            {/* < Link to="/" >Movie Page</Link >
            < Link to="/movies/create" >Movie Page</Link > */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Movie Page</Link>
                    <button className="navbar-toggler" type="button">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/movies/create">Add Movie</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>




    )
}
