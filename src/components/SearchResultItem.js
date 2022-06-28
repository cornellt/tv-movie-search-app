import React from 'react';
import './styles/SearchResultItem.css';
import ListGroup from 'react-bootstrap/ListGroup'; //sourced from https://react-bootstrap.netlify.app/components/list-group/
import Image from 'react-bootstrap/Image'; //sourced from https://react-bootstrap.netlify.app/components/images/
import Stack from 'react-bootstrap/Stack'
import { Film, Tv, PersonFill } from 'react-bootstrap-icons';

const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
const PLACEHOLDER_POSTER_URL = 'https://i2.wp.com/www.theatrecr.org/wp-content/uploads/2016/01/poster-placeholder.png?ssl=1'; //poster placeholder sourced from https://www.theatrecr.org/poster-placeholder/

export default function SearchResultItem(props) {
    //handle expanding a search result item
    const handleClick = () => props.expandResult(props.data);

    //return formatted String for each media_type
    function resultType() {
        switch(props.data.media_type) {
            case 'movie':
                return <Film/>;
            case 'tv':
                return <Tv/>;
            case 'person':
                return <PersonFill/>;
            default:
        }
    }

    //build URL to access movie/tv poster or person portrait
    function buildPosterUrl() {
        const result = props.data;
        const resultType = props.data.media_type;
        const resultPosterPath = ((resultType === 'movie' || resultType === 'tv') ? result.poster_path : result.profile_path);

        //poster placeholder sourced from https://www.theatrecr.org/poster-placeholder/
        return (resultPosterPath) ? (POSTER_BASE_URL + resultPosterPath) : PLACEHOLDER_POSTER_URL;
    }

    //build URL for a Person's Popular Contribution based on provided poster_path
    function buildContributionPosterUrl(item) {
        const resultType = item.data.media_type;
        const resultPosterPath = ((resultType === 'movie' || resultType === 'tv') ? item.data.poster_path : item.data.profile_path);

        //poster placeholder sourced from https://www.theatrecr.org/poster-placeholder/
        return (resultPosterPath) ? (POSTER_BASE_URL + resultPosterPath) : PLACEHOLDER_POSTER_URL;
    }

    function fetchTitleFromMediaType(item) {
        switch(item.media_type) {
            case 'movie':
                return item.title;
            case 'tv':
                return item.name;
            default:
        }
    }

    //build contributions array for 'Person' search result item
    function buildContributionList(result) {
        return result.known_for.map((item) => {
            return {
                title: fetchTitleFromMediaType(item),
                data: item
            }
        });
    }

    //build JSX object based on media_type of search result item
    function buildJsx() {
        const result = props.data;
        const resultType = result.media_type;

        const resultTitle = (resultType === 'movie') ? result.title : result.name;

        const resultRelease = (resultType === 'movie' || resultType === 'tv') ? (resultType === 'movie' ? result.release_date : result.first_air_date) : {};
        const formattedReleaseDate = props.formatDate(resultRelease);

        if (resultType === 'movie' || resultType === 'tv') {
            return (
                <>
                    <ListGroup.Item className='w-25'>
                        <Stack gap={5}>
                            <div>
                                <span className='text-muted'>Title</span>
                                <hr />
                                <em>{resultTitle}</em>
                            </div>
                            <div>
                                <span className='text-muted'>Release Date</span>
                                <hr />
                                {formattedReleaseDate}
                            </div>
                        </Stack>
                    </ListGroup.Item>
                    <ListGroup.Item className='w-50'><span className='text-muted'>Overview</span><hr />{result.overview}</ListGroup.Item>
                </>
            );
        }
        else if (resultType === 'person') {
            const popularContributions = buildContributionList(result);
            let contributionsJsx;

            if (popularContributions.length > 0) {
                contributionsJsx = (
                    <ListGroup.Item>
                        <span className='text-muted'>Popular Contributions</span>
                        <hr />
                        <ListGroup horizontal>
                            {popularContributions.map((item, index) =>
                                <ListGroup.Item key={index} className='d-inline-block bg-light shadow'>
                                    <div><em>{item.title}</em></div>
                                    <Image className='mx-auto known-for-poster' src={buildContributionPosterUrl(item)}></Image>
                                </ListGroup.Item>
                            )}
                        </ListGroup>
                    </ListGroup.Item>
                );
            }

            return (
                <>
                    <ListGroup.Item className='w-25'>
                        <Stack gap={5}>
                            <div>
                                <span className='text-muted'>Name</span>
                                <hr />
                                {resultTitle}
                            </div>
                            <div>
                                <span className='text-muted'>Known for</span>
                                <hr />
                                {result.known_for_department}
                            </div>
                        </Stack>
                    </ListGroup.Item>
                    {contributionsJsx}
                </>
            );
        }
    }

    return (
        <ListGroup horizontal='lg' className='m-1 p-1 list-item' onClick={handleClick}>
            <ListGroup.Item>{resultType()}</ListGroup.Item>
            <ListGroup.Item>
                <Image className='mx-auto small-poster shadow' src={buildPosterUrl()} />
            </ListGroup.Item>
            {buildJsx()}
        </ListGroup>
    );
}