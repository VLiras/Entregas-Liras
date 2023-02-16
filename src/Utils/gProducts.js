import products from "./products"
const gProducts = () => new Promise((resolve,reject)=>{
    let condition=true;
    if(condition){
        setInterval(()=>{
            resolve(products)
        },3000)
    }
    else{reject('Error')}  
  });
export default gProducts

const gDetails = () => new Promise ((resolve,reject) => {
    let condition = true;
    if(condition){resolve(products)}
    else{reject('Error')}
})