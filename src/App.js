import React from 'react'
import NewsList from './components/NewsList'
import SearchForm from './components/SearchForm'
import Navbar from './components/Navbar'
import CardSlider from './components/CardSlider'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
<div className='App'>
  <Navbar/>
  <CardSlider/>
  <NewsList/>
</div>
   
  )
}

export default App
