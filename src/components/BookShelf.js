import React from 'react'
import Book from './Book'

function BookShelf (props) {
  return (
     <div className="bookshelf">
       <h2 className="bookshelf-title">{props.title}</h2>
	        <div className="bookshelf-books">
	           <ol className="books-grid">
	           {props.books.map((book)=> (
	           	  <li key={book.id}>
	           	     <Book
	           	        id={book.id}
	           	        shelf={book.shelf}
	           	        title={book.title}
	           	        authors={book.authors}
	           	        coverLink={book.imageLinks && book.imageLinks.smallThumbnail}
	           	        updateBookShelf={props.updateBookShelf}
	           	     />
	           	  </li>
	             ))}
	           </ol>
	         </div>
	         </div>
  	)
}

export default BookShelf