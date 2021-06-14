import React from 'react';
import './styles/App.css';
import axios from 'axios';
import NavigationBar from './NavigationBar'
import HomePage from './HomePage';
import SearchResultsPage from './SearchResultsPage';

const SECRET_API_KEY = '8aaeb5fa2472dd850f957c983d0bb2e1';
const API_BASE_URL = 'https://api.themoviedb.org/3/';

class App extends React.Component {
  state = {
    isShowingResults: false,
    searchData: {},
    searchBoxInput: ''
  }

  //handler function for changing input in search box, either on homepage or on the navbar
  handleChangeSearchInput = (input) => {
    this.setState({ searchBoxInput: input });
  }

  //handler function for "TV & Movie Searching App" link on NavigationBar; returns to HomePage
  returnToHomePage = () => {
    this.setState({
      isShowingResults: false,
      searchData: {}
    });
  }

  //1st AJAX Request: fetch array of search results based on user-provided query string
  searchRequest = async (query) => {
    this.returnToHomePage(); //always return to home page before processing search query to ensure NavigationBar search box behaves as expected

    if (query !== '') { //make AJAX request only if the query is not empty
      this.setState({ searchBoxInput: '' });
      const searchRequestUrl = API_BASE_URL + 'search/multi?api_key=' + SECRET_API_KEY + '&language=en-US&query=' + query + '&page=1&include_adult=false';

      try {
        const response = await axios.get(searchRequestUrl);

        this.setState({
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
  displayPage() {
    if (this.state.isShowingResults)
      return <SearchResultsPage searchData={this.state.searchData} />;
    else
      return <HomePage searchRequest={this.searchRequest} onSearchBoxChange={this.handleChangeSearchInput} inputText={this.state.searchBoxInput} />;
  }

  render() {
    return (
      <>
        <NavigationBar searchRequest={this.searchRequest} returnToHomePage={this.returnToHomePage} onSearchBoxChange={this.handleChangeSearchInput} inputText={this.state.searchBoxInput} />
        {this.displayPage()}
      </>
    );
  }
}

export default App;