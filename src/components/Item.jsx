export default function Item({item}){
    console.log(item)
    return(
    <div className="w-30 h-30 mx-10 my-2 bg-gray-600">
        <p>{item}</p>
    </div>)
}