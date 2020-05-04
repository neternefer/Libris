import React, { Component } from 'react'

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