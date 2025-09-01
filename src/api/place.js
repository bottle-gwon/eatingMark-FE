import axios from "axios"
import PATHS from "../constants/urls";


export default async function getPlace () {
    try {
        const response = await axios.get(PATHS.GET_PLACES);
        if(response.status!==200){
            throw new Error(`전체 맛집 목록 조회 실패 ${response.status}`)
        }
        return response.data
    } catch (error) {
        if(error instanceof Error){
            throw error
        }else{
            throw new Error(`${String(error)}`)
        }
    }
}