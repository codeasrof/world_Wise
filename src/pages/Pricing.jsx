import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Product from "./Product";

export default function Pricing() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/product" element={<Product/>}/>
                <Route path="/" element={<HomePage/>} />
                <Route path="/pricing" element={<Pricing/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}
