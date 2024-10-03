import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from "react";
import './App.css'
import Home from './components/Home'
import BookDetails from './components/BookDetails'
import Nav from './components/Nav'
import BookForm from './components/BookForm'
import BookEdit from './components/BookEdit'

function App() {
  const [book, setBook] = useState ([]);

  return (
    <>
      <BrowserRouter>
        <Nav book={book}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/books/:id/details' element={<BookDetails book={book} setBook={setBook}/>}/>
          <Route path='/books/create' element={<BookForm/>}/>
          <Route path='/books/:id/edit' element={<BookEdit book={book} setBook={setBook}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
