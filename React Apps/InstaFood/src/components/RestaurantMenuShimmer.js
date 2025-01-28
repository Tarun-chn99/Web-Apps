import React from 'react'

const RestaurantMenuShimmer = () => {
    

    return (
        <div className="w-[100%] md:w-[40rem] lg:w-[50rem] m-auto">
            
            <h2 className="my-8 mx-4 font-bold text-black text-lg md:text-xl p-4 bg-gray-400 animate-pulse"></h2>

            <div className="px-4 pb-4 rounded-[2.5rem] bg-custom-gradient ">

                <div className="rounded-[2rem] p-6 bg-white">

                    <div className="flex items-center">
                        <div className="text-base lg:text-lg"><b>⭐ {}  ({})</b></div>
                        <div className="mx-4"><b>•</b></div>
                        <div className="text-base lg:text-lg"><b>{}</b></div>
                    </div>
                    <div className="flex my-4 h-10 lg:h-12" >
                        <div className="mapSymbol h-full" >
                            <div className="dot"></div>
                            <div className="line"></div>
                            <div className="dot"></div>
                        </div>
                        <div className="flex flex-col mx-4 justify-between text-[0.875rem] h-full" >
                            <p className='mt-[0.2rem]'><b>Outlet</b><span className="mx-4">{}</span></p>
                            <p className='pt-4'><b></b></p>
                        </div>
                    </div>

                </div>
            </div>

            <h3 className="text-center tracking-widest font-bold m-6 mt-8">MENU</h3>


            {/* Filter buttons */}
            <div className="search flex space-evenly">
                <button className="menuSearchButton textLightGray"><b>Search for dishes</b></button>
            </div>

            <div className="filter mx-4 my-4 ">
                <div className="py-2 px-4 my-1 bg-gray-400 text-sm md:text-base lg:text-base rounded-xl mr-2 inline-block cursor-pointer " onClick={()=>{}}>     
                    <img className='w-4 inline-block mr-2' src='https://i.pinimg.com/736x/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.jpg' alt='' />
                    <span>Veg</span>
                </div>
                <div className="py-2 px-4 my-1 bg-gray-400 text-sm md:text-base lg:text-base rounded-xl mr-2 inline-block cursor-pointer " onClick={()=>{}}>     
                    <img className='w-4 inline-block mr-2' src='https://www.kindpng.com/picc/m/151-1515155_veg-icon-png-non-veg-symbol-png-transparent.png' alt='' />
                    <span>Non Veg</span>
                </div>
                <button className="py-2 px-4 my-1 bg-gray-400 text-sm md:text-base lg:text-base rounded-xl mr-2">Bestseller</button>
            </div>
            <hr className="mt-8" />

        </div>
    )
}

export default RestaurantMenuShimmer