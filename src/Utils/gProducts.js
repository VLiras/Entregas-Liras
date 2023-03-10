import products from "./products"
const gProducts = (id) => new Promise((resolve,reject) => {
    let condition=true;
    if(condition){
        setInterval(()=>{
            resolve(id ? products.find(product => id === product.id) : products)
        },2000)
    }
    else{reject('Error')}  
  });

/*
{ {product.photo} }
{product.make} {product.model}
{product.price}
{product.stock}

*/