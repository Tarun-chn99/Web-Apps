// union of two array

const a = [1,2,3,4,5];
const b = [1,2,3];

const union = (a,b) => {

    function unionOfArrays(a, b) {
        const c = a.concat(b); 
        c.sort((x, y) => x - y); 
        const un = []; 
      
        for (let i = 0; i < c.length; i++) {
          if (i === 0 || c[i] !== c[i - 1]) {
            un.push(c[i]);
          }
        }
              return un.length;
      }
      return unionOfArrays(a, b);
}
      

console.log("Union of elements: ",union(a,b));