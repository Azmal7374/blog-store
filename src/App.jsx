import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import QuestionAndAnswer from './components/QuestionAndAnswer/QuestionAndAnswer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Nav></Nav>
        <Home></Home>

        <QuestionAndAnswer></QuestionAndAnswer>
        </div>
  )
}

export default App
