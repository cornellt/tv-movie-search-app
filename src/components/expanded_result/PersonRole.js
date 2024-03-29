import React from 'react';
import Card from 'react-bootstrap/Card'; //sourced from https://react-bootstrap.netlify.app/components/cards/
import '../styles/expanded_result_styles/PersonRole.css';

const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const PLACEHOLDER_POSTER_URL = 'https://i2.wp.com/www.theatrecr.org/wp-content/uploads/2016/01/poster-placeholder.png?ssl=1'; //poster placeholder sourced from https://www.theatrecr.org/poster-placeholder/

export default function PersonRole(props) {
    const roleData = props.data;
    const posterPath = roleData.poster_path;

    return (
        <Card key={props.index} className='cast-card shadow-sm mx-1 my-1 bg-light' onClick={() => props.handleChangeFocus(props.data)} id={roleData.id}>
            <Card.Img className='cast-poster mt-1 mx-auto' variant="top" src={posterPath ? (POSTER_BASE_URL + posterPath) : PLACEHOLDER_POSTER_URL} />
            <Card.Body>
                <Card.Title>{props.role}</Card.Title>
                <Card.Text><span className='text-muted'>in </span><br />{roleData.media_type === 'movie' ? roleData.title : roleData.name}</Card.Text>
            </Card.Body>
        </Card>
    );
}