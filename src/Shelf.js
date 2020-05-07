import React, { Component } from 'react'
import Book from './Book'


class Shelf extends Component {
    populateShelf = (name) => {
        const shelfContent = this.props.books.filter((b) => (
            b.shelf === name
        ))
        return shelfContent
    }

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.header}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.populateShelf(this.props.name[0]).map((book) => (
                            <li key={book.id}>
                                <Book book={book} books={this.props.books} update={this.props.update}/>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Shelf