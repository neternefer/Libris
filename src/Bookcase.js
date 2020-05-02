import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'

class Bookcase extends Component {
    state = {
        books: []
    }

    shelves = [
        {'currentlyReading': 'Currently Reading'},
        {'wantToRead': 'Want To Read'},
        {'read': 'Read'}
    ]

    componentDidMount() {
        BooksAPI.getAll()
        .then((books) => {
          this.setState(() => ({
            books
          }))
        })
    }

    rearrangeBooks = () => {
        BooksAPI.getAll()
        .then((books) => {
            this.setState(() => ({
            books: books
        }))
    })
    }
    render() {
        return (
            <div className="list-books-content">
                {/* {JSON.stringify(this.state.books[3])} */}
                {this.shelves.map((s, index) => (
                    <Shelf key={index} shelf={Object.keys(s)}
                    shelfName={s[Object.keys(s)]}
                    books={this.state.books}
                    rearrangeBooks={this.rearrangeBooks}
                    />
                ))}
            </div>
        )
    }
}

export default Bookcase