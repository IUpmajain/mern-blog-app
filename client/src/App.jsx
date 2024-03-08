import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Blogs from './pages/Blogs'
import CreateBlog from './pages/CreateBlog'
// import Modifyblog from './pages/Modifyblog'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Blogs/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        {/* <Route path='/modifyblogs/:id' element={<Modifyblog/>}/> */}
        <Route path='/createblogs' element={<CreateBlog/>}/>
      </Routes>
    </Router>
  )
}

export default App
