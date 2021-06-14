import React from 'react';
import './styles/NavigationBar.css';
import SearchBox from './SearchBox';
import Nav from 'react-bootstrap/Nav' //sourced from https://react-bootstrap.netlify.app/components/navs/
import Navbar from 'react-bootstrap/Navbar' //sourced from https://react-bootstrap.netlify.app/components/navbar/
import Button from 'react-bootstrap/Button'; //sourced from https://react-bootstrap.netlify.app/components/buttons/

class NavigationBar extends React.Component {
    //handle Search form submission    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.searchRequest(this.props.inputText);
    }

    //Navbar component sourced from react-bootstrap
    render() {
        return (
            <Navbar fixed='top' bg='dark' variant='dark' className='mb-3'>
                <Navbar.Brand className='home-button' onClick={this.props.returnToHomePage}>TV & Movie Searching App</Navbar.Brand>
                <Nav className='mr-auto'>
                </Nav>

                <SearchBox size='md' handleSubmit={this.handleSubmit} onSearchBoxChange={this.props.onSearchBoxChange} inputText={this.props.inputText} />
                <Button className='mx-2' variant='outline-secondary' onClick={this.handleSubmit}>Search</Button>
            </Navbar >
        );
    }
}

export default NavigationBar;