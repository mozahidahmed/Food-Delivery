import Home from './components/pages/home/Home';
import { Route, Routes } from 'react-router';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import LogIn from './components/pages/Authentication/Login';
import Register from './components/pages/Authentication/Register';
import Dashboard from './components/pages/dashboard/Dashboard';
import Welcome from './components/pages/dashboard/Welcome';
import MyOrder from './components/pages/dashboard/user/MyOrder';
import AddReview from './components/pages/dashboard/user/AddReview';
import Profile from './components/pages/dashboard/user/Profile';
import { useGetRestaurantsQuery } from './features/api/apiSlice';
import Loading from './components/shared/Loading';
import RestaurantsFood from './components/pages/orderNow/RestaurantsFood';


function App() {

  const {data,isLoading,isSuccess}=useGetRestaurantsQuery()
  if(isLoading){
    <Loading/>
  }
  if(isSuccess){
      console.log(data);
  }

  return (
    <div className="">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/restaurantfood/:id" element={<RestaurantsFood />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>

        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Welcome></Welcome>}></Route>
          <Route path="profile" element={<Profile></Profile>}></Route>
          <Route path="myorder" element={<MyOrder></MyOrder>}></Route>
          <Route path="addreview" element={<AddReview></AddReview>}></Route>
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App
