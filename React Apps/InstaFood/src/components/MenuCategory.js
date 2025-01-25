import ItemCard from "./ItemCard";

const MenuCategory = (props) => {

    const {title,itemCards} = props.category;
    const {showCategory,setshowCategory,resInfo} = props;

    return (
        <div className="menuCategory margin-1">
            
            <button className="flex justify-between w-full border-none p-4 bg-transparent cursor-pointer duration-500" onClick={setshowCategory}>
                <div className="text-lg font-bold"><b>{title}</b></div>
                <div className="downArrow">
                    <span>Down</span>
                </div>
            </button>
            
            { showCategory && <div className="ItemsCard">
                {
                    itemCards?.map(element => {
                        return <ItemCard itemInfo={element?.card?.info} resInfo={resInfo} key={element?.card?.info?.id}/>
                    }) 
                }
            </div>}
            <div className="seperator"></div>
       
        </div>
    )
}

export default MenuCategory;




