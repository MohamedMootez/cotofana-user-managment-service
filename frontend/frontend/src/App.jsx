
import {BrowserRouter,Routes,Route, } from 'react-router-dom'

import './App.css'
import Register from './components/Register'
function App() {

  return (
    <>
<BrowserRouter>
<Routes>
  <Route path="/register" element={<div className='w-screen h-screen  flex flex-col justify-center items-center bg-amber-100 '><Register/></div>}/>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
