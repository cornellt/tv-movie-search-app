import React from 'react';
import Card from 'react-bootstrap/Card'; //sourced from https://react-bootstrap.netlify.app/components/cards/

const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const PLACEHOLDER_BACKDROP_URL = 'https://fakeimg.pl/640x360'; //placeholder sourced from https://fakeimg.pl/640x360
const PLACEHOLDER_POSTER_URL = 'https://i2.wp.com/www.theatrecr.org/wp-content/uploads/2016/01/poster-placeholder.png?ssl=1'; //poster placeholder sourced from https://www.theatrecr.org/poster-placeholder/

class PersonCastRole extends React.Component {
    //handler for Popular Role onClick; changes "focused" ExpandedResult
    handleChangeFocus = () => this.props.handleChangeFocus(this.props.data);

    //build URL to access movie/tv "backdrop" image
    buildBackdropUrl(path) {
        return path === null ? PLACEHOLDER_POSTER_URL : POSTER_BASE_URL + path;
    }

    //build URL to access person's portrait
    buildPosterUrl(path) {
        return path ? (POSTER_BASE_URL + path) : PLACEHOLDER_POSTER_URL;
    }

    render() {
        const castRoleData = this.props.data;

        return (
            <>
                <Card key={this.props.index} className='cast-card shadow-sm mx-1 my-1' onClick={this.handleChangeFocus} id={castRoleData.id}>
                    <Card.Img className='cast-poster mt-1 mx-auto' variant="top" src={this.buildPosterUrl(castRoleData.poster_path)} />
                    <Card.Body>
                        <Card.Title>{castRoleData.character}</Card.Title>
                        <Card.Text className='text-muted'><span>in </span><br />{castRoleData.media_type === 'movie' ? castRoleData.title : castRoleData.name}</Card.Text>
                    </Card.Body>
                </Card>
            </>
        );
    }
}

export default PersonCastRole;