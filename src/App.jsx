import Navbar from './components/Navbar'
// import {Posts} from ii
import { Posts }from "./Pages/Posts"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './Pages/Home'

function App() {
  
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/post" element={<Posts/>}/>

        
      </Routes>
    </Router>
    
    {/* <h1 className='text-2xl text-blue-500 bg-yellow-600'>Hello World</h1> */}
    </>
  )
}

export default App