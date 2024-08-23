import { Movie } from "./Movie"

export const MovieList = ({ movies, onViewDetails }) => {
    return (
        <div className="container">
            <div className="row">
                {
                    movies.map((movie, index) => (
                        <Movie key={index} movie={movie} onViewDetails={onViewDetails} />
                    ))
                }
            </div>
        </div>
    )
}