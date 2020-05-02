import React, { Component } from 'react'
import Book from './Book'

class SearchResult extends Component {
    render() {
        const { books, search } = this.props;
        return (
            <ol className="books-grid">
                {books.map((book) => {
                    if(book.title.includes(search) || book.authors.includes(search)){
                        return (
                            <li key={book.id}>
                                <Book book={book}/>
                            </li>
                        )
                    }
                })}
            </ol>
        )
    }
}

export default SearchResult