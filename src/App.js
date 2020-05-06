import React from 'react'
import './App.css'
import BooksAPI from './BooksAPI'
import Shelf from './Shelf'

class BooksApp extends React.Component {
    state = {
        books: []
    }

    shelves = [
        {'currentlyReading': 'Currently Reading'},
        {'wantToRead': 'Want To Read'},
        {'read': 'Read'}
    ]

    addBooks = () => {
        BooksAPI.getAll()
        .then((data) => {
            this.setState(() => ({
                books: data
            }))
        })
    }

    updateBooks = (newBooks) => {
        this.setState(() => ({
            books: newBooks
        }))
    }

    render() {
        return (
            <div className="app">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        {this.shelves.map((shelf) => {
                            <Shelf name={Object.keys(shelf)}
                            header={Object.values(shelf)}
                            books={this.state.books}
                            update={this.updateBooks}/>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default BooksApp
