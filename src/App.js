import React from 'react'
import './App.css'
import * as BooksApi from './BooksAPI'
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

    componentDidMount(){
        BooksApi.getAll()
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
                        {this.shelves.map((shelf, index) => (
                            <Shelf key={index} name={Object.keys(shelf)}
                            header={Object.values(shelf)}
                            books={this.state.books}
                            update={this.updateBooks}/>
                        ))}
                    </div>
                    <div className="open-search">
                        <button>Add a book</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default BooksApp
