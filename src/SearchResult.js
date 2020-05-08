import React, { Component } from 'react'
import ReactDOM from "react-dom"
import Book from './Book'

class SearchResult extends Component {
    properties = ['title', 'subtitle', 'authors','categories', 'description']

    render() {
        const { books, search } = this.props;
        return (
            <ol className="books-grid">
                {search !== ''
                ? books.map((book) => {
                    const filtered = Object.entries(book).filter(([key, value]) => {
                        return this.properties.includes(key) && (typeof value === 'string'
                            || typeof value === 'object')
                            && value.toString().toLowerCase().includes(search.toLowerCase())
                    })
                    if(filtered.length !== 0) {
                        for(const fbook in filtered) {
                            return (
                                <li key={book.id}>
                                    <Book book={book} update={this.props.update} books={books}/>
                                </li>
                            )
                        }
                    }
                })
                : (<h3>You may browse our collection and group your books by shelf.
                    If no records are fund, please consult our librarian.
                </h3>)}
            </ol>
        )
    }
}

export default SearchResult