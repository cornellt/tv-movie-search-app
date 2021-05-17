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
                    <div className='attribution'>This product uses the <a className='tmdb-link' href='https://www.themoviedb.org/documentation/api' rel='noreferrer' target='_blank'>TMDb API</a> but is not endorsed or certified by TMDb.</div>
                </Container>
            </Container>
        </>
    );
}

export default HomePage;