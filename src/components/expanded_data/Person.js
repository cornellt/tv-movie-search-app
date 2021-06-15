import React from 'react';
import axios from 'axios';
import './expanded_data_styles/Person.css';
import PersonCastRole from './PersonCastRole';
import Button from 'react-bootstrap/Button'; //sourced from https://react-bootstrap.netlify.app/components/buttons/
import Card from 'react-bootstrap/Card'; //sourced from https://react-bootstrap.netlify.app/components/cards/
import Col from 'react-bootstrap/Col'; //sourced from https://react-bootstrap.netlify.app/layout/grid/
import Row from 'react-bootstrap/Row'; //sourced from https://react-bootstrap.netlify.app/layout/grid/
import CardGroup from 'react-bootstrap/CardGroup'; //sourced from https://react-bootstrap.netlify.app/components/cards/#card-groups

const SECRET_API_KEY = '8aaeb5fa2472dd850f957c983d0bb2e1';
const API_BASE_URL = 'https://api.themoviedb.org/3/';
const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
const PLACEHOLDER_POSTER_URL = 'https://i2.wp.com/www.theatrecr.org/wp-content/uploads/2016/01/poster-placeholder.png?ssl=1'; //poster placeholder sourced from https://www.theatrecr.org/poster-placeholder/
const PLACEHOLDER_BACKDROP_URL = 'https://fakeimg.pl/640x360'; //placeholder sourced from https://fakeimg.pl/640x360

class Person extends React.Component {
    state = {
        combinedCredits: []
    }

    //make AJAX request when component fully loads
    componentDidMount() {
        if (this.props.data.id && this.state.combinedCredits.length === 0)
            this.fetchCombinedCredits(this.props.data);
    }

    //build URL to access movie/tv "backdrop" image for popular roles
    buildBackdropUrl(path) {
        return path === null ? PLACEHOLDER_BACKDROP_URL : POSTER_BASE_URL + path;
    }

    //build URL to access person's portrait
    buildPosterUrl(path) {
        return path ? (POSTER_BASE_URL + path) : PLACEHOLDER_POSTER_URL;
    }

    //3rd AJAX Request: fetch combined TV and Movie credits for Person
    async fetchCombinedCredits(data) {
        if (data.id) {
            const combinedCreditsRequestUrl = API_BASE_URL + 'person/' + data.id + '/combined_credits?api_key=' + SECRET_API_KEY + '&language=en-US';

            try {
                const response = await axios.get(combinedCreditsRequestUrl);
                console.log(response);
                this.setState({
                    combinedCredits: response.data.cast
                });
            }
            catch (error) {
                console.log(error);
            }
        }
    }

    //build JSX for Popular Roles cards
    buildPopularRolesList() {
        let popularContributions = [];

        if (this.state.combinedCredits.length > 0) {
            for (let i = 0; (i < 30) && (i < this.state.combinedCredits.length); i++) {
                const item = this.state.combinedCredits[i];
                popularContributions = [...popularContributions, item];
            }

            return (
                <Card.Footer>
                    <Card.Title className='mx-auto'><h2>Popular Roles</h2></Card.Title>
                    <CardGroup>
                        {popularContributions.map((item, index) =>
                            <PersonCastRole key={index} data={item} handleChangeFocus={this.props.handleChangeFocus} />
                        )}
                    </CardGroup>
                </Card.Footer>
            );
        }
    }

    //returns Object containing some compiled Person info including name and biography
    compileBio(result) {
        const bioData = {
            name: result.name,
            biography: '',
            birthday: ''
        }

        if (result.biography) {
            bioData.biography =
                (<>
                    <h3>Biography</h3>
                    <hr />
                    <Card.Text>
                        {result.biography}
                    </Card.Text>
                </>)
        }
        if (result.birthday) {
            bioData.birthday = <h4>Born on {this.props.formatDate(result.birthday)}</h4>;
        }
        if (result.deathday) {
            bioData.deathday = <h4>Died on {this.props.formatDate(result.deathday)}</h4>;
        }

        return bioData;
    }

    render() {
        const compiledItemJsx = this.compileBio(this.props.data);

        return (
            <Card className='mx-auto my-3 outer-result-card'>
                <Card className='inner-result-card'>
                    <Button className='mx-auto' variant="primary" onClick={this.props.handleReturnToResults}>Return to Search Results</Button>
                    <Row>
                        <Col lg className='my-3 ml-1'>
                            <Card.Title>
                                <h1 className='display-4'>{compiledItemJsx.name}</h1>
                                <Card.Img className='my-3 my-2 poster w-75' variant="top" src={this.buildPosterUrl(this.props.data.profile_path)} />
                                {compiledItemJsx.birthday}
                                {compiledItemJsx.deathday}
                            </Card.Title>
                        </Col>
                        <Col lg className='mx-3'>
                            <Card.Body>
                                {compiledItemJsx.biography}
                            </Card.Body>
                        </Col>
                    </Row>
                    <Row className='mx-auto my-2'>
                        <Button variant="primary" onClick={this.props.handleReturnToResults}>Return to Search Results</Button>
                    </Row>
                </Card>
                {this.buildPopularRolesList()}
            </Card>
        );
    }
}

export default Person;