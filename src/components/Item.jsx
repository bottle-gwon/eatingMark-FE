import PATHS from "../constants/urls"

export default function Item({item, onClick}){
    return(
    <div className="relative w-64 h-64 mx-10 my-2 overflow-hidden bg-gray-600" onClick={onClick}>
        <img src={`${PATHS.BASE_URL}/${item.image.src}`} alt={item.image.alt}
        className="w-full h-full object-center "/>
        <p className="absolute inset-x-0 bottom-0 bg-amber-300 text-amber-900 text-center">{item.title}</p>
    </div>)
}


export function ItemForDummy({item}){

    return(
    <div className="w-30 h-30 mx-10 my-2 bg-gray-600">
        <p>{item}</p>
    </div>)
}