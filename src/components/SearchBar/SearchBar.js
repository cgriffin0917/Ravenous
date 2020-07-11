import React from 'react';
import './SearchBar.css';

  /* Yelp API info that I used is here
  https://www.yelp.com/developers/documentation/v3/business_search
  */

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match',
    }
    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'most_count',
    };

    }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
        let sortByOptionValue = this.sortByOptions[sortByOption];
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
