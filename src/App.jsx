import Footer from './Components/Cards/Footer/Footer'
import Navbar from './Components/Cards/Navbar/Navbar'
import Sidebar from './Components/Cards/Sidebar/Sidebar'
import Main from './Components/main/Main'
import { useState } from 'react'

function App() {
  const [abierto, setAbierto] = useState(false);
  return (
    <>
    <Navbar/>
    <Sidebar/>
    <Main  abierto={abierto} />
    <Footer/>
    </>

  )
}

export default App
