import React, { Component } from 'react'

class Move extends Component {
    handleClick = (e) => {
        this.props.changeShelf(e);
    }

    render() {
        return (
            <div className="book-shelf-changer">
                <select value={this.props.book.shelf} onChange={this.handleClick}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default Move