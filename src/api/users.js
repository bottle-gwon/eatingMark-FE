import axios from "axios"
import PATHS from "../constants/urls";


export async function postLikePlace (data) {
    console.log(data,'data')
    try {
        if(data){
            const response = await axios.post(PATHS.LIKE_PLACES, data);
            if(response.status!==200){
                throw new Error(`맛집 추가 실패 ${response.status}`)
            }
            return response.data
        }else{
            throw new Error(`유효하지 않는 값`);
        }
    } catch (error) {
        if(error instanceof Error){
            throw error
        }else{
            throw new Error(`${String(error)}`)
        }
    }
}

export async function getLikePlace () {
    try {
        const response = await axios.get(PATHS.LIKE_PLACES);
        if(response.status!==200){
            throw new Error(`찜한 목록 조회 실패 ${response.status}`)
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



export async function delteLikePlace (id) {
    try {
        const response = await axios.delete(`${PATHS.LIKE_PLACES}/${id}`);
        if(response.status!==204){
            throw new Error(`삭제 실패 ${response.status}`)
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