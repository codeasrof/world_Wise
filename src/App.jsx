import { BrowserRouter, Routes, Route } from "react-router-dom"
import Product from "./pages/Product"
import HomePage from "./pages/HomePage"
import Pricing from "./pages/Pricing"
import PageNotFound from "./pages/PageNotFound"
import AppLayout from "./pages/AppLayout"
import Login from "./pages/Login"

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="   product" element={<Product/>}/>
        <Route path="/" element={<HomePage/>} />
        <Route path="pricing" element={<Pricing/>} />
        <Route path="product" element={<Product/>} />
        <Route path="app" element={<AppLayout/>}>

          <Route index element={<p>List</p>}/>
          <Route path="cities" element={<p>List of cities</p>} />
          <Route path="countries" element={<p>List of countries</p>} />
          <Route path="form" element={<p>List of form</p>} />
          
        </Route>
        <Route path="*" element={<PageNotFound/>} />
        <Route path="login" element={<Login/>} />
    </Routes>
</BrowserRouter>
  )
}
