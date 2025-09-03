import {  useQuery, useQueryClient } from "@tanstack/react-query";
// import { useLike } from "../hooks/useLike";
import Item from "./Item"
import LoadingItem from "./LoadingItem";
import { getLikePlace } from "../api/users";
import { useState } from "react";
import DeleteModal from "./DeleteModal";

export default function LikeList() {
    const [open, setOpen] = useState(false)
    const [delId, setDelId] = useState(null);
    const queryClient = useQueryClient()
    const {data: LikeList, isLoading, isError, error } = useQuery({
        queryKey: ['LikeList'],
        queryFn: getLikePlace
    })


    const handleClick = async (id) => {

        setOpen(true)
        setDelId(id)

    }



    if(isLoading){
            return( <LoadingItem /> )
    }
    if(isError){
        return(
        <div className="bg-red-300 px-3 py-0.5">
            <p>{`${error?.message} 에러 발생`}</p>
        </div>)
    }

    return(
        <div className="w-3/4">
            <h2>찜한 맛집</h2>
            <div className="flex flex-wrap w-full bg-gray-400 py-5" >
                {queryClient.getQueryData(['LikeList'])?.places.map(el => <Item key={el.id} item={el}  onClick={()=>handleClick(el.id)}/> )}
            </div>
            <DeleteModal open={open} setOpen={setOpen} id={delId} setId={setDelId}/>
        </div>
    )
}