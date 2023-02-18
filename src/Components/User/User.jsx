const User = ()=>{
    return(
        <div className="user center">
            <div onClick={()=>{alert('Click en User')}} style={{backgroundColor:'#333',border:'crimson solid'}} className="rounded-circle w-100 h-100 display-5">
                <i className="fa-solid fa-user"></i>
            </div>
        </div>
    )
}
export default User