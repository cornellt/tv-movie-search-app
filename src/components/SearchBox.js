import React from 'react';
import './styles/SearchBox.css';
import Form from 'react-bootstrap/Form'; //sourced from https://react-bootstrap.netlify.app/components/forms/

export default function SearchBox(props) {
    //handle input text-box value changing
    const handleChange = (input) => { props.onSearchBoxChange(input.target.value); }

    return (
        <Form onSubmit={props.handleSubmit}>
            <Form.Control className='border border-secondary text-center' size={props.size} htmlSize='36' type='text' placeholder='Search for a TV show, Movie, or Actor' onChange={handleChange} value={props.inputText} />
        </Form>
    );
}