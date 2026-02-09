import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import UserDashboard from './pages/UserDashboard'
import AdminDashboard from './pages/AdminDashboard'
import ItemList from './Components/ItemList'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/user' element={<UserDashboard/>}>
        <Route index element={<ItemList/>}/>
        <Route path='cart' element={<h1>My Cart</h1>}/>
        <Route path='order' element={<h1>My Orders</h1>}/>
        <Route path='profile' element={<h1>Profile</h1>}/>
        <Route path='logout' element={<h1>Logout Page</h1>}/>
        </Route>
        <Route path='/admin' element={<AdminDashboard/>}/>
        
        <Route path='*' element={<h1>404 Error PAge</h1>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
