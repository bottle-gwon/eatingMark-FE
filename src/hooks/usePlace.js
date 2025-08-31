import { useEffect, useState } from "react";
import getPlace from "../api/place";


export function usePlace(){
    const [places, setPlaces] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        async function fetchPlaces(){
            try {
                setIsLoading(true);
                const data = await getPlace();
                setPlaces(data);
            } catch (e) {
                setError(e)
            } finally{
                setIsLoading(false)
            }
        }
        fetchPlaces()
    },[])

    return{places, isLoading, error};
}