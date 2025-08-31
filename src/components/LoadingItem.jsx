export default function LoadingItem(){
    
    const dummy = new Array(5)
    return(
        <>
            {dummy.map((_, index)=>{
                <div key={index} className="w-30 h-30 mx-10 my-2 bg-gray-600">
                </div>
            })}
        </>
    )
}