
const useDebounce = (func,delay) => {

    let timerId;
    return function(query){
        clearTimeout(timerId);
        timerId = setTimeout(()=>{
            func(query);
        },delay);
    }
}

export default useDebounce;