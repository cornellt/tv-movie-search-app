import React from 'react';
import Recommendation from './Recommendation';
import Button from 'react-bootstrap/Button'; //sourced from https://react-bootstrap.netlify.app/components/buttons/
import Card from 'react-bootstrap/Card'; //sourced from https://react-bootstrap.netlify.app/components/cards/
import Col from 'react-bootstrap/Col'; //sourced from https://react-bootstrap.netlify.app/layout/grid/
import Row from 'react-bootstrap/Row'; //sourced from https://react-bootstrap.netlify.app/layout/grid/
import CardGroup from 'react-bootstrap/CardGroup'; //sourced from https://react-bootstrap.netlify.app/components/cards/#card-groups

const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
const PLACEHOLDER_POSTER_URL = 'https://i2.wp.com/www.theatrecr.org/wp-content/uploads/2016/01/poster-placeholder.png?ssl=1'; //poster placeholder sourced from https://www.theatrecr.org/poster-placeholder/
const PLACEHOLDER_BACKDROP_URL = 'https://fakeimg.pl/640x360'; //placeholder sourced from https://fakeimg.pl/640x360

class Movie extends React.Component {
    //build URL to access movie/tv "backdrop" image for popular roles
    buildBackdropUrl(path) {
        return path === null ? PLACEHOLDER_BACKDROP_URL : POSTER_BASE_URL + path;
    }

    //build URL to access movie/tv poster or person portrait
    buildPosterUrl() {
        const resultPosterPath = this.props.data.poster_path;
        return resultPosterPath ? (POSTER_BASE_URL + resultPosterPath) : PLACEHOLDER_POSTER_URL;
    }

    //Build genre String + JSX for TV Show/Movie
    buildGenreList(data) {
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
    buildHomepageJsx(data) {
        if ((data.homepage !== null) && (data.homepage !== ''))
            return <h5><a href={data.homepage} target='_blank' rel="noreferrer">Link to Homepage</a></h5>;
    }

    //if recommendations exist, build and return Recommendations Section JSX object
    buildRecommendationSectionJsx() {
        if (this.props.recommendations.length > 0) { //only build Recommendation section if recommendations exist
            return (
                <Card.Footer>
                    <Card.Title className='mx-auto'><h2>You Might Also Be Interested In</h2></Card.Title>
                    <CardGroup>
                        {this.props.recommendations.map((item, index) =>
                            <Recommendation key={index} index={index} data={item} handleChangeFocus={this.props.handleChangeFocus} />
                        )}
                    </CardGroup>
                </Card.Footer>
            );
        }
    }

    //returns Object containing some compiled Movie info/JSX for compileItemJsx() function
    compileMovieData(result) {
        return {
            resultName: result.title,
            resultPrimaryInfo: (
                <>
                    <h3>Release Date: {this.props.formatDate(result.release_date)}</h3>
                    {(result.runtime > 0) ? (<h5>Runtime: {this.formatRuntime(result.runtime)}</h5>) : null}
                    {this.buildGenreList(result)}
                    {this.buildHomepageJsx(result)}
                    <hr />
                    <span className='text-right'>
                        {this.buildBudgetJsx(result)}
                        {this.buildBoxOfficeJsx(result)}
                        {this.buildNetProfitJsx(result)}
                    </span>
                    <hr />
                    <h4>Overview</h4>
                </>
            ),
            resultOverview: result.overview
        }
    }

    //if budget data exists, build and return formatted budget info
    buildBudgetJsx(result) {
        if (result.budget && result.budget > 0) {
            const budget = this.formatCurrency(result.budget);
            return <h5>Budget: {budget}</h5>;
        }
    }

    //if revenue data exists, build and return formatted revenue info
    buildBoxOfficeJsx(result) {
        if (result.revenue && result.revenue > 0) {
            const revenue = this.formatCurrency(result.revenue);
            return <h5>Box Office Revenue: {revenue}</h5>;
        }
    }

    //if both budget and revenue data exist, build and return net profit info with appropriate styling based on positive/negative value
    buildNetProfitJsx(result) {
        if ((result.revenue && result.revenue > 0) && (result.budget && result.budget > 0)) {
            const net = (result.revenue - result.budget);
            const formattedNet = this.formatCurrency(net);
            const netStyling = (net >= 0) ? 'net-positive' : 'net-negative';
            return <h5 className={netStyling}>Net Income: {formattedNet}</h5>;
        }
    }

    //convert plain currency number into formatted string
    //formatting syntax sourced from https://www.samanthaming.com/tidbits/30-how-to-format-currency-in-es6/
    formatCurrency(value) {
        return new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(value);
    }

    //convert mins to hr:min
    formatRuntime(runtime) {
        if (runtime && runtime > 59) {
            return `${Math.floor(runtime / 60)} hrs, ${runtime % 60} min`;
        }

        return `${runtime} min`;
    }

    render() {
        let compiledItemJsx = this.compileMovieData(this.props.data);

        return (
            <Card className='mx-auto my-3 outer-result-card'>
                <Card className='inner-result-card'>
                    <Button className='mx-auto' variant="primary" onClick={this.props.handleReturnToResults}>Return to Search Results</Button>
                    <Row>
                        <Col lg className='mx-2'>
                            <Card.Title className='mb-0 mt-1'>
                                <Card.Text className='text-muted'>{this.props.data.tagline}</Card.Text>
                                <Card.Img className='mx-auto my-2 poster w-75' variant="top" src={this.buildPosterUrl()} />
                            </Card.Title>
                        </Col>
                        <Col lg className='mx-auto'>
                            <Card.Body>
                                <h1 className='display-4'>{compiledItemJsx.resultName}</h1>
                                <h5 className='text-muted'>Movie</h5>
                                <hr />
                                {compiledItemJsx.resultPrimaryInfo}
                                {compiledItemJsx.resultOverview}
                            </Card.Body>
                        </Col>
                    </Row>
                    <Row className='mx-auto my-2'>
                        <Button variant="primary" onClick={this.props.handleReturnToResults}>Return to Search Results</Button>
                    </Row>
                </Card>
                {this.buildRecommendationSectionJsx()}
            </Card>
        );
    }
}

export default Movie;