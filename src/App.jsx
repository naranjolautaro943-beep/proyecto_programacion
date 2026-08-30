import Footer from './Components/Cards/Footer/Footer'
import Sidebar from './Components/Cards/Sidebar/Sidebar'
import Main from './Components/main/Main'
import { useState } from 'react'
import Header from './Components/Cards/Header/Header'
function App() {
  const [abierto, setAbierto] = useState(false);
  return (
    <>
    <Header/>
    <Sidebar abierto={abierto} setAbierto={setAbierto}/>
    <Main  abierto={abierto} />
    <Footer/>
    </>

  )
}

export default App
