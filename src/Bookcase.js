import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'

class Bookcase extends Component {
    state = {
        books: []
    }

    shelves = ['currentlyReading', 'wantToRead', 'read']

    componentDidMount() {
        BooksAPI.getAll()
        .then((books) => {
          this.setState(() => ({
            books
          }))
        })
    }

    populateShelf = (shelf) => {
        const shelfContent = this.state.books.filter((b) => (
            b.shelf === shelf.shelf
        ))
        return shelfContent
    }

    render() {
        return (
            <div className="list-books-content">
                {/* {JSON.stringify(this.state.books[3])} */}
                <Shelf className="bookshelf" shelf={this.shelves[0]}
                content={this.populateShelf(this.shelves[0])}/>
                <Shelf className="bookshelf" shelf={this.shelves[1]}
                content={this.populateShelf(this.shelves[0])}/>
                <Shelf className="bookshelf" shelf={this.shelves[2]}
                content={this.populateShelf(this.shelves[0])}/>
            </div>
        )
    }
}

export default Bookcase