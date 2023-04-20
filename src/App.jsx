
import Home from './components/pages/home/Home';
import About from './components/pages/home/About';
import { Route, Routes } from 'react-router';

function App() {


  return (
    <div className="">
     
    
      
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
     </Routes>
      
      

    </div>
  )
}

export default App
