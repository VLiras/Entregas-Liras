import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './Tools.css'
import Header from './Components/Header/Header'
import Search from './Components/Search/SearchBar'
import NavBar from './Components/NavBar/NavBar'
import Cart from './Components/CartWidget/CartWidget'
import Container from './Components/Container/ComponenteContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import DetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import ItemDetail from './Components/ItemDetail/ItemDetail'
import ItemCount from './Components/ItemCount/ItemCount'
import { BrowserRouter,Navigate,Route, Routes} from 'react-router-dom'
import CartContainer from './Components/CartContainer/CartContainer'
import products from './Utils/products'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx'
import ItemList from './Components/ItemList/ItemList'


function App() {
  const [count, setCount] = useState(0)

  // Clase 8 => Minuto 1:44:40
  return (
    <BrowserRouter>
      <Header/>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Bienvenido a Deep Audio" subtitle="Agudos, Graves, Medios...La alta fidelidad la encontras acá!"/>}/>
        <Route path='/:idCategory'element={<ItemListContainer/>}/>
        <Route path='/detalle/:idProduct' element={<DetailContainer/>}/>
        <Route path='/cart'element={<CartContainer/>}/>
        <Route path='*'element={<Navigate to='/'/>}/>
      </Routes>
      {/* <ItemCount initial={1} stock={10} onAdd={()=>{}}/> */}
        {/* <ItemDetail/> */}
    </BrowserRouter>
    
  )
}

export default App
