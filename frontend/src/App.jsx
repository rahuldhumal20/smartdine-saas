import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"

import MenuPage from "./pages/MenuPage"
import CartPage from "./pages/CartPage"

import AdminDashboard from "./admin/AdminDashboard"
import AddCategory from "./admin/AddCategory"
import AddMenuItem from "./admin/AddMenuItem"
import MenuList from "./admin/MenuList"
import AdminLogin from "./admin/AdminLogin"

import KitchenDashboard from "./kitchen/KitchenDashboard"
import SuperAdminLogin from "./superadmin/SuperAdminLogin"
import SuperAdminDashboard from "./superadmin/SuperAdminDashboard"
import CreateHotel from "./superadmin/CreateHotel"
import ViewHotels from "./superadmin/ViewHotels"

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <div className="container mt-4">

        <Routes>

          {/* PUBLIC CUSTOMER ROUTES */}

          <Route path="/table/:hotelId/:tableNumber" element={<MenuPage />} />
          <Route path="/cart" element={<CartPage />} />


          {/* LOGIN ROUTES */}

          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/superadmin-login" element={<SuperAdminLogin />} />


          {/* ADMIN ROUTES */}

          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/add-category" element={<AddCategory />} />
          <Route path="/admin/add-item" element={<AddMenuItem />} />
          <Route path="/admin/menu" element={<MenuList />} />


          {/* KITCHEN ROUTE */}

          <Route path="/kitchen" element={<KitchenDashboard />} />


          {/* TEMP PLACEHOLDER FOR SUPER ADMIN DASHBOARD */}

          <Route path="/superadmin" element={<SuperAdminDashboard />} />

          <Route path="/superadmin/create-hotel" element={<CreateHotel />} />

          <Route path="/superadmin/hotels" element={<ViewHotels />} />

        </Routes>

      </div>

    </BrowserRouter>

  )

}

export default App