import Home from './components/pages/home/Home';
import { ToastContainer } from "react-toastify";
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
import RestaurantsFood from './components/pages/orderNow/RestaurantsFood';
import BuyNow from './components/pages/orderNow/BuyNow';
import RequireAuth from './components/pages/Authentication/RequireAuth';
import Blogs from './components/pages/blog/Blogs';
import ManageFood from './components/pages/dashboard/admin/ManageFood';
import AddFood from './components/pages/dashboard/admin/AddFood';
import AllUser from './components/pages/dashboard/admin/AllUser';
import Gift from './components/pages/celebration/Gift';
import BirthDay from './components/pages/celebration/BirthDay';
import Party from './components/pages/celebration/Party';
import Drink from './components/pages/celebration/Drink';
import Lunch from './components/pages/bdl/Lunch';
import BreakFast from './components/pages/bdl/BreakFast';
import Dinner from './components/pages/bdl/Dinner';
import MorningCoffee from './components/pages/bdl/MorningCoffee';


function App() {


  return (
    <div className="">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        
        {/* celevration food  */}
        <Route path="/gift" element={<Gift />}></Route>
        <Route path="/birthday" element={<BirthDay />}></Route>
        <Route path="/party" element={<Party />}></Route>
        <Route path="/drink" element={<Drink />}></Route>
        
        {/* menu food  */}
        <Route path="/breakfast" element={<BreakFast />}></Route>
        <Route path="/lunch" element={<Lunch />}></Route>
        <Route path="/dinner" element={<Dinner />}></Route>
        <Route path="/morningcoffee" element={<MorningCoffee />}></Route>
        
        <Route
          path="/blog"
          element={
            <RequireAuth>
              <Blogs></Blogs>
            </RequireAuth>
          }
        ></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/restaurantfood/:id" element={<RestaurantsFood />}></Route>
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <BuyNow />
            </RequireAuth>
          }
        ></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>

        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Welcome></Welcome>}></Route>
          <Route path="profile" element={<Profile></Profile>}></Route>
          <Route path="myorder" element={<MyOrder></MyOrder>}></Route>
          <Route path="addreview" element={<AddReview></AddReview>}></Route>
          <Route path="managefoods" element={<ManageFood></ManageFood>}></Route>
          <Route path="addfood" element={<AddFood></AddFood>}></Route>
          <Route path="alluser" element={<AllUser></AllUser>}></Route>
        </Route>
      </Routes>

      <Footer />
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App
