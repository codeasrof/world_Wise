import { BrowserRouter, Routes, Route } from "react-router-dom"
import Product from "./pages/Product"
import Pricing from "./pages/Pricing"
import PageNotFound from "./pages/PageNotFound"
import AppLayout from "./pages/AppLayout"
import Login from "./pages/Login"
import CityList from "./components/CityList"
import Homepage from "./pages/Homepage"

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="   product" element={<Product/>}/>
        <Route path="/" element={<Homepage/>} />
        <Route path="pricing" element={<Pricing/>} />
        <Route path="product" element={<Product/>} />
        <Route path="app" element={<AppLayout/>}>

          <Route index element={<CityList/>}/>
          <Route path="cities" element={<CityList/>} />
          <Route path="countries" element={<p>List of countries</p>} />
          <Route path="form" element={<p>List of form</p>} />
          
        </Route>
        <Route path="*" element={<PageNotFound/>} />
        <Route path="login" element={<Login/>} />
    </Routes>
</BrowserRouter>
  )
}
