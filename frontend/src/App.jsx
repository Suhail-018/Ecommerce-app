import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Routes>

        <Route paths='/' element={<Home/>}/>
        <Route paths='/collection' element={<Collection/>}/>
        <Route paths='/about' element={<About/>}/>
        <Route paths='/contact' element={<Contact/>}/>
        <Route paths='/product/:productId' element={<Product/>}/>
        <Route paths='/cart' element={<Cart/>}/>
        <Route paths='/login' element={<Login/>}/>
        <Route paths='/place-order' element={<PlaceOrder/>}/>
        <Route paths='/orders' element={<Orders/>}/>
        
      </Routes>
      
    </div>
  )
}

export default App

