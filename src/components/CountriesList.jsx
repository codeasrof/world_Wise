/* eslint-disable react/prop-types */
import CountryItem from "./CountryItem"
import styles from "./CountriesList.module.css"
import Spinner from "./Spinner"
import Message from "./Message"
import { useCities } from "../context/CitiesContext/useCities"

export default function CountriesList() {
  const {cities, isLoading} = useCities()
  if(isLoading) return <Spinner/>

  if(!cities.length) return <Message message="Add your first city by clicking on a city on the map"/>
  
  const countries = cities.reduce((accumulator, current) => {
    if(!accumulator.map(el => el.country).includes(current.country)){
    return [...accumulator, {country: current.country, emoji: current.emoji}]
    }else{
        return accumulator
    }
    }, [])
  
  return (
    <ul className={styles.countriesList}>
      {countries.map((country) => (
        <CountryItem key={country.id} country={country}/>
      ))}
    </ul>
  )
}
