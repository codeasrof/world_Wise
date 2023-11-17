import { useContext } from "react";
import CitiesContext from "./CitiesContext";

export function useCities(){
    const context = useContext(CitiesContext)
    if(context === undefined){
        throw new Error("Cities Context was used outside the Cities Provider.")
    }
    return context;
}