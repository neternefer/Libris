import React, { Component } from 'react'
import Book from './Book'

/**<Shelf name={Object.keys(shelf)}
                            header={Object.values(shelf)}
                            books={this.state.books}
                            update={this.updateBooks}/> */

class Shelf extends Component {
    populateShelf = (shelf) => {
        const shelfContent = this.props.books.filter((b) => (
            b.shelf === shelf
        ))
        return shelfContent
    }

    render() {
        const { shelf, shelfName } = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfName}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.populateShelf(shelf[0]).map((book) => (
                            <li key={book.id}>
                                <Book book={book} rearrangeBooks={this.props.rearrangeBooks}
                                books={this.props.books}
                            />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Shelf