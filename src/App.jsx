// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Home from './components/Home'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <div>
        <Home/>
        <AboutMe/>
      </div>
    </div>
  )
}

export default App