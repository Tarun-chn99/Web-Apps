import ItemCard from "./ItemCard";

const MenuCategory = (props) => {

    const {title,itemCards} = props.category;
    const {showCategory,setshowCategory,resInfo} = props;

    return (
        <div className="menuCategory m-3">
            
            <button className="flex justify-between w-full border-none p-4 bg-transparent cursor-pointer duration-500" onClick={setshowCategory}>
                <div className="text-sm lg:text-lg font-bold tracking-wide"><b>{title}</b></div>
                <div className="downArrow">
                    <span>{showCategory ? <img className='w-4' src='https://cdn-icons-png.flaticon.com/512/61/61148.png'/> : 
                                          <img className='w-4' src='https://cdn-icons-png.flaticon.com/512/60/60995.png'/>}</span>
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




