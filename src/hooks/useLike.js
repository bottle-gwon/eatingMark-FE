import { useEffect, useState } from "react";
import { getLikePlace } from "../api/users";


export function useLike(){
    const [places, setPlaces] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        async function fetchPlaces(){
            try {
                setIsLoading(true);
                const data = await getLikePlace();
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