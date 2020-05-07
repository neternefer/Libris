import React, { Component } from 'react'
import SearchQuery from './SearchQuery'
import SearchResult from './SearchResult'

class Search extends Component {
    state = {
        search: ''
    }

    handleChange = (e) => {
        e.persist()
        this.setState(() => ({
            search: e.target.value
        }))
    }

    render() {
        return (
            <div className="search-books">
                <SearchQuery className="search-books-bar" update={this.updateBooks} handleChange={this.handleChange}/>
                <SearchResult className="search-books-results" update={this.updateBooks} books={this.props.books} search={this.state.search}/>
            </div>
        )
    }
}

export default Search