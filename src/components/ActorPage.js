import React, { useEffect, useState } from "react";
import { Card, Button, Container} from 'react-bootstrap';
import './movie.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function ActorPage() {
    const [allActor, setAllActor] = useState([]);


    useEffect(() => {
      const actorURL = "https://api.themoviedb.org/3/person/popular?api_key=d1793e2d14633816edae12bcc4e69e85&language=en-US&page=1"
  
      const fetchData = async () => {
        try {
          const response = await fetch(actorURL);
          const json = await response.json();
          console.log(json.results);
          setAllActor(json.results)
        } catch (error) {
          console.log("error", error);
        }
      };
  
      fetchData();
  }, []);

    return (
        <div className="actorPage">
            <Container  style={{ border: '1px solid blue', display:'flex', flexWrap: 'wrap', justifyContent: 'center' }} >
            {allActor.map((item) => (
                            <Card className='image-container d-flex justify-content-start m-3' style={{ width: '20%', padding: '3em' }}>
                                <Card.Img style={{ width: '10em' }} variant="top" src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`} alt="posterImage" />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text> Vote Average:
                                        {item.id}
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                    <CircularProgressbar value={item.popularity / 10} text={`${item.popularity}%`} />
                                </Card.Body>
                            </Card>
                ))}
            </Container>
        </div>
    )
}

export default ActorPage;