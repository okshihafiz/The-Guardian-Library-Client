import "./App.css";
import Home from "./Pages/Home/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoreBook from "./StoreBook/StoreBook/StoreBook";
import Login from "./Login/Login/Login";
import Register from "./Login/Register/Register";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import PrivateRoute from "./Login/PrivateRoute/PrivateRoute";
import DashBoard from "./Pages/Home/DashBoard/DashBoard/DashBoard";
import DashboardHome from "./Pages/Home/DashBoard/DashboardHome/DashboardHome";
import MakeAdmin from "./Pages/Home/DashBoard/MakeAdmin/MakeAdmin";
import AddTeacher from "./Pages/Home/DashBoard/AddTeacher/AddTeacher";
import AdminRoute from "./Login/AdminRoute/AdminRoute";
import ContactArea from "./Pages/Home/ContactArea/ContactArea";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/storebook" element={
          <PrivateRoute>
          <StoreBook />
          </PrivateRoute>
          } />

          <Route path="/dashboard" element={
          <PrivateRoute>
          <DashBoard/>
          </PrivateRoute>}>
          <Route path="/dashboard" element={<DashboardHome/>} />
          <Route path="/dashboard/makeAdmin" element={
            <AdminRoute><MakeAdmin/></AdminRoute>} />
          <Route path="/dashboard/addTeacher" element={
            <AdminRoute><AddTeacher/></AdminRoute>
          } />

          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<ContactArea />} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
