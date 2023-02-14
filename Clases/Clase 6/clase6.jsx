
function claseSeis(){
const [productos,setProductos]=useState([])
    const[loading,setLoading]=useState(true)
    useEffect(()=>{
        task()
        task.then(ans => ans)
        .catch(err=>console.log(err))
        .then(ans=>console.log(ans))
        // .finally(()=>{console.log('Siempre al ultimo')})
    })
    console.log(task)
    return(
        {[1,2,3,4].map(numero=><li key={numero}>{numero}</li>)}
    )
                /*Actualizacion */
//instanciando una promesa
    //Async & Await => Sugar Syntax => Promise
    //.then() => Metodo de una promesa => Captura los estados resueltos => Por ejemplo: cuando se resuelve, el dato se guarda en "answer"
    // Capturar Rechazado => Dentro del .then, paso como segundo parametro un error para el rechazado
    //.finally() => Siempre al final
    const task=new Promise( (resolve,reject)=>{
        //Codigo => Asincronico o no
        let condition = true;
        if(condition){resolve('Resuelto')}
        else{reject('Rechazado')}
    
        
    })  
    console.log(task)
    // throw new Error('Error en el then'); //No captura el error ya que no captura el error de abajo => Para ello se utiliza catch()
    task.then(answer => answer) //Asincronico 
    //Generalmente, nunca se ve el segundo parametro en el then() => Se usa el catch()
    .catch(err => console.log(err))
    .then(answer => console.log(answer))
    .finally(()=>console.log('Siempre al final'))
    // Minuto 30:30





}


