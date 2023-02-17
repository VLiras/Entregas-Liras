import products from "./products"
const gProducts = () => new Promise((resolve,reject)=>{
    let condition=true;
    if(condition){
        setInterval(()=>{
            resolve(products)
        },2000)
    }
    else{reject('Error')}  
  });
export default gProducts

