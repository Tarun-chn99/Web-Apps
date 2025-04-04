
export function debounce(func, delay) {
    let timer;
    return function(query) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(query);
        }, delay);
    };
}
