import { useState } from "react";

export const Searchbar = ({ setMovies, apiKey, search, setSearch, setTotalResults }) => {

    const handleSubmit = async (e) => {
        e.preventDefault();

        // leere Eingabe
        if (!search) {
            alert("Enter a keyword for movies");
        } else {

            try {
                const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}&language=de`);
                const data = await response.json();
                console.log(data);
                setMovies(data.results);
                console.log(data.total_results, "totalresults");
                setTotalResults(data.total_results)
                if (!data.total_results) {
                    alert("No movie found")
                }

            } catch (err) {
                console.error("Error fetching data:", err);
            }
        }
    }

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div className="container mt-3">
            <form onSubmit={handleSubmit}>
                <div className="form align-items-center">
                    <div className="row my-1">
                        <label className="text-center mb-2"><h1>Search movies</h1></label>
                        <input type="text" className="form-control" id="SearchMovie" placeholder="Example: Spiderman" onChange={handleChange} />
                    </div>
                    <div className="my-1 row">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}