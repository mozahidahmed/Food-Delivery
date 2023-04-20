import Home from './components/pages/home/Home';
import { Route, Routes } from 'react-router';
import Navbar from './components/shared/Navbar';


function App() {
  return (
    <div className="bg-red-500">
     
     <Navbar/>
      
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
     </Routes>
      
      

    </div>
  )
}

export default App
