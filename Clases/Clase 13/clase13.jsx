//const createOrder = (event) => {
    //     event.preventDefault()
    //     const order = {}
    //     order.buyer = dataForm
    //     order.item = cartList.map(({id,name,price}) => ({id,name,price})),    
    //     order.total = totalPrice()
        
    //     const db = getFirestore()
    //     const queryColection = collection(db,'orders')
    //     addDoc(queryColection)
    //     .then(ans => console.log(ans))
    //     .catch(err => console.log(err))
    //     .finally(() => {
    //         cleanCart()
    //         setDataForm()
    //     })


    //Actualizar un documento en firestore

        // const getDoc = doc(db,'Products','pKNZX9Cb0baLp89tV1Rz')
        // updateDoc(getDoc,{
        //     stock: 30  // => Especifico los campos que quiero modificar
        //     // isActive:true
        // })
        // .then(() => console.log('Producto Actualizado'))




// console.log(event.target.name) // => Muestra el name de los inputs
// console.log(event.target.value) // => Captura el valor de los inputs

