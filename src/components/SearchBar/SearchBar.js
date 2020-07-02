import React from 'react';
import './SearchBar.css';
import Testing from '../App/Testing';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'most_count',
};
  /* Yelp API info that I used is here
  https://www.yelp.com/developers/documentation/v3/business_search
  */

class SearchBar extends React.Component {

  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
        let sortByOptionValue = sortByOptions[sortByOption];
        return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
  }

    render() {
      return (
        <div className="SearchBar">
          <div className="SearchBar-sort-options">
            <ul>
              {this.renderSortByOptions()};
            </ul>
          </div>
          <div className="SearchBar-fields">
            <input placeholder="Search Businesses" />
            <input placeholder="Where City & State?" />
          </div>
          <div className="SearchBar-submit" onClick={this.handleChangeMyname}>
            <a>Push me baby!</a>
          </div>
        </div>
      )
    }
};

export default SearchBar;
