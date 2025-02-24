import ListItem from "../../components/listItem"

function Film({className})
{
    const items = [
        {to:"/filmshowing",name:"Đang chiếu"},
        {to:"/filmfuture",name:"Sắp chiếu"}
    ]
    return ( 
        <div className={className}>
            <div className="w-[82%] mx-auto p-10">
                <div className="flex  items-center">
                    <div>
                        <span className="border-l-3 border-blue-700 mr-2"></span>
                        <h1 className=" font-bold text-xl uppercase">
                            PHIM
                        </h1>
                    </div>
                    <div>
                        <ListItem items={items} search={false}/>
                    </div>
                </div>
                <div >

                </div>
            </div>
        </div>
    )
}
export default Film