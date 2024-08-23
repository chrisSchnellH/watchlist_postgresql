import { Link } from "react-router-dom";

export const Homepage = () => {

    return (
        <div className="container">
            <h1 className="text-center mt-2">Welcome to my Movie Finder and Watchlist App</h1>
            <div className="d-flex justify-content-center">
                <Link className="btn btn-dark" to='/searchpage'><strong>Search Movies</strong></Link>
                <Link className="btn btn-dark" to='/watchlist'><strong>Watchlist</strong></Link>
            </div>
        </div>
    );
}