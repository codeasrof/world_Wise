import { BrowserRouter, Routes, Route } from "react-router-dom"
import Product from "./pages/Product"
import Pricing from "./pages/Pricing"
import PageNotFound from "./pages/PageNotFound"
import AppLayout from "./pages/AppLayout"
import Login from "./pages/Login"
import CityList from "./components/CityList"
import Homepage from "./pages/Homepage"
import { useEffect, useState } from "react"
import CountriesList from "./components/CountriesList"

const BASE_URL = "http://localhost:8000"

export default function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchCities = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(`${BASE_URL}/cities`)
        const data = await res.json()
        setCities(data)
      } catch (error) {
        console.error(error)
      }finally{
        setIsLoading(false)
      }
    }
    fetchCities()
  },[])

  return (
    <BrowserRouter>
    <Routes>
        <Route path="   product" element={<Product/>}/>
        <Route path="/" element={<Homepage/>} />
        <Route path="pricing" element={<Pricing/>} />
        <Route path="product" element={<Product/>} />
        <Route path="app" element={<AppLayout/>}>

          <Route index element={<CityList cities={cities} isLoading={isLoading}/>}/>
          <Route path="cities" element={<CityList cities={cities} isLoading={isLoading}/>} />
          <Route path="countries" element={<CountriesList cities={cities} isLoading={isLoading}/>} />
          <Route path="form" element={<p>List of form</p>} />
          
        </Route>
        <Route path="*" element={<PageNotFound/>} />
        <Route path="login" element={<Login/>} />
    </Routes>
</BrowserRouter>
  )
}
