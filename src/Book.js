import React, { Component } from 'react'
import Move from './Move'
import * as BooksApi from './BooksAPI'

/** <Book book={book} update={this.props.update} */
class Book extends Component {
    state = {
        shelf: ''
    }

    changeShelf = (e) => {
        BooksApi.update(this.props.book, e.target.value)
        .then((book) => {
            this.setState(() => ({
                shelf: book.shelf
            }))
        })
       //update func should go here
    }

    render() {
        const { book } = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover"
                        style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}>
                    </div>
                    <Move changeShelf={this.changeShelf} book={book} />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.autors}</div>
            </div>
        )
    }
}

export default Book