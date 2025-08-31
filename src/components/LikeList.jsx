import Item from "./Item"

export default function LikeList() {
    
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
    }]

    return(
        <div className="w-3/4">
            <h2>찜한 맛집</h2>
            <div className="flex flex-wrap w-full bg-gray-400 py-5">
                {dummy.map(el => <Item key={el.id} item={el.title} /> )}
            </div>
        </div>
    )
}