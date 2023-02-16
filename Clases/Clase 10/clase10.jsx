

// const {('Elemento')}=useContext(('Contexto')) => Llamada para usar el contexto
//Item Detail
const [product,setProduct]=useState({})
    const {addCart,cartList}=useContext(CartContext)
    useEffect(()=>{
        gFetch(idProduct)
        .then(ans => setProduct(ans))
    },[])
    function onAdd(cant){
        alert(cant)
        alert(product)
        addCart({...product,cant})
    }

