import React from 'react';
import Card from 'react-bootstrap/Card'; //sourced from https://react-bootstrap.netlify.app/components/cards/

const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const PLACEHOLDER_POSTER_URL = 'https://i2.wp.com/www.theatrecr.org/wp-content/uploads/2016/01/poster-placeholder.png?ssl=1'; //poster placeholder sourced from https://www.theatrecr.org/poster-placeholder/

export default function PersonCrewRole(props) {
    const crewRoleData = props.data;
    const posterPath = crewRoleData.poster_path;

    return (
        <Card key={props.index} className='cast-card shadow-sm mx-1 my-1' onClick={() => props.handleChangeFocus(props.data)} id={crewRoleData.id}>
            <Card.Img className='cast-poster mt-1 mx-auto' variant="top" src={posterPath ? (POSTER_BASE_URL + posterPath) : PLACEHOLDER_POSTER_URL} />
            <Card.Body>
                <Card.Title>{crewRoleData.department}</Card.Title>
                <Card.Text className='text-muted'><span>in </span><br />{crewRoleData.media_type === 'movie' ? crewRoleData.title : crewRoleData.name}</Card.Text>
            </Card.Body>
        </Card>
    );
}