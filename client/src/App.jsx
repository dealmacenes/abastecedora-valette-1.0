import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Catalogo from './pages/Catalogo'
import Product from './pages/Product'
import Mayorista from './pages/Mayorista'

export default function App(){
 return (
 <BrowserRouter>
 <div className='min-h-screen bg-[#f7f7f7]'>
 <Navbar/>
 <Routes>
 <Route path='/' element={<Home/>}/>
 <Route path='/catalogo' element={<Catalogo/>}/>
 <Route path='/producto/:slug' element={<Product/>}/>
 <Route path='/mayorista' element={<Mayorista/>}/>
 </Routes>
 </div>
 </BrowserRouter>
 )
}
