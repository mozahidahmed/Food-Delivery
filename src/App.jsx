import Home from './components/pages/home/Home';
import { Route, Routes } from 'react-router';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';


function App() {
  return (
    <div className="">
     
     <Navbar/>
      
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
     </Routes>
      <Footer/>
      

    </div>
  )
}

export default App
