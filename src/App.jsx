import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './component/Signup'
import SignIn from './component/SignIn'
import HomePage from './component/ProfilePage'
import UsersList from './component/TotalResisteredpeople'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element ={<SignIn/>} />
        <Route path="/home" element ={<HomePage/>} />
        <Route path="/userslist" element={<UsersList />} />

      </Routes>
    
     
    </Router>
  )
 
}

function Counter(){
  let [count, Setcount]=useState(0)

  if (count >10) {
    Setcount(0)
  }

  return (
    <div>
      <h1> This is your counter App !</h1>
      <p> Count : {count}</p>
      <button onClick={()=> Setcount(count +1)}> Add for +1 </button>

    </div>
  )
}

export default App
