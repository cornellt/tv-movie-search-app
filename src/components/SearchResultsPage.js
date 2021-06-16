import React, { useState } from 'react';
import './styles/SearchResultsPage.css';
import Container from 'react-bootstrap/Container'; //sourced from https://react-bootstrap.github.io/layout/grid/
import Image from 'react-bootstrap/Image'; //sourced from https://react-bootstrap.netlify.app/components/images/
import ExpandedResult from './ExpandedResult';
import SearchResultItem from './SearchResultItem';

export default function SearchResultsPage(props) {
    const [state, setState] = useState({
        isShowingExpandedResult: false,
        expandedResultData: {}
    })

    //handler function for SearchResultItem onClick. Results in ExpandedResult being displayed
    const handleExpandResult = (item) => {
        setState({
            isShowingExpandedResult: true,
            expandedResultData: item
        });
    }

    //handler function for 'Return to Results' button. Results in SearchResultsPage being restored after viewing an ExpandedResult
    const handleReturnFromExpandedResult = () => {
        setState({
            isShowingExpandedResult: false,
            expandedResultData: {}
        });

        window.scrollTo(0, 0);
    }

    //returns a formatted date string based on the ISO Date provided by the API
    function formatDate(dateString) {
        const date = new Date(dateString);
        const formattedDateStr = date.toDateString();
        const formattedDateSplit = formattedDateStr.split(' ');
        return `${formattedDateSplit[1]} ${formattedDateSplit[2]}, ${formattedDateSplit[3]}`;
    }

    //switch between ExpandedResult and list of SearchResultItem components
    function buildPageJsx() {
        if (state.isShowingExpandedResult)  //create ExpandedResult if that's what we're currently showing
            return <ExpandedResult data={state.expandedResultData} handleReturnToResults={handleReturnFromExpandedResult} formatDate={formatDate} />;
        else { //otherwise, create SearchResultItem list
            return (
                <>
                    {props.searchData.map((item, index) =>
                        <SearchResultItem data={item} key={index} expandResult={handleExpandResult} formatDate={formatDate} />
                    )}
                </>
            );
        }
    }

    return (
        <>
            <Container className='results-section m-1 mx-auto' fluid>
                {buildPageJsx()}
                <div className='footer-text'>This product uses the <a className='tmdb-link' href='https://www.themoviedb.org/documentation/api' rel='noreferrer' target='_blank'>TMDb API</a> but is not endorsed or certified by TMDb.</div>
                <Image className='attribution-logo pt-2' src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' />
            </Container>
        </>
    );

}