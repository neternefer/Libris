import React, { Component } from 'react'
import SearchQuery from './SearchQuery'
import SearchResult from './SearchResult'

class Search extends Component {
    state = {
        search: ''
    }

    handleChange = (e) => {
        this.setState(() => ({
            search: e.target.value
        }))
    }

    render() {
        return (
            <div className="search-books">
                <SearchQuery className="search-books-bar" handleChange={this.handleChange}/>
                <SearchResult className="search-books-results" books={this.props.books} search={this.state.search}/>
            </div>
        )
    }
}

export default Search