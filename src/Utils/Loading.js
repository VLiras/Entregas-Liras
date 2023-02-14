import products from "./products"
const sell= () => new Promise((resolve,reject)=>{
    let condition=true;
    if(condition){
        setInterval(()=>{
            resolve(products)
        },3000)
    }
    else{reject('Error')}  
  });
export default sell
