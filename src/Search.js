import React, { Component } from 'react'

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
            <input value={this.state.search} onChange={this.handleChange}></input>
        )
    }
}

export default Search