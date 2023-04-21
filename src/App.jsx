import Home from './components/pages/home/Home';
import { Route, Routes } from 'react-router';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import LogIn from './components/pages/Authentication/Login';
import Register from './components/pages/Authentication/Register';


function App() {
  return (
    <div className="">
     
     <Navbar/>
      
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/login' element={<LogIn/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
     </Routes>
      <Footer/>
      

    </div>
  )
}

export default App
