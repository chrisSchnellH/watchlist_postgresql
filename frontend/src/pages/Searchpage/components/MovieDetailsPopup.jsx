export const MovieDetailsPopup = ({ movie, onClose }) => {
    return (
        <div className="popup d-flex justify-content-center align-items-center">
            <div className="popup-inner">
                <h2 className="text-center mb-2">{movie.title}</h2>
                <p>{movie.overview}</p>
                <p>Release Date: {movie.release_date}</p>
                <p>Rating: {movie.vote_average}</p>
                <button onClick={onClose} className="btn btn-secondary">Close</button>
            </div>
        </div>
    );
}
