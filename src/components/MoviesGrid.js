import React, {useState, useEffect} from "react";
import '../styles.css';
import MovieCard from "./MovieCard";

export default function MoviesGrid() {
    const [movies, setMouvies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    
    useEffect ( () => {
        fetch("movies.json") 
        .then(response => response.json())
        .then(data => setMouvies(data));
    }, []);

    const hadleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div>
                <input type="text" 
                    className="search-input"
                    placeholder="Search movies..."
                    value={searchTerm}
                    onChange={hadleSearchChange}/>
            </div>
            <div className="movies-grid">
                {filteredMovies.map(movie => (
                    <MovieCard movie={movie} key={movie.id}></MovieCard>
                ))}
            </div>
        </div>
    );
}