import axios from "axios"

const baseUrl = import.meta.env.VITE_BASE_URL

export default async function getPlace () {
    try {
        const response = await axios.get(`${baseUrl}/places`);
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