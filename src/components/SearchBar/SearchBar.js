  import React from 'react';
  import './SearchBar.css';

  const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'most_count',
  };

  class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        term: '',
        location: '',
        sortBy: 'best_match',
        }
      }

    getSortByClass(sortByClass) {
      if (this.sortByOption === this.state.sortBy) {
        return 'active'
      }
      return ''
    }

    handleSortByChange(sortByOption) {
      this.setState({sortBy: sortByOption})
    }

    renderSortByOptions() {
      return Object.keys(sortByOptions).map(sortByOption => {
          let sortByOptionValue = sortByOptions[sortByOption];
          return <li onClick={this.handleSortByChange.bind(this,sortByOptionValue)}classname={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>;
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
