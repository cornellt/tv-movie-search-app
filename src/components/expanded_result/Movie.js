import React from 'react';
import Recommendation from './Recommendation';
import Button from 'react-bootstrap/Button'; //sourced from https://react-bootstrap.netlify.app/components/buttons/
import Card from 'react-bootstrap/Card'; //sourced from https://react-bootstrap.netlify.app/components/cards/
import Col from 'react-bootstrap/Col'; //sourced from https://react-bootstrap.netlify.app/layout/grid/
import Row from 'react-bootstrap/Row'; //sourced from https://react-bootstrap.netlify.app/layout/grid/
import CardGroup from 'react-bootstrap/CardGroup'; //sourced from https://react-bootstrap.netlify.app/components/cards/#card-groups

const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
const PLACEHOLDER_POSTER_URL = 'https://i2.wp.com/www.theatrecr.org/wp-content/uploads/2016/01/poster-placeholder.png?ssl=1'; //poster placeholder sourced from https://www.theatrecr.org/poster-placeholder/

function Movie(props) {
    //build URL to access movie/tv poster or person portrait
    function buildPosterUrl() {
        const resultPosterPath = props.data.poster_path;
        return resultPosterPath ? (POSTER_BASE_URL + resultPosterPath) : PLACEHOLDER_POSTER_URL;
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

    //if homepage link exists, build and return corresponding JSX object
    function buildHomepageJsx(data) {
        if ((data.homepage !== null) && (data.homepage !== ''))
            return <h5><a href={data.homepage} target='_blank' rel="noreferrer">Link to Homepage</a></h5>;
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

    //if budget data exists, build and return formatted budget info
    function buildBudgetJsx(result) {
        if (result.budget && result.budget > 0) {
            const budget = formatCurrency(result.budget);
            return <h5>Budget: {budget}</h5>;
        }
    }

    //if revenue data exists, build and return formatted revenue info
    function buildBoxOfficeJsx(result) {
        if (result.revenue && result.revenue > 0) {
            const revenue = formatCurrency(result.revenue);
            return <h5>Box Office Revenue: {revenue}</h5>;
        }
    }

    //if both budget and revenue data exist, build and return net profit info with appropriate styling based on positive/negative value
    function buildNetProfitJsx(result) {
        if ((result.revenue && result.revenue > 0) && (result.budget && result.budget > 0)) {
            const net = (result.revenue - result.budget);
            const formattedNet = formatCurrency(net);
            const netStyling = (net >= 0) ? 'net-positive' : 'net-negative';
            return <h5 className={netStyling}>Net Income: {formattedNet}</h5>;
        }
    }

    //convert plain currency number into formatted string
    //formatting syntax sourced from https://www.samanthaming.com/tidbits/30-how-to-format-currency-in-es6/
    function formatCurrency(value) {
        return new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(value);
    }

    //convert mins to hr:min
    function formatRuntime(runtime) {
        if (runtime && runtime > 59) {
            return `${Math.floor(runtime / 60)} hrs, ${runtime % 60} min`;
        }

        return `${runtime} min`;
    }

    //returns Object containing some compiled Movie info/JSX for compileItemJsx() function
    function compileMovieData(result) {
        return {
            title: result.title,
            primaryInfo: (
                <>
                    <h3>Release Date: {props.formatDate(result.release_date)}</h3>
                    {(result.runtime > 0) ? (<h5>Runtime: {formatRuntime(result.runtime)}</h5>) : null}
                    {buildGenreList(result)}
                    {buildHomepageJsx(result)}
                    <hr />
                    <span className='text-right'>
                        {buildBudgetJsx(result)}
                        {buildBoxOfficeJsx(result)}
                        {buildNetProfitJsx(result)}
                    </span>
                    {buildBudgetJsx(result) ? <hr /> : <span />}
                    <h4>Overview</h4>
                </>
            ),
            overview: result.overview
        }
    }

    const compiledMovieData = compileMovieData(props.data);

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
                            <h1 className='display-4'>{compiledMovieData.title}</h1>
                            <h5 className='text-muted'>Movie</h5>
                            <hr />
                            {compiledMovieData.primaryInfo}
                            {compiledMovieData.overview}
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

export default Movie;