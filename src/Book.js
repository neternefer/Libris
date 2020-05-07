import React, { Component } from 'react'
import Move from './Move'
import * as BooksApi from './BooksAPI'


class Book extends Component {
    state = {
        shelf: ''
    }

    changeShelf = (e) => {
        const newShelf = e.target.value;
        BooksApi.update(this.props.book, newShelf)
        .then((book) => {
            this.setState(() => ({
                shelf: book.shelf
            }))
        })
        .then(() => {
            const newBooks = this.updateBooks(this.props.book.id, newShelf)
            this.props.update(newBooks)
        })
    }

    updateBooks = (bookId, newShelf) => {
        const updatedBooks = this.props.books;
        for(const book in updatedBooks) {
            if(updatedBooks[book].id === bookId) {
                updatedBooks[book].shelf = newShelf
            }
        }
        return updatedBooks
    }

    checkProperty = (property) => {
        if(property) {
            return property
        } else {
            return ''
        }
    }

    render() {
        const { book } = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    {this.checkProperty(book.imageLinks.smallThumbnail)
                    ? <div className="book-cover" style={{width: 128, height: 193,
                        backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
                    : <div className="book-cover"></div>
                    }
                    <Move changeShelf={this.changeShelf} book={book} />
                </div>
                <div className="book-title">{this.checkProperty(book.title)}</div>
                <div className="book-authors">{this.checkProperty(book.authors.toString())}</div>
            </div>
        )
    }
}

export default Book