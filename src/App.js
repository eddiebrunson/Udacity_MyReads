import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import BookList from './components/BookList'
import SearchPage from './components/SearchPage'
import { debounce } from 'debounce'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {books: []};
    /* limits the number of API calls and updates */
    this.search = debounce(500, this.search);
  }

/* This makes an API call to get books */
/* For performace setState from the previous state by replacing the book with updated self */

updateBookShelf = () => {
  BooksAPI.getAll().then((books) => {
    this.setState({ books })
  })
}

/* This lifecyle event handler is invoked immediately 
* after the component is mounted
*/ 
componentDidMount() {
   this.updateBookShelf()
}

/**
 * Change the bookselfs 
 * @param {object} book 
 * @param {string} shelf
 * @param {string} id
 */


/*updateBookShelf = (book, shelf) => {
  BooksAPI.update(book, shelf).then(() => {
    book.shelf = shelf;
    this.setState(state => ({
      books: state.books.filter(b => b.id !== book.id).concat([book])
    }));
  });
}*/




render() {
     return (
         <div className="app">
                  {/* Page routing  */}
            <Route exact path="/" render={() => (
                <BookList books={this.state.books}
                updateBookShelf={this.updateBookShelf} />
            )}/>
            <Route path="/myreads_search" render={() => (
               <SearchPage shelfBooks={this.state.books} updateBookShelf={this.updateBookShelf} />
            )}/>
         </div>
     )
  }
}

export default App
