import React from 'react';
import axios from 'axios';
import './styles/ExpandedResult.css';
import Person from './expanded_result/Person';
import Movie from './expanded_result/Movie';
import TVShow from './expanded_result/TVShow';
import Button from 'react-bootstrap/Button'; //sourced from https://react-bootstrap.netlify.app/components/buttons/

const SECRET_API_KEY = '8aaeb5fa2472dd850f957c983d0bb2e1';
const API_BASE_URL = 'https://api.themoviedb.org/3/';

class ExpandedResult extends React.Component {
    state = {
        expandedData: {},
        recommendations: []
    }

    //make AJAX request when component loads
    componentDidMount() { this.fetchData(this.props.data); }

    //handle changing "focused" ExpandedResult item (occurs when a recommendation is clicked on)
    handleChangeFocus = (itemToFocus) => this.fetchData(itemToFocus);

    //handler for 'Return to Results' button; closes ExpandedResult and restores SearchResultsPage
    handleReturnToResults = () => this.props.handleReturnToResults();

    //return formatted String for each media_type
    resultType() {
        const resultType = this.state.expandedData.media_type;

        if (resultType === 'movie')
            return 'Movie';
        else if (resultType === 'tv')
            return 'TV Show';
        else if (resultType === 'person')
            return 'Person';
    }

    //2nd AJAX Request: fetch full data for "expanded" Movie/TV Show/Person + appended recommendations data
    async fetchData(data) {
        const resultDetailsRequestUrl = API_BASE_URL + data.media_type + '/' + data.id + '?api_key=' + SECRET_API_KEY + '&language=en-US&append_to_response=recommendations,credits';

        try {
            const response = await axios.get(resultDetailsRequestUrl);

            this.setState({
                expandedData: response.data,
                recommendations: (response.data.recommendations) ? response.data.recommendations.results : [] //recommendations only exist for Movies/TV Shows (so we only update recommendations if the data exists)
            });

            window.scrollTo(0, 0);
        }
        catch (error) {
            console.log(error);
        }
    }

    renderType() {
        let result = this.state.expandedData;
        console.log(result);
        if (result.birthday) {
            return <Person data={this.state.expandedData} handleReturnToResults={this.handleReturnToResults} handleChangeFocus={this.handleChangeFocus} formatDate={this.props.formatDate} />;
        }
        else if (result.title) {
            return <Movie data={this.state.expandedData} recommendations={this.state.recommendations} handleReturnToResults={this.handleReturnToResults} handleChangeFocus={this.handleChangeFocus} formatDate={this.props.formatDate} />;
        }
        else {
            return <TVShow data={this.state.expandedData} recommendations={this.state.recommendations} handleReturnToResults={this.handleReturnToResults} handleChangeFocus={this.handleChangeFocus} formatDate={this.props.formatDate} />;
        }
    }

    render() {
        console.log(this.state.expandedData); //TODO: remove this

        return (
            <>
                <Button className='mx-auto' variant="primary" onClick={this.props.handleReturnToResults}>Return to Search Results</Button>
                {this.renderType()}
            </>
        );
    }
}

export default ExpandedResult;