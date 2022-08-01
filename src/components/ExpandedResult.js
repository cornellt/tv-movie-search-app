import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/ExpandedResult.css';
import Person from './expanded_result/Person';
import Movie from './expanded_result/Movie';
import TVShow from './expanded_result/TVShow';
import Button from 'react-bootstrap/Button'; //sourced from https://react-bootstrap.netlify.app/components/buttons/

const SECRET_API_KEY = '8aaeb5fa2472dd850f957c983d0bb2e1';
const API_BASE_URL = 'https://api.themoviedb.org/3/';

export default function ExpandedResult(props) {
    const [state, setState] = useState({
        expandedData: {},
        recommendations: [],
        type: ''
    });

    //make initial AJAX request when component loads
    useEffect(() => {
        fetchData(props.data);
    }, [props.data]);

    //handle changing "focused" ExpandedResult item (occurs when a recommendation is clicked on)
    const handleChangeFocus = (itemToFocus) => fetchData(itemToFocus);

    //handler for 'Return to Results' button; closes ExpandedResult and restores SearchResultsPage
    const handleReturnToResults = () => props.handleReturnToResults();

    //2nd AJAX Request: fetch full data for "expanded" Movie/TV Show/Person + appended recommendations data
    async function fetchData(data) {
        const resultDetailsRequestUrl = API_BASE_URL + data.media_type + '/' + data.id + '?api_key=' + SECRET_API_KEY + '&language=en-US&append_to_response=recommendations,credits,aggregate_credits';

        try {
            const response = await axios.get(resultDetailsRequestUrl);

            setState({
                expandedData: response.data,
                recommendations: (response.data.recommendations) ? response.data.recommendations.results : [], //recommendations only exist for Movies/TV Shows (so I only update recommendations if the data exists)
                type: data.media_type
            });

            window.scrollTo(0, 0);
        }
        catch (error) {
            console.log(error);
        }
    }

    function renderItem() {
        const type = state.type;

        console.log(type)

        switch(type) {
            case 'person':
                return <Person data={state.expandedData} handleReturnToResults={handleReturnToResults} handleChangeFocus={handleChangeFocus} formatDate={props.formatDate} />;
            case 'movie':
                return <Movie data={state.expandedData} recommendations={state.recommendations} handleReturnToResults={handleReturnToResults} handleChangeFocus={handleChangeFocus} formatDate={props.formatDate} />;
            case 'tv':
                return <TVShow data={state.expandedData} recommendations={state.recommendations} handleReturnToResults={handleReturnToResults} handleChangeFocus={handleChangeFocus} formatDate={props.formatDate} />;
            default:
                return <></>
        }
    }

    return (
        <>
            <Button className='mx-auto' variant="primary" onClick={props.handleReturnToResults}>Return to Search Results</Button>
            {renderItem()}
        </>
    );
}