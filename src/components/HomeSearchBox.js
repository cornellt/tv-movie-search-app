import React from 'react';
import './styles/HomeSearchBox.css';
import Button from 'react-bootstrap/Button'; //sourced from https://react-bootstrap.netlify.app/components/buttons/
import Form from 'react-bootstrap/Form'; //sourced from https://react-bootstrap.netlify.app/components/forms/

class HomeSearchBox extends React.Component {
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

    render() {
        return (
            <Form className='search' onSubmit={this.handleSubmit}>
                <Form.Control className='border border-secondary text-center' size='lg' type='text' placeholder='Search for a TV show, Movie, or Actor' onChange={this.handleChange} value={this.state.text} />
                <Button variant='secondary' onClick={this.handleSubmit} className='m-2'>Search</Button>
            </Form>
        );
    }
}

export default HomeSearchBox;