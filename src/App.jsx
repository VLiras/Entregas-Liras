import { createContext, useState } from 'react'
import './App.css'
import './Tools.css'
import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import DetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter,Navigate,Route, Routes} from 'react-router-dom'
import CartContainer from './Components/CartContainer/CartContainer'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx'
import { CartProvider,useCartContext } from './Context/CartContext'



function App() {
  const [count, setCount] = useState(0)
  const AppContext = createContext();
  //Solucionar el carrito, problemas en: => ItemDetail e ItemCount

  return (
    
    <BrowserRouter>
    <CartProvider>
      <Header/>
      <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenido a Deep Audio" subtitle="Agudos, Graves, Medios...La alta fidelidad la encontras acá!"/>}/>
          <Route path='/:idCategory'element={<ItemListContainer/>}/>
          <Route path='/detalle/:idProduct' element={<DetailContainer/>}/>
          <Route path='/cart'element={<CartContainer/>}/>
          <Route path='*'element={<Navigate to='/'/>}/>
        </Routes>
    </CartProvider>
    </BrowserRouter>
    
  )
}

export default App
