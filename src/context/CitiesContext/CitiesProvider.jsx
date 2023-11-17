import { useEffect, useState } from "react";
import CitiesContext from "./CitiesContext";


const BASE_URL = "http://localhost:8000"


// eslint-disable-next-line react/prop-types
function CitiesProvider({children}){
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

  return(
    <CitiesContext.Provider value={{cities, isLoading}}>
        {children}
    </CitiesContext.Provider>
  )
}
export {CitiesProvider}