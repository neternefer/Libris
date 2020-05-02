import React from 'react'
import './App.css'
import Bookcase from './Bookcase'

class BooksApp extends React.Component {

    render() {
        return (
            <div className="app">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <Bookcase className="list-books-content" />
                </div>
            </div>
        )
    }
}

export default BooksApp
