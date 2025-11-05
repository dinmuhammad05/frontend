import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import News from './pages/News'
import Blog from './pages/Blog'
import NotFound from './pages/NotFound'
import Layout from './components/Layout'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App