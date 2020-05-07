import React from 'react'
import './App.css'
import * as BooksApi from './BooksAPI'
import { Route, Link } from 'react-router-dom'
import Shelf from './Shelf'
import Search from './Search'


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
                    <Route exact path='/' render={() => (
                        <div className="list-books-content">
                            {this.shelves.map((shelf, index) => (
                                <Shelf key={index} name={Object.keys(shelf)}
                                header={Object.values(shelf)}
                                books={this.state.books}
                                update={this.updateBooks}/>
                            ))}
                            <Link to="/search" className="open-search">
                            <button>Add a book</button></Link>
                        </div>
                    )}/>
                    <Route exact path='/search' render={() => (
                        <Search books={this.state.books}
                        update={this.updateBooks}/>
                    )}/>
                </div>
            </div>
        )
    }
}

export default BooksApp
