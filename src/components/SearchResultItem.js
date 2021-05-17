import React from 'react';
import './styles/SearchResultItem.css';
import ListGroup from 'react-bootstrap/ListGroup' //sourced from https://react-bootstrap.netlify.app/components/list-group/
import Image from 'react-bootstrap/Image' //sourced from https://react-bootstrap.netlify.app/components/images/

const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
const PLACEHOLDER_POSTER_URL = 'https://i2.wp.com/www.theatrecr.org/wp-content/uploads/2016/01/poster-placeholder.png?ssl=1'; //poster placeholder sourced from https://www.theatrecr.org/poster-placeholder/

class SearchResultItem extends React.Component {
    //handle expanding a search result item
    handleClick = () => {
        this.props.expandResult(this.props.data);
    }

    //return formatted String for each media_type
    resultType() {
        const resultType = this.props.data.media_type;

        if (resultType === 'movie')
            return 'Movie';
        else if (resultType === 'tv')
            return 'TV Show';
        else if (resultType === 'person')
            return 'Person';
    }

    //build contributions array for 'Person' search result item
    buildContributionList(result) {
        let popularContributions = [];

        result.known_for.forEach((item) => {
            let contributionTitle;

            if (item.media_type === 'movie')
                contributionTitle = item.title;
            else if (item.media_type === 'tv')
                contributionTitle = item.name;

            let contribution = {
                title: contributionTitle,
                data: item
            }
            popularContributions = [...popularContributions, contribution];
        });

        return popularContributions;
    }

    //build URL to access movie/tv poster or person portrait
    buildPosterUrl() {
        const result = this.props.data;
        const resultType = this.props.data.media_type;
        const resultPosterPath = ((resultType === 'movie' || resultType === 'tv') ? result.poster_path : result.profile_path);

        //poster placeholder sourced from https://www.theatrecr.org/poster-placeholder/
        return (resultPosterPath) ? (POSTER_BASE_URL + resultPosterPath) : PLACEHOLDER_POSTER_URL;
    }

    //build URL for a Person's Popular Contribution based on provided poster_path
    buildContributionPosterUrl(item) {
        const resultType = item.data.media_type;
        const resultPosterPath = ((resultType === 'movie' || resultType === 'tv') ? item.data.poster_path : item.data.profile_path);

        //poster placeholder sourced from https://www.theatrecr.org/poster-placeholder/
        return (resultPosterPath) ? (POSTER_BASE_URL + resultPosterPath) : PLACEHOLDER_POSTER_URL;
    }

    //build JSX object based on media_type of search result item
    buildJsx() {
        const result = this.props.data;
        const resultType = result.media_type;

        let resultTitle = (resultType === 'movie') ? result.title : result.name;
        let resultRelease = (resultType === 'movie' || resultType === 'tv') ? (resultType === 'movie' ? result.release_date : result.first_air_date) : {};

        if (resultType === 'movie' || resultType === 'tv') {
            return (
                <>
                    <ListGroup.Item><em>{resultTitle}</em></ListGroup.Item>
                    <ListGroup.Item>{resultRelease}</ListGroup.Item>
                    <ListGroup.Item>{result.overview}</ListGroup.Item>
                </>
            );
        }
        else if (resultType === 'person') {
            let popularContributions = this.buildContributionList(result);

            return (
                <>
                    <ListGroup.Item>{resultTitle}</ListGroup.Item>
                    <ListGroup.Item>Known for {result.known_for_department}</ListGroup.Item>
                    <ListGroup>
                        <ListGroup.Item><u>Popular Contributions</u></ListGroup.Item>
                        <ListGroup horizontal>
                            {popularContributions.map((item, index) =>
                                <ListGroup.Item key={index} className='d-inline-block'>
                                    <div><em>{item.title}</em></div>
                                    <Image className='mx-auto known-for-poster' src={this.buildContributionPosterUrl(item)}></Image>
                                </ListGroup.Item>
                            )}
                        </ListGroup>
                    </ListGroup>
                </>
            );
        }
    }

    render() {
        return (
            <ListGroup horizontal='md' className='m-1 p-1 list-item mx-auto' onClick={this.handleClick}>
                <ListGroup.Item>{this.resultType()}</ListGroup.Item>
                <ListGroup.Item>
                    <Image className='mx-auto small-poster' src={this.buildPosterUrl()} />
                </ListGroup.Item>
                {this.buildJsx()}
            </ListGroup>
        );
    }
}

export default SearchResultItem;