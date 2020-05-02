import React, { Component } from 'react'

class Move extends Component {
    handleClick = (e) => {
        const shelf = e.target.value;
        this.props.changeShelf(e);
    }
    render() {
        return (
            <div className="book-shelf-changer">
                <select onClick={this.handleClick}>
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