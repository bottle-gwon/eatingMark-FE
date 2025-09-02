import { usePlace } from "../hooks/usePlace"
import Item from "./Item"
import LoadingItem from "./LoadingItem";
import useNearPlace from "../hooks/useNearPlace";

export default function Restaurant() {
    const {places, isLoading, error} = usePlace();
    const sortedPlaces = useNearPlace({places ,isLoading});


    if(isLoading){
        return( <LoadingItem /> )
    }
    if(error){
        return(
        <div className="bg-red-300 px-3 py-0.5">
            <p>{`${error} 에러 발생`}</p>
        </div>)
    }
    
    return(
        <div className="w-3/4">
            <h2>맛집 목록</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full bg-gray-400 py-5">
                {sortedPlaces? sortedPlaces?.map(el => <Item key={el.id} item={el} /> ):
                places.places?.map(el => <Item key={el.id} item={el} /> )
                }
            </div>
            
        </div>
    )
}