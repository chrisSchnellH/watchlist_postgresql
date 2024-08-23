import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "../../Utils/Pagination";
import { SpinnerLoading } from "../../Utils/SpinnerLoading";

export const Watchlist = () => {
    const API_URL = `${process.env.REACT_APP_URL_API}/api/watchlist`;

    const [watchlist, setWatchlist] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getWatchlist(currentPage);
    }, [currentPage]);

    const getWatchlist = async (pageNumber) => {
        try {
            const response = await axios.get(`${API_URL}/paginated?page=${pageNumber - 1}&size=20`);
            console.log("Response data:", response.data);
            setWatchlist(response.data.content);
            setTotalResults(response.data.totalElements);
            setIsLoading(false);
        } catch (error) {
            console.error("Something went wrong Watchlist.jsx getWatchlist", error);
            setIsLoading(false);
        }
    };

    const removeFromWatchlist = async (movieId) => {
        try {
            setIsLoading(true)
            await axios.delete(`${API_URL}/remove/${movieId}`);
            getWatchlist(currentPage);
        } catch (error) {
            console.log("Something went wrong Watchlist.jsx removeFromWatchlist", error);
        }
    };

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const totalPages = Math.ceil(totalResults / 20);

    if (isLoading) {
        return (
            <SpinnerLoading />
        )
    }

    return (
        <div className="container text-center mt-3">
            <h1>Your Watchlist</h1>
            {watchlist.length > 0 ?
                <>
                    <div className="row">
                        {watchlist.map((movie) => (
                            <div key={movie.id} className="col-lg-3 d-flex justify-content-center p-2">
                                <div className="card w-100 border border-secondary">
                                    <img src={`http://image.tmdb.org/t/p/w185${movie.posterPath}`} className="card-img-top border-bottom" alt="Movie Poster" />
                                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                        <h5 className="card-title text-center">{movie.title}</h5>
                                    </div>
                                    <div className="card-footer d-flex flex-wrap justify-content-between align-items-center">
                                        <button onClick={() => removeFromWatchlist(movie.id)} className="btn btn-danger btn-md w-100 m-1">Remove from Watchlist</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {
                        totalResults > 20 && <Pagination totalPages={totalPages} paginate={paginate} currentPage={currentPage} />
                    }
                </>
                :
                <div className="container">
                    <p>You have no movies in your Watchlist</p>
                    <Link className="btn btn-primary" to='/searchpage'>Search Movies</Link>

                </div>
            }
        </div>
    );
}
