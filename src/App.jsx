import React from 'react'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import ThemeButton from './components/ThemeButton'
import { NewsProvider } from './Context/news/NewsContext'

const App = () => {
  return (
    <NewsProvider>

      <Navbar/>
      
      <Home/>

      <ThemeButton/>
     

    </NewsProvider>
  )
}

export default App