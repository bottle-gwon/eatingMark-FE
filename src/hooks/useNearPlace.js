import { useEffect, useState } from "react";
import { sortPlacesByDistance } from "../utils/loc";

export default function useNearPlace({places , isLoading}) {
    const [sortedPlace, setSortedPlace] = useState(null)

    function getCurrentPosition() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);

        })
    }

    useEffect(()=>{
        async function calculateNear() {
            try {
                const current = await getCurrentPosition();
                if(current?.code){
                    throw new Error(current?.message)
                }
                setSortedPlace(sortPlacesByDistance(places.places, current.coords.latitude, current.coords.longitude))
            } catch (error) {
                console.error(error)
                if(error instanceof Error){
                    throw error
                }else{
                    throw new Error(`위치 및 거리 계산중 에러 발생 ${String(error)}`)
                }
            }
        }
        if(!isLoading){
            calculateNear()
        }
    }, [isLoading])

    return sortedPlace;
}