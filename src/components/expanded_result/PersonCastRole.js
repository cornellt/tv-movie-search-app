import React from 'react';
import Card from 'react-bootstrap/Card'; //sourced from https://react-bootstrap.netlify.app/components/cards/

const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const PLACEHOLDER_POSTER_URL = 'https://i2.wp.com/www.theatrecr.org/wp-content/uploads/2016/01/poster-placeholder.png?ssl=1'; //poster placeholder sourced from https://www.theatrecr.org/poster-placeholder/

export default function PersonCastRole(props) {
    const castRoleData = props.data;
    const posterPath = castRoleData.poster_path;

    return (
        <Card key={props.index} className='cast-card shadow-sm mx-1 my-1' onClick={() => props.handleChangeFocus(props.data)} id={castRoleData.id}>
            <Card.Img className='cast-poster mt-1 mx-auto' variant="top" src={posterPath ? (POSTER_BASE_URL + posterPath) : PLACEHOLDER_POSTER_URL} />
            <Card.Body>
                <Card.Title>{castRoleData.character}</Card.Title>
                <Card.Text className='text-muted'><span>in </span><br />{castRoleData.media_type === 'movie' ? castRoleData.title : castRoleData.name}</Card.Text>
            </Card.Body>
        </Card>
    );
}