import React from 'react';
import Recommendation from './Recommendation';
import Button from 'react-bootstrap/Button'; //sourced from https://react-bootstrap.netlify.app/components/buttons/
import Card from 'react-bootstrap/Card'; //sourced from https://react-bootstrap.netlify.app/components/cards/
import Col from 'react-bootstrap/Col'; //sourced from https://react-bootstrap.netlify.app/layout/grid/
import Row from 'react-bootstrap/Row'; //sourced from https://react-bootstrap.netlify.app/layout/grid/
import Table from 'react-bootstrap/Table'; //sourced from https://react-bootstrap.netlify.app/components/table/
import CardGroup from 'react-bootstrap/CardGroup'; //sourced from https://react-bootstrap.netlify.app/components/cards/#card-groups

const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
const PLACEHOLDER_POSTER_URL = 'https://i2.wp.com/www.theatrecr.org/wp-content/uploads/2016/01/poster-placeholder.png?ssl=1'; //poster placeholder sourced from https://www.theatrecr.org/poster-placeholder/
const PLACEHOLDER_BACKDROP_URL = 'https://fakeimg.pl/640x360'; //placeholder sourced from https://fakeimg.pl/640x360

function TVShow(props) {
    //build URL to access movie/tv "backdrop" image for popular roles
    function buildBackdropUrl(path) {
        return path === null ? PLACEHOLDER_BACKDROP_URL : POSTER_BASE_URL + path;
    }

    //build URL to access movie/tv poster or person portrait
    function buildPosterUrl() {
        const resultPosterPath = props.data.poster_path;
        return resultPosterPath ? (POSTER_BASE_URL + resultPosterPath) : PLACEHOLDER_POSTER_URL;
    }

    //if homepage link exists, build and return corresponding JSX object
    function buildHomepageJsx(result) {
        if ((result.homepage !== null) && (result.homepage !== ''))
            return <h5><a href={result.homepage} target='_blank' rel="noreferrer">Link to Homepage</a></h5>;
    }

    //if recommendations exist, build and return Recommendations Section JSX object
    function buildRecommendationSectionJsx() {
        if (props.recommendations.length > 0) { //only build Recommendation section if recommendations exist
            return (
                <Card.Footer className='mx-1'>
                    <Card.Title className='mx-auto'><h2>You Might Also Be Interested In</h2></Card.Title>
                    <CardGroup>
                        {props.recommendations.map((item, index) =>
                            <Recommendation key={index} index={index} data={item} handleChangeFocus={props.handleChangeFocus} />
                        )}
                    </CardGroup>
                </Card.Footer>
            );
        }
    }

    //Build react-bootstrap Table for TV Show seasons info
    function buildSeasonsTable() {
        if (props.data.seasons) {
            const seasonArray = []; //const variables cannot be reassigned BUT are NOT immutable -- we can still mutate the array's properties

            props.data.seasons.forEach(element => {
                if (element.season_number !== 0) //we ignore the 0th season's data because those are 'extra' episodes
                    seasonArray.push(element); //append season to end of seasonArray
            });

            return (
                <Table striped bordered size='sm' className='my-3'>
                    <thead>
                        <tr>
                            <th>Season #</th>
                            <th>Episode Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {seasonArray.map((item, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.episode_count}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            );
        }
    }

    //Build genre String + JSX for TV Show/Movie
    function buildGenreList(data) {
        if (data.genres && data.genres.length > 0) {
            let genreString = 'Genre(s): '

            for (const genre of data.genres) {
                genreString += (genre.name + ', ');
            }

            genreString = genreString.substr(0, genreString.length - 2);
            return <h5>{genreString}</h5>;
        }
    }

    //returns Object containing some compiled TV Show info/JSX for compileItemJsx() function
    function compileTvShowData(result) {
        const inProd = result.in_production;
        const color = inProd ? 'net-positive' : 'net-negative';
        return {
            title: result.name,
            primaryInfo: (
                <>
                    <h3>First Air Date: {props.formatDate(result.first_air_date)}</h3>
                    {inProd ? <h3>Recent Air Date: {props.formatDate(result.last_air_date)}</h3> : <h3>Final Air Date: {props.formatDate(result.last_air_date)}</h3>}
                    <h4 className={color}>{inProd ? 'Still in production' : 'No longer in production'}</h4>
                    {buildGenreList(result)}
                    <br />
                    <h5>Number of Seasons: {result.number_of_seasons}</h5>
                    <h5>Number of Episodes: {result.number_of_episodes}</h5>
                    {buildHomepageJsx(result)}
                    <hr />
                    <h4>Overview</h4>
                </>
            ),
            overviewData: (
                <>
                    <Card.Text className='w-75 mx-auto'>
                        {result.overview}
                    </Card.Text>
                    {buildSeasonsTable()}
                </>
            )
        }
    }

    const compiledShowData = compileTvShowData(props.data);

    return (
        <Card className='mx-auto my-3 outer-result-card'>
            <Card className='inner-result-card py-3 px-3'>
                {/* <Button className='mx-auto' variant="primary" onClick={props.handleReturnToResults}>Return to Search Results</Button> */}
                <Row>
                    <Col lg className='mx-2'>
                        <Card.Title className='mb-0 mt-3'>
                            <Card.Text className='text-muted mb-0'>{props.data.tagline}</Card.Text>
                            <Card.Img className='mx-auto my-2 poster w-75' variant="top" src={buildPosterUrl()} />
                        </Card.Title>
                    </Col>
                    <Col lg className='mx-auto'>
                        <Card.Body>
                            <h1 className='display-4'>{compiledShowData.title}</h1>
                            <h5 className='text-muted'>TV Show</h5>
                            <hr />
                            {compiledShowData.primaryInfo}
                            {compiledShowData.overviewData} {/* includes show overview and seasons table*/}
                        </Card.Body>
                    </Col>
                </Row>
                <Row className='mx-auto my-2'>
                    <Button variant="primary" onClick={props.handleReturnToResults}>Return to Search Results</Button>
                </Row>
            </Card>
            {buildRecommendationSectionJsx()}
        </Card>
    );
}

export default TVShow;