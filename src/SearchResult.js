import React, { Component } from 'react'
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
                        console.log(value)
                        return this.properties.includes(key) && (typeof value === 'string'
                            || typeof value === 'object')
                            && value.toString().toLowerCase().includes(search.toLowerCase())
                    })
                    if(filtered) {
                        for(const fbook in filtered) {
                            return (
                                <li key={book.id}>
                                    <Book book={book}/>
                                </li>
                                )
                        }
                    }
                })
                : ''}
            </ol>
        )
    }
}

export default SearchResult