
async function Fetch(){

    try{
        return await new Promise((resolve,reject) => {
            setTimeout(()=>{
                resolve("Resolved");
                console.log('resolved')
            },2000);
        })
    }
    catch(error){
        console.log('Error: ',error.msg);
    }
}

const data = Fetch();
console.log(data);
console.log("HI")