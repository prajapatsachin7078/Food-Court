import './App.css'
import { Outlet } from 'react-router-dom'
import {Header} from "./Components/Header"
import Footer from "./Components/Footer"
function App() {

  return (
    <div className="container-fluid">
            <Header />
            <Outlet />
            <Footer />

    </div>
  )
}



export default App
