function Search(){
    return(
        <div className="searchBar h-100 mt-3">
            {/* <button type="button" className="search rounded-circle "> */}
            <div style={{height:'60%'}} className="p-1 center row">
                <input type="text" className="h-100 col-10" placeholder="Buscar ..."/>
                <div className="col-2">
                    <div className="w-50 h-100">
                        <div id="circle" className="search rounded-circle h-100 w-100">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Search

