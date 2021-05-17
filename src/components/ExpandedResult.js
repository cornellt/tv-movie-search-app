import React from 'react';
import axios from 'axios';
import './styles/ExpandedResult.css';
import Button from 'react-bootstrap/Button'; //sourced from https://react-bootstrap.netlify.app/components/buttons/
import Card from 'react-bootstrap/Card'; //sourced from https://react-bootstrap.netlify.app/components/cards/
import Col from 'react-bootstrap/Col'; //sourced from https://react-bootstrap.netlify.app/layout/grid/
import Row from 'react-bootstrap/Row'; //sourced from https://react-bootstrap.netlify.app/layout/grid/
import Table from 'react-bootstrap/Table'; //sourced from https://react-bootstrap.netlify.app/components/table/
import CardColumns from 'react-bootstrap/CardColumns'; //sourced from https://react-bootstrap.netlify.app/components/cards/#card-columns
import Recommendation from './Recommendation';

const SECRET_API_KEY = '8aaeb5fa2472dd850f957c983d0bb2e1';
const API_BASE_URL = 'https://api.themoviedb.org/3/';
const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
const PLACEHOLDER_POSTER_URL = 'https://i2.wp.com/www.theatrecr.org/wp-content/uploads/2016/01/poster-placeholder.png?ssl=1'; //poster placeholder sourced from https://www.theatrecr.org/poster-placeholder/

class ExpandedResult extends React.Component {
    state = {
        expandedData: {},
        recommendations: []
    }

    //make AJAX request when component loads
    componentDidMount() { this.fetchData(this.props.data); }

    //handle changing "focused" ExpandedResult item (occurs when a recommendation is clicked on)
    handleChangeFocus = (itemToFocus) => (this.fetchData(itemToFocus));

    //handler for 'Return to Results' button; closes ExpandedResult and restores SearchResultsPage
    handleReturnToResults = () => (this.props.handleReturnToResults());

    //2nd AJAX Request: fetch full data for "expanded" Movie/TV Show/Person + appended recommendations data
    async fetchData(data) {
        let resultDetailsRequestUrl = API_BASE_URL + data.media_type + '/' + data.id + '?api_key=' + SECRET_API_KEY + '&language=en-US&append_to_response=recommendations';

        try {
            const response = await axios.get(resultDetailsRequestUrl);

            this.setState({
                expandedData: response.data,
                recommendations: (response.data.recommendations) ? response.data.recommendations.results : [] //recommendations only exist for Movies/TV Shows (so we only update recommendations if the data exists)
            });
        }
        catch (error) {
            console.log(error);
        }
    }

    //build URL to access movie/tv poster or person portrait
    buildPosterUrl() {
        const result = this.state.expandedData;
        const resultType = this.props.data.media_type;
        const resultPosterPath = ((resultType === 'movie' || resultType === 'tv') ? result.poster_path : result.profile_path);

        //poster placeholder sourced from https://www.theatrecr.org/poster-placeholder/
        return (resultPosterPath) ? (POSTER_BASE_URL + resultPosterPath) : PLACEHOLDER_POSTER_URL;
    }

    //return formatted String for each media_type
    resultType() {
        const resultType = this.props.data.media_type;

        if (resultType === 'movie')
            return 'Movie';
        else if (resultType === 'tv')
            return 'TV Show';
        else if (resultType === 'person')
            return 'Person';
    }

    //Build react-bootstrap Table for TV Show seasons info
    buildSeasonsTable() {
        if (this.state.expandedData.seasons) {
            const seasonArray = [];

            this.state.expandedData.seasons.forEach(element => {
                if (element.season_number !== 0) { //we ignore the 0th season's data because those are 'extra' episodes
                    seasonArray.push(element); //append season to end of seasonArray
                }
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
    buildGenreList(data) {
        if (data.genres && data.genres.length > 0) {
            let genreString = 'Genres: '

            for (const genre of data.genres) {
                genreString += (genre.name + ', ');
            }

            genreString = genreString.substr(0, genreString.length - 2);
            return <h5>{genreString}</h5>;
        }
    }

    //if homepage link exists, build and return corresponding JSX object
    buildHomepageJsx(result) {
        if ((result.homepage !== null) && (result.homepage !== ''))
            return <h5><a href={result.homepage} target='_blank' rel="noreferrer">Link to Homepage</a></h5>;
    }

    //returns Object containing some compiled Person info/JSX for compileItemJsx() function
    compilePersonData(result) {
        return {
            resultName: result.name,
            resultPrimaryInfo: (
                <>
                    <hr />
                    <h4>Biography</h4>
                </>
            ),
            resultOverview: (
                <>
                    <Card.Text className='w-75 mx-auto'>
                        {result.biography}
                    </Card.Text>
                </>
            )
        }
    }

    //returns Object containing some compiled Movie info/JSX for compileItemJsx() function
    compileMovieData(result) {
        return {
            resultName: result.title,

            resultPrimaryInfo: (
                <>
                    <hr />
                    <h3>Release Date: {result.release_date}</h3>
                    { (result.runtime > 0) ? (<h5>Runtime: {result.runtime} min</h5>) : null}
                    {this.buildGenreList(result)}
                    {this.buildHomepageJsx(result)}
                    <hr />
                    <h4>Overview</h4>
                </>
            ),
            resultOverview: (
                result.overview
            )
        }
    }

    //returns Object containing some compiled TV Show info/JSX for compileItemJsx() function
    compileTvShowData(result) {
        return {
            resultName: result.name,
            resultPrimaryInfo: (
                <>
                    <hr />
                    <h3>First Air Date: {result.first_air_date}</h3>
                    <h3>Last Air Date: {result.last_air_date}</h3>
                    {result.in_production ? <h4>Still in production</h4> : <h4>No longer in production</h4>}
                    {this.buildGenreList(result)}
                    <br />
                    <h5>Number of Seasons: {result.number_of_seasons}</h5>
                    <h5>Number of Episodes: {result.number_of_episodes}</h5>
                    {this.buildHomepageJsx(result)}
                    <hr />
                    <h4>Overview</h4>
                </>
            ),
            resultOverview: (
                <>
                    <Card.Text className='w-75 mx-auto'>
                        {result.overview}
                    </Card.Text>
                    {this.buildSeasonsTable()}
                </>
            )
        }
    }

    //if recommendations exist, build and return Recommendations Section JSX object
    buildRecommendationSectionJsx() {
        if (this.state.recommendations.length > 0) { //only build Recommendation section if recommendations exist
            return (
                <Card.Footer>
                    <Card.Title className='mx-auto'><h2>Related Recommendations</h2></Card.Title>
                    <CardColumns>
                        {this.state.recommendations.map((item, index) =>
                            <Recommendation key={index} index={index} item={item} handleChangeFocus={this.handleChangeFocus} />
                        )}
                    </CardColumns>
                </Card.Footer>
            );
        }
    }

    //call appropriate compileData method based on media_type
    compileItemJsx() {
        let resultType = this.props.data.media_type;

        if (resultType === 'movie')
            return this.compileMovieData(this.state.expandedData);
        else if (resultType === 'tv')
            return this.compileTvShowData(this.state.expandedData);
        else if (resultType === 'person')
            return this.compilePersonData(this.state.expandedData);
    }

    render() {
        window.scrollTo(0, 0);
        let compiledItemJsx = this.compileItemJsx();

        return (
            <Card className='mx-auto my-3 outer-result-card'>
                <Card className='inner-result-card'>
                    <Button className='mx-auto' variant="primary" onClick={this.handleReturnToResults}>Return to Search Results</Button>
                    <Row>
                        <Col lg className='mx-2'>
                            <Card.Title className='mb-0 mt-1'>
                                <Card.Text className='text-muted'>{this.state.expandedData.tagline}</Card.Text>
                                <Card.Img className='mx-auto my-2 poster w-75' variant="top" src={this.buildPosterUrl()} />
                            </Card.Title>
                        </Col>
                        <Col lg className='mx-auto'>
                            <Card.Body>
                                <Card.Title>
                                    <h1 className='display-4'>{compiledItemJsx.resultName}</h1>
                                    <h5 className='text-muted'>{this.resultType()}</h5>
                                    {compiledItemJsx.resultPrimaryInfo}
                                </Card.Title>
                                {compiledItemJsx.resultOverview}
                            </Card.Body>
                        </Col>
                    </Row>
                    <Row className='mx-auto my-2'>
                        <Button variant="primary" onClick={this.handleReturnToResults}>Return to Search Results</Button>
                    </Row>
                </Card>
                {this.buildRecommendationSectionJsx()}
            </Card>
        );
    }
}

export default ExpandedResult;