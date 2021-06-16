import React from 'react';
import './styles/NavigationBar.css';
import SearchBox from './SearchBox';
import Nav from 'react-bootstrap/Nav' //sourced from https://react-bootstrap.netlify.app/components/navs/
import Navbar from 'react-bootstrap/Navbar' //sourced from https://react-bootstrap.netlify.app/components/navbar/
import Button from 'react-bootstrap/Button'; //sourced from https://react-bootstrap.netlify.app/components/buttons/

export default function NavigationBar(props) {
    //handle Search form submission    
    const handleSubmit = (event) => {
        event.preventDefault();
        props.searchRequest(props.inputText);
    }

    //Navbar component sourced from react-bootstrap
    return (
        <Navbar fixed='top' bg='dark' variant='dark' className='mb-3'>
            <Navbar.Brand className='home-button' onClick={props.returnToHomePage}>Home</Navbar.Brand>
            <Nav className='mr-auto'>
            </Nav>
            <SearchBox size='md' handleSubmit={handleSubmit} onSearchBoxChange={props.onSearchBoxChange} inputText={props.inputText} />
            <Button className='mx-2' variant='outline-secondary' onClick={handleSubmit}>Search</Button>
        </Navbar >
    );
}