import { useEffect, useState } from "react";
import CitiesContext from "./CitiesContext";


const BASE_URL = "http://localhost:8000"


// eslint-disable-next-line react/prop-types
function CitiesProvider({children}){
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [currentCity, setCurrentCity] = useState({})

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

  async function getCity(id){
      setIsLoading(true)
      try {
        const res = await fetch(`${BASE_URL}/cities/${id}`)
        const data = await res.json()
        setCurrentCity(data)
      } catch (error) {
        console.error(error)
      }finally{
        setIsLoading(false)
      }
  }
  
  return(
    <CitiesContext.Provider value={{cities, isLoading, currentCity, getCity}}>
        {children}
    </CitiesContext.Provider>
  )
}
export {CitiesProvider}