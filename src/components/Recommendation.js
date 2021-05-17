import React from 'react';
import Card from 'react-bootstrap/Card'; //sourced from https://react-bootstrap.netlify.app/components/cards/

const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500';

class Recommendation extends React.Component {
    //handler for Recommendation onClick; changes "focused" ExpandedResult
    handleChangeFocus = () => {
        this.props.handleChangeFocus(this.props.item);
    }

    //build URL to access movie/tv "backdrop" image
    buildBackdropUrl(path) {
        return (path === null) ? 'https://fakeimg.pl/640x360' : (POSTER_BASE_URL + path); //placeholder sourced from https://fakeimg.pl/640x360
    }

    render() {
        let item = this.props.item;
        let itemName = item.media_type === 'tv' ? item.name : item.title;

        return (
            <>
                <Card key={this.props.index} className='recommendation-card shadow-sm' onClick={this.handleChangeFocus}>
                    <Card.Img variant="top" src={this.buildBackdropUrl(item.backdrop_path)} />
                    <Card.Body>
                        <Card.Title>{itemName}</Card.Title>
                        <Card.Text>{item.overview}</Card.Text>
                    </Card.Body>
                </Card>
            </>
        );
    }
}

export default Recommendation;