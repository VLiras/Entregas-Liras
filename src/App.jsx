import { BrowserRouter,Navigate,Route, Routes} from 'react-router-dom'
import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'
import DetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './Components/CartContainer/CartContainer'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx'
import { CartProvider} from './Context/CartContext'
import Error from './Components/Error/Error'
import './App.css'
import './Tools.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  // const AppContext = createContext();
  
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
          <Route path='/error'element={<Error/>}/>
          <Route path='*'element={<Navigate to='/'/>}/>
        </Routes>
    </CartProvider>
    </BrowserRouter>
  )
}

export default App
