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
                <SearchQuery update={this.props.update} handleChange={this.handleChange}/>
                <SearchResult className="search-books-results" update={this.props.update} books={this.props.books} search={this.state.search}/>
            </div>
        )
    }
}

export default Search