// Acceder a un doc => ItemDetailContainer
    // useEffect(() => {
    //     const db = getFirestore()
    //     const queryDoc = doc(db,'Products','SBaWrzEZD78MBRa60eqA')
    //     getDoc(queryDoc) // => Promise
    //     .then(respProd => setProduct({ id:respProd.id, ...respProd.data() }) )
    // },[])

//Acceder a todos los docs
    // useEffect(()=>{
    //     const db = getFirestore()
    //     const queryCollection = collection(db,'Products')
    //     getDocs(queryCollection)
    //     .then(respCollection => setProducts( respCollection.docs.map(prod => ({ id:prod.id , ...prod.data()}) )))
    // },[])

//Traer productos de una coleccion filtrado
    // useEffect(() => {
    //         const db = getFirestore()
    //         const queryCollection = collection(db,'Products')

    //         Ej. => Filtrar por precio
    //         const filtro = query(queryCollection,where('price','==',150),
    //         limit(1), // => Establecer un limite 
    //         orderBy('price','desc') // Ordena segun los parametro y en orden ascendente o descendente
    //         )
    
    //         const filtro = query(queryCollection,where('category','==',idCategory))
    //         getDocs(filtro)
    //         .then(respCollection => setProducts( respCollection.docs.map(prod => ({ id:prod.id , ...prod.data()}) )))
    //     },[])