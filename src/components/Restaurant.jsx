import { usePlace } from "../hooks/usePlace"
import Item from "./Item"

export default function Restaurant() {
    const {places, isLoading, error} = usePlace();
    console.log(places, isLoading, error);
    const dummy = [{
        id:1,
        title: 'test'
    },{
        id:2,
        title: 'test'
    },{
        id:3,
        title: 'test'
    },{
        id:4,
        title: 'test'
    },{
        id:5,
        title: 'test'
    },{
        id:6,
        title: 'test'
    },{
        id:7,
        title: 'test'
    },{
        id:8,
        title: 'test'
    }]
    
    return(
        <div className="w-3/4">
            <h2>맛집 목록</h2>
            <div className="flex flex-wrap w-full bg-gray-400 py-5">
                {dummy.map(el => <Item key={el.id} item={el.title} /> )}
            </div>
        </div>
    )
}