import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/layouts/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <button className="btn">Button</button>
    </>
  )
}

export default App
