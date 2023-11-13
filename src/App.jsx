import { BrowserRouter, Routes, Route } from "react-router-dom"
import Product from "./pages/Product"
import HomePage from "./pages/HomePage"
import Pricing from "./pages/Pricing"
import PageNotFound from "./pages/PageNotFound"

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="   product" element={<Product/>}/>
        <Route path="/" element={<HomePage/>} />
        <Route path="pricing" element={<Pricing/>} />
        <Route path="*" element={<PageNotFound/>} />
    </Routes>
</BrowserRouter>
  )
}
