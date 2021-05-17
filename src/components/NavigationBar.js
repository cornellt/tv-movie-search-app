import React from 'react';
import './styles/NavigationBar.css';
import Nav from 'react-bootstrap/Nav' //sourced from https://react-bootstrap.netlify.app/components/navs/
import Navbar from 'react-bootstrap/Navbar' //sourced from https://react-bootstrap.netlify.app/components/navbar/
import Button from 'react-bootstrap/Button'; //sourced from https://react-bootstrap.netlify.app/components/buttons/
import Form from 'react-bootstrap/Form'; //sourced from https://react-bootstrap.netlify.app/components/forms/
import FormControl from 'react-bootstrap/FormControl' //sourced from https://react-bootstrap.netlify.app/components/forms/

class NavigationBar extends React.Component {
    state = {
        text: ''
    }

    //handle input text-box value changing
    handleChange = (input) => {
        this.setState({
            text: input.target.value
        });
    }

    //handle Search form submission
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.searchRequest(this.state.text);
    }

    //Navbar component sourced from react-bootstrap
    render() {
        return (
            <Navbar fixed='top' bg='dark' variant='dark' className='mb-3'>
                <Navbar.Brand className='home-button' onClick={this.props.returnToHomePage}>TV & Movie Searching App</Navbar.Brand>
                <Nav className='mr-auto'>
                </Nav>
                <Form inline onSubmit={this.handleSubmit}>
                    <FormControl type='text' placeholder='Search for a TV show, Movie, or Actor' htmlSize='36' className='mr-sm-1 text-center' onChange={this.handleChange} value={this.state.text} />
                    <Button variant='outline-secondary' onClick={this.handleSubmit}>Search</Button>
                </Form>
            </Navbar >
        );
    }
}

export default NavigationBar;