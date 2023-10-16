/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register.jsx'
import Cart from './pages/Cart/Cart.jsx'
import PrivateRoute from './pages/PrivateRoute/PrivateRoute.jsx'
import { Provider } from 'react-redux'
import store from './store.js'
import UserProfile from './pages/Profile/UserProfile.jsx'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AdminMain from './pages/Admin/AdminMain.jsx'
import AdminLogin from './pages/Admin/AdminLogin/AdminLogin.jsx'
import AdminRegister from './pages/Admin/AdminRegister/AdminRegister.jsx'
import PrivateAdminRoute from './pages/PrivateRoute/PrivateAdminRoute.jsx'
import DemoProduct from './pages/demo/DemoProduct.jsx'
import ProductPhone from './pages/ProdutsPage/Electronics/Phone/ProductPhone.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/register" element={<AdminRegister />} />
      <Route path="/demo/product" element={<DemoProduct />} />
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<UserProfile />} />
      </Route>
      <Route path="" element={<PrivateAdminRoute />}>
        <Route path="/admin" element={<AdminMain />} />
      </Route>
      <Route
        path="/products/electronics/phone/:brand"
        element={<ProductPhone />}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
)
