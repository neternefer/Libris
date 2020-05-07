import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchQuery extends Component {
    render() {
        return (
            <div>
                <Link to='/' className="close-search" />
                <input className="search-books-input-wrapper" value={this.state.search}
                 onChange={this.handleChange}></input>
            </div>
        )
    }
}

export default SearchQuery