import React from 'react';
import Form from 'react-bootstrap/Form'; //sourced from https://react-bootstrap.netlify.app/components/forms/

class SearchBox extends React.Component {
    //handle input text-box value changing
    handleChange = (input) => {
        this.props.onSearchBoxChange(input.target.value);
    }

    render() {
        return (
            <Form onSubmit={this.props.handleSubmit}>
                <Form.Control className='border border-secondary text-center' size={this.props.size} htmlSize='36' type='text' placeholder='Search for a TV show, Movie, or Actor' onChange={this.handleChange} value={this.props.inputText} />
            </Form>
        );
    }
}

export default SearchBox;