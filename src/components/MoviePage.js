import React, { useEffect, useState } from "react";
import { Card, Button, Container} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './movie.css';

function MoviePage() {
    const [allMovie, setAllMovie] = useState([]);
    const [movieDetail, setMovieDetail] = useState("");

    // const history = useHistory()

    // const navigate = (id) => {
    //     history.push(`/workspace/${id}`)
    // }


    const URL = "https://api.themoviedb.org/3/list/1?api_key=d1793e2d14633816edae12bcc4e69e85&language=en-US"

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => setAllMovie(data.items))
    }, [URL])

    return (
        <div className="moviePage">
            <Container  style={{ border: '1px solid blue', display:'flex', flexWrap: 'wrap', justifyContent: 'center' }} >
                {allMovie && allMovie.map(movie => (
                            <Card className='image-container d-flex justify-content-start m-3' style={{ width: '20%', padding: '3em' }}>
                                <Card.Img style={{ width: '10em' }} variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="posterImage" />
                                <Card.Body>
                                    <Card.Title>{movie.title}</Card.Title>
                                    <Card.Text> Vote Average:
                                        {movie.vote_average}
                                    </Card.Text>
                                    <Button 
                                    variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>

                ))}
            </Container>
        </div>
    )
}

export default MoviePage;