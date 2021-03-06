import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

// This component list out the different shelf options 
class BookList extends React.Component {
	render() {
		const books = this.props.books
		const shelves = [
		   {
		   	id: 'currentlyReading',
		   	title: 'Currently Reading',
		   	books: books.filter((book) => book.shelf === 'currentlyReading' )
		   },
		   {
		   	id: 'wantToRead',
		   	title: 'Want to Read',
		   	books: books.filter((book) => book.shelf === 'wantToRead' )
		   },
		   {
		   	id: 'read',
		   	title: 'Read',
		   	books: books.filter((book) => book.shelf === 'read' )
		   }
		]

		return (
			<div className="list-books">
			   <div className="list-books-title">
			      <h1>My Reads</h1>
			   </div>
			   <div className="list-books-content">
			   {shelves.map((shelf) => (
	       	      <BookShelf key={shelf.id} books={shelf.books}
			       title={shelf.title} updateBookShelf={this.props.updateBookShelf} />
			    ))}
			   </div>
			   <div className="open-search">
			      <Link to='/myreads_search'>Add a book</Link>
			   </div>
			   </div>
	    )
	}
}


export default BookList