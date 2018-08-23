import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'
import '../App.css'

/* This component is for the search page which allows user to search
* by author or title
*/ 
class SearchPage extends React.Component {
	    static PropTypes = {
	    books: PropTypes.array.isRequired,
	    onStateChange: PropTypes.func.isRequired	
	}
    
    state = {
    	query: '',
    	books: []
    }

    updateQuery = (query) => {
    this.setState({ query: query, books: [] })
    if (query){
      BooksAPI.search(query, 50).then((response) => {
        if (Array.isArray(response)){
          this.updateBooks(response)
        }
      })
    }
  }

  updateBooks = (searchPage) => {
    let bookIdWithShelf = {}
    this.props.shelfBooks.forEach((shelfBook) => bookIdWithShelf[shelfBook.id] = shelfBook.shelf)
    searchPage.forEach((book) => book.shelf = bookIdWithShelf[book.id] || 'none')
    this.setState({ books: searchPage })
  }

render() {
	return (
    <div className="search-books">
       <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
             <input 
                type="text" 
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={(event) => this.updateQuery(event.target.value)} 
             />
          </div>
       </div>
       <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map((book) => (
              <li key={book.id}>
                <Book
                  id={book.id}
                  shelf={book.shelf}
                  title={book.title}
                  authors={book.authors}
                  coverLink={book.imageLinks && book.imageLinks.smallThumbnail}
                  updateBookShelf={this.props.updateBookShelf}
                />
              </li>
            ))}
          </ol>
        </div>
    </div>
       )
    }
}
export default SearchPage
