import React from 'react';
import './styles/HomePage.css';
import HomeSearchBox from './HomeSearchBox';
import Container from 'react-bootstrap/Container'; //sourced from https://react-bootstrap.netlify.app/layout/grid/
import Image from 'react-bootstrap/Image' //sourced from https://react-bootstrap.netlify.app/components/images/

const HomePage = props => {
    //Background image sourced from unsplash.com
    const backgroundImageUrl = 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80';

    return (
        <>
            <Image className='hero-img' src={backgroundImageUrl} />
            <Container fluid id='container'>
                <Container fluid className='w-75 search-area'>
                    <HomeSearchBox searchRequest={props.searchRequest} />
                    <p className='powered-by'>Powered by</p>
                    <Image className='powered-by-image' src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' />
                </Container>
            </Container>
        </>
    );
}

export default HomePage;