import ShimmerCard from './resListShimmerCard';

const Shimmer = () => {
    const arr = Array.from({length:20},(_,index) => index);
    return(
            <div className="res-container flex flex-wrap w-full space-evenly" >
                {arr.map((index)=> <ShimmerCard key={index}/>)}
            </div>
    );
}

export default Shimmer;


