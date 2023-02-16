const clase9=()=>{
    const inputHandler=(event)=>{
        event.preventDefault()
        event.stopPropagation()
        console.log(event.key)
    }
    
    return(
        <div>
             {/* <input onClick={inputHandler} type={Text} className='text-light'/> */}
        </div>
    )
}