import React from 'react';
import './styles/SearchResultsPage.css';
import Container from 'react-bootstrap/Container'; //sourced from https://react-bootstrap.github.io/layout/grid/
import Image from 'react-bootstrap/Image'; //sourced from https://react-bootstrap.netlify.app/components/images/
import ExpandedResult from './ExpandedResult';
import SearchResultItem from './SearchResultItem';

class SearchResultsPage extends React.Component {
    state = {
        isShowingExpandedResult: false,
        expandedResultData: {}
    }

    //handler function for SearchResultItem onClick. Results in ExpandedResult being displayed
    handleExpandResult = (item) => {
        this.setState({
            isShowingExpandedResult: true,
            expandedResultData: item
        });
    }

    //handler function for 'Return to Results' button. Results in SearchResultsPage being restored after viewing an ExpandedResult
    handleReturnFromExpandedResult = () => {
        this.setState({
            isShowingExpandedResult: false,
            expandedResultData: {}
        });
    }

    //build JSX object based on current State
    buildListJsx() {
        if (this.state.isShowingExpandedResult) { //create ExpandedResult if that's what we're currently showing
            return <ExpandedResult data={this.state.expandedResultData} handleReturnToResults={this.handleReturnFromExpandedResult} />;
        }
        else { //create SearchResultItem list otherwise
            return (
                <>
                    {this.props.searchData.map((item, index) =>
                        <SearchResultItem data={item} key={index} expandResult={this.handleExpandResult} />
                    )}
                </>
            );
        }
    }

    render() {
        window.scrollTo(0, 0);

        return (
            <>
                <Container className='results-section m-1 mx-auto' fluid>
                    {this.buildListJsx()}
                    <div className='footer-text'>This product uses the <a className='tmdb-link' href='https://www.themoviedb.org/documentation/api' rel='noreferrer' target='_blank'>TMDb API</a> but is not endorsed or certified by TMDb.</div>
                    <Image className='attribution-logo' src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' />
                </Container>
            </>
        );
    }
}

export default SearchResultsPage;