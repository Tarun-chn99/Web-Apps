
export const getMenuCategories = (menu) => {

    const items = menu?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    
    return items.filter(element => element?.card?.card["@type"]?.includes("ItemCategory"));
}
