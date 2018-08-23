import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import BookList from './components/BookList'
import SearchPage from './components/SearchPage'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {books: []};
  }

/* This makes an API call to get books */
updateBookShelf = () => {
  BooksAPI.getAll().then((books) => {
    this.setState({ books })
  })
}

/* This lifecyle event handler is invoked immediately 
* after the component is mounted. 
*/
componentDidMount() {
   this.updateBookShelf()
}

  render() {
     return (
         <div className="app">
      {/* Page routing  */}
            <Route exact path="/" render={() => (
                <BookList books={this.state.books}
                updateBookShelf={this.updateBookShelf}
             />
            )}/>
          <Route path="/myreads_search" render={() => (
            <SearchPage shelfBooks={this.state.books} updateBookShelf={this.updateBookShelf} />
          )}/>
         </div>
    )
  } 
}

export default App
