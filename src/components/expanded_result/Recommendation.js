import React from 'react';
import Card from 'react-bootstrap/Card'; //sourced from https://react-bootstrap.netlify.app/components/cards/

const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const PLACEHOLDER_BACKDROP_URL = 'https://fakeimg.pl/640x360'; //placeholder sourced from https://fakeimg.pl/640x360

export default function Recommendation(props) {
    //handler for Recommendation onClick; changes "focused" ExpandedResult
    const handleChangeFocus = () => props.handleChangeFocus(props.data);

    //build URL to access movie/tv "backdrop" image
    function buildBackdropUrl(path) {
        return path === null ? PLACEHOLDER_BACKDROP_URL : POSTER_BASE_URL + path;
    }

    return (
        <>
            <Card key={props.index} className='recommendation-card shadow-sm my-1 mx-1' onClick={handleChangeFocus}>
                <Card.Img variant="top recommendation-img" src={buildBackdropUrl(props.data.backdrop_path)} />
                <Card.Body>
                    <Card.Title>{props.data.media_type === 'tv' ? props.data.name : props.data.title}</Card.Title>
                    <Card.Text className='text-muted'>{props.data.overview}</Card.Text>
                </Card.Body>
            </Card>
        </>
    );

}