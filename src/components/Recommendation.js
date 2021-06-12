import React from 'react';
import Card from 'react-bootstrap/Card'; //sourced from https://react-bootstrap.netlify.app/components/cards/

const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const PLACEHOLDER_POSTER_URL = 'https://fakeimg.pl/640x360'; //placeholder sourced from https://fakeimg.pl/640x360

class Recommendation extends React.Component {
    //handler for Recommendation onClick; changes "focused" ExpandedResult
    handleChangeFocus = () => this.props.handleChangeFocus(this.props.data);

    //build URL to access movie/tv "backdrop" image
    buildBackdropUrl(path) {
        return path === null ? PLACEHOLDER_POSTER_URL : POSTER_BASE_URL + path;
    }

    render() {
        const recommendationData = this.props.data;

        return (
            <>
                <Card key={this.props.index} className='recommendation-card shadow-sm' onClick={this.handleChangeFocus}>
                    <Card.Img variant="top" src={this.buildBackdropUrl(recommendationData.backdrop_path)} />
                    <Card.Body>
                        <Card.Title>{recommendationData.media_type === 'tv' ? recommendationData.name : recommendationData.title}</Card.Title>
                        <Card.Text className='text-muted'>{recommendationData.overview}</Card.Text>
                    </Card.Body>
                </Card>
            </>
        );
    }
}

export default Recommendation;