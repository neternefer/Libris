import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchQuery extends Component {
    render() {
        return (
            <div className="search-books-bar">
                <Link to='/' className="close-search" />
                <input className="search-books-input-wrapper" value={this.props.search}
                 onChange={this.props.handleChange}></input>
            </div>
        )
    }
}

export default SearchQuery