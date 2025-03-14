import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <div >
            <div >
                <h1 >404</h1>
                <h2 >Oops! Page not found</h2>
                <p >
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Link to='/'>
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage