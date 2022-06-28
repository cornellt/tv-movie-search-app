import React, { useState } from 'react';
import axios from 'axios';
import './styles/App.css';
import NavigationBar from './NavigationBar';
import HomePage from './HomePage';
import SearchResultsPage from './SearchResultsPage';

const SECRET_API_KEY = '8aaeb5fa2472dd850f957c983d0bb2e1';
const API_BASE_URL = 'https://api.themoviedb.org/3/';

export default function App() {
  const [state, setState] = useState({
    isShowingResults: false,
    searchData: {}
  });

  //handler function for "TV & Movie Searching App" link on NavigationBar; returns to HomePage
  const returnToHomePage = () => {
    setState({
      isShowingResults: false,
      searchData: {}
    });
  }

  const [searchInput, setSearchInput] = useState({
    text: ''
  });

  //handler function for changing input in search box, either on homepage or on the navbar
  const handleChangeSearchInput = (input) => {
    setSearchInput({ text: input });
  }

  //1st AJAX Request: fetch array of search results based on user-provided query string
  const searchRequest = async (query) => { //arrow function used because this is a CALLBACK FUNCTION. i.e., it's passed as a prop to a rendered Component and called by that child. This impacts the context of 'this' if I don't use an arrow function.
    returnToHomePage(); //always return to home page before processing search query to ensure NavigationBar search box behaves as expected

    if (query !== '') { //make AJAX request only if the query is not empty
      setSearchInput({ text: '' });
      const searchRequestUrl = API_BASE_URL + 'search/multi?api_key=' + SECRET_API_KEY + '&language=en-US&query=' + query + '&page=1&include_adult=false';

      try {
        const response = await axios.get(searchRequestUrl);

        setState({
          isShowingResults: true,
          searchData: response.data.results
        });
      }
      catch (error) {
        console.log(error);
      }
    }
  }

  //switch between HomePage and SearchResultsPage Components
  function displayPage() {
    if (state.isShowingResults)
      return <SearchResultsPage searchData={state.searchData} />;
    else
      return <HomePage searchRequest={searchRequest} onSearchBoxChange={handleChangeSearchInput} inputText={searchInput.text} />;
  }

  return (
    <>
      <NavigationBar searchRequest={searchRequest} returnToHomePage={returnToHomePage} onSearchBoxChange={handleChangeSearchInput} inputText={searchInput.text} />
      {displayPage()}
    </>
  );
}