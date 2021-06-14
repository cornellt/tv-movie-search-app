import React from 'react';
import './styles/HomeSearchBox.css';
import SearchBox from './SearchBox';
import Button from 'react-bootstrap/Button'; //sourced from https://react-bootstrap.netlify.app/components/buttons/

class HomeSearchBox extends React.Component {

    //handle Search form submission    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.searchRequest(this.props.inputText);
    }

    render() {
        return (
            <>
                <SearchBox size='lg' handleSubmit={this.handleSubmit} onSearchBoxChange={this.props.onSearchBoxChange} inputText={this.props.inputText} />
                <Button variant='secondary' onClick={this.handleSubmit} className='m-2'>Search</Button>
            </>
        );
    }
}

export default HomeSearchBox;