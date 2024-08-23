import { useState } from "react";
import { MovieList } from "./components/MovieList";
import { Searchbar } from "./components/Searchbar";
import { Pagination } from "../../Utils/Pagination";
import { MovieDetailsPopup } from "./components/MovieDetailsPopup"; // Import the new component
import { SpinnerLoading } from "../../Utils/SpinnerLoading";

export const Searchpage = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    const apiKey = process.env.REACT_APP_MOVIE_API;

    // Pagination
    const [totalResults, setTotalResults] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    // Popup state
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const paginate = async (pageNumber) => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}&language=de&page=${pageNumber}`);
            const data = await response.json();
            console.log(data);
            setMovies(data.results);
            setCurrentPage(pageNumber);
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    }

    const totalPages = Math.floor(totalResults / 20);

    const handleViewDetails = (movie) => {
        setSelectedMovie(movie);
        setIsPopupOpen(true);
    }

    const handleClosePopup = () => {
        setIsPopupOpen(false);
        setSelectedMovie(null);
    }

    return (
        <>
            <Searchbar setMovies={setMovies} apiKey={apiKey} search={search} setSearch={setSearch} setTotalResults={setTotalResults} />
            <MovieList movies={movies} onViewDetails={handleViewDetails} />
            {
                totalResults > 20 && <Pagination totalPages={totalPages} paginate={paginate} currentPage={currentPage} />
            }
            {isPopupOpen && <MovieDetailsPopup movie={selectedMovie} onClose={handleClosePopup} />}
        </>
    );
}
