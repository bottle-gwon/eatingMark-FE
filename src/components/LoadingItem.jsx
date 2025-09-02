export default function LoadingItem(){
    const dummy = [1, 2, 3, 4, 5]
    return(
        <div className="w-3/4">
            <h2>맛집 목록</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  w-full bg-gray-400 py-5">
                {dummy.map((_, index)=>{
                    console.log('index')
                    return <div key={index} className="relative w-64 h-64 mx-10 my-2 overflow-hidden bg-gray-600">
                    </div>
                    }
                )}
            </div>
        </div>
    )
}