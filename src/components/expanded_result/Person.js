import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import '../styles/expanded_result_styles/Person.css';
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
// const PLACEHOLDER_BACKDROP_URL = 'https://fakeimg.pl/640x360'; //placeholder sourced from https://fakeimg.pl/640x360

function Person(props) {
    const [combinedCredits, setCombinedCredits] = useState([]);

    //make AJAX request when component fully loads
    useEffect(() => {
        fetchCombinedCredits(props.data);
    });

    //build URL to access person's portrait
    function buildPosterUrl(path) {
        return path ? (POSTER_BASE_URL + path) : PLACEHOLDER_POSTER_URL;
    }

    //3rd AJAX Request: fetch combined TV and Movie credits for Person
    async function fetchCombinedCredits(data) {
        if (data.id) {
            const combinedCreditsRequestUrl = API_BASE_URL + 'person/' + data.id + '/combined_credits?api_key=' + SECRET_API_KEY + '&language=en-US';

            try {
                const response = await axios.get(combinedCreditsRequestUrl);

                setCombinedCredits(response.data.cast)
            }
            catch (error) {
                console.log(error);
            }
        }
    }

    //build JSX for Popular Roles cards
    function buildPopularRolesList() {
        let popularContributions = [];

        if (combinedCredits.length > 0) {
            for (let i = 0; (i < 30) && (i < combinedCredits.length); i++) {
                const item = combinedCredits[i];
                popularContributions = [...popularContributions, item];
            }

            return (
                <Card.Footer>
                    <Card.Title className='mx-auto'><h2>Popular Roles</h2></Card.Title>
                    <CardGroup>
                        {popularContributions.map((item, index) =>
                            <PersonCastRole key={index} data={item} handleChangeFocus={props.handleChangeFocus} />
                        )}
                    </CardGroup>
                </Card.Footer>
            );
        }
    }

    //returns Object containing some compiled Person info including name and biography
    function compileBio(result) {
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
            bioData.birthday = <h4>Born on {props.formatDate(result.birthday)}</h4>;
        }
        if (result.deathday) {
            bioData.deathday = <h4>Died on {props.formatDate(result.deathday)}</h4>;
        }

        return bioData;
    }


    const compiledPersonData = compileBio(props.data);

    return (
        <Card className='mx-auto my-3 outer-result-card'>
            <Card className='inner-result-card py-3 px-3'>
                {/* <Button className='mx-auto' variant="primary" onClick={props.handleReturnToResults}>Return to Search Results</Button> */}
                <Row>
                    <Col lg className='my-3 ml-1'>
                        <Card.Title className='mb-0'>
                            <h1 className='display-4'>{compiledPersonData.name}</h1>
                            <Card.Img className='my-3 my-2 poster w-75' variant="top" src={buildPosterUrl(props.data.profile_path)} />
                            {compiledPersonData.birthday}
                            {compiledPersonData.deathday}
                        </Card.Title>
                    </Col>
                    <Col lg className='mx-3'>
                        <Card.Body>
                            {compiledPersonData.biography}
                        </Card.Body>
                    </Col>
                </Row>
                <Row className='mx-auto my-2'>
                    <Button variant="primary" onClick={props.handleReturnToResults}>Return to Search Results</Button>
                </Row>
            </Card>
            {buildPopularRolesList()}
        </Card>
    );

}

export default Person;