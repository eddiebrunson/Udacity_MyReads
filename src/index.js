import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// Update this to BrowserRouter
// BrowserRouter listens to changes in URL
// Makes sure that the correct screen shows up
// Creates a history object 
// ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render( 
       <BrowserRouter><App /></BrowserRouter>,
       document.getElementById('root'))