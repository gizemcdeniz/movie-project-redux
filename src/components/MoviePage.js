import React, { useEffect, useState } from "react";

function MoviePage() {
    const [allMovie, setallMovie] = useState([]);

    useEffect(() => {
        const url = "https://api.themoviedb.org/3/list/1?api_key=d1793e2d14633816edae12bcc4e69e85&language=en-US";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                setallMovie(json);
                console.log(allMovie)
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <p>Hello from moviePage</p>
            {/* <ul>
                {allMovie.map(movie => {
                    <li key={movie.id}>{movie.title}</li>
                }}
        
        </ul> */}
        </div>
    )
}

export default MoviePage;