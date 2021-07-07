import React from 'react';
import Card from 'react-bootstrap/Card'; //sourced from https://react-bootstrap.netlify.app/components/cards/
import '../styles/expanded_result_styles/CastMember.css';

const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const PLACEHOLDER_POSTER_URL = 'https://i2.wp.com/www.theatrecr.org/wp-content/uploads/2016/01/poster-placeholder.png?ssl=1'; //poster placeholder sourced from https://www.theatrecr.org/poster-placeholder/

export default function CastMember(props) {
    const roleData = props.data;
    roleData.media_type = 'person';
    const posterPath = roleData.profile_path;

    return (
        <Card key={props.index} className='mini-cast-card shadow-sm mr-1 bg-light d-flex' onClick={() => props.handleChangeFocus(props.data)} id={roleData.id}>
            <Card.Img className='mini-cast-poster mt-1 mx-auto' variant="top" src={posterPath ? (POSTER_BASE_URL + posterPath) : PLACEHOLDER_POSTER_URL} />
            <Card.Body>
                <Card.Text className='wrap-text'>
                    {props.cast ? roleData.job : roleData.character}
                    <br />
                    <span className='text-muted'>{roleData.media_type === 'movie' ? roleData.title : roleData.name}</span>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}