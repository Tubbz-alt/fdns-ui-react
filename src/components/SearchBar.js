import React, { Component } from 'react';
import PropTypes from 'prop-types';

// set the prop types from predefined shapes or standard types
const propTypes = {
  query: PropTypes.string,
  onSearch: PropTypes.func
};

// set the defaults
const defaultProps = {
  query: '',
  onSearch() {}
};

// default text for the search bar
const defaultPlaceholderText = 'Search';

// define the class
class SearchBar extends Component {

  // init
  constructor(props) {
    super(props);
    this.state = {
      query: this.props.query
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // change the query state if the props changes
  componentWillReceiveProps(nextProps) {
    this.setState({
      query: nextProps.query
    });
  }

  // handle the search event
  handleSearch(event) {
    event.preventDefault();
    this.props.onSearch(this.state.query);
  }

  // change the query when the input changes
  handleChange(event) {
    this.setState({
      query: event.target.value
    });
  }

  // main render method
  render() {
    return (
      <div className="search-bar">
        <span><i className="fa fa-search" aria-hidden="true"></i></span>
        <form className="search-form" onSubmit={this.handleSearch}>
          <input 
            aria-label="Search"
            type="text" 
            placeholder={defaultPlaceholderText} 
            onChange={this.handleChange} 
            value={this.state.query} />
        </form>
      </div>
    )
  }
}

// set the props, defaults and export
SearchBar.propTypes = propTypes;
SearchBar.defaultProps = defaultProps;

export default SearchBar;