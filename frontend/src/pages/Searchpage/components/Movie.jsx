import axios from "axios";
import NotFound from "../../../Images/NotFound.jpg";
import { useEffect, useState } from "react";
import { SpinnerLoading } from "../../../Utils/SpinnerLoading";

const API_URL = `${process.env.REACT_APP_URL_API}/api/watchlist`;


export const Movie = ({ movie, onViewDetails }) => {

    const [inWatchlist, setInWatchlist] = useState(false);

    useEffect(() => {
        const checkIfInWatchlist = async () => {
            try {
                const response = await axios.get(`${API_URL}/movie/${movie.id}`);
                setInWatchlist(response.data);
                console.log("response dataaaa", response.data);
            } catch (error) {
                console.log("Error checking watchlist status", error);
            }
        };
        checkIfInWatchlist();
    }, [movie.id]);

    const addToWatchlist = async () => {
        try {
            // um long_id und String movie_id im backend zu unterscheiden für die datenbank
            const movieWithId = { ...movie, movieId: movie.id, posterPath: movie.poster_path, releaseDate: movie.release_date };

            await axios.post(`${API_URL}/add`, movieWithId, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setInWatchlist(true);

        } catch (error) {
            console.log("Something went wrong Movie.jsx", error);
        }
    };

    return (
        <div className="col-lg-3 d-flex justify-content-center p-2">
            <div className="card w-100 border border-secondary">
                {
                    movie.poster_path == null ?
                        <img src={NotFound} className="card-img-top" alt="Not Found" />
                        :
                        <img src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`} className="card-img-top border-bottom" alt="Movie Poster" />
                }
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h5 className="card-title text-center">{movie.title}</h5>
                </div>
                <div className="card-footer d-flex flex-wrap justify-content-between align-items-center">
                    <button onClick={() => onViewDetails(movie)} className="btn btn-primary btn-md w-100 m-1">View Details</button>
                    <button onClick={addToWatchlist} className="btn btn-success btn-md w-100 m-1" disabled={inWatchlist} >
                        {inWatchlist ? "Already in Watchlist" : " Add to Watchlist"}
                    </button>
                </div>
            </div>
        </div>
    );
}
