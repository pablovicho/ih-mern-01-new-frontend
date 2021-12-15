import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Guitars from './components/Guitars'
import Stores from './components/Stores'
import Single from './components/Guitars/Single'
import Tienda from './components/Stores/Single'
import CrearGuitarra from './components/Guitars/Crear'
import CrearTienda from './components/Stores/Crear'

import GuitarState from './context/Guitar/GuitarState'
import StoreState from './context/Store/StoreState'


const Router = () => {
    return (
<>
<GuitarState>
<StoreState>
{/* GuitarState engloba todos los elementos y les otorga un valor */}
    <BrowserRouter>
        <Routes>
            <Route path="/" element ={<Layout/>}>
<Route index element={<Home/>}/>
<Route path="registro" element={<Register/>}/>
<Route path="iniciar-sesion" element={<Login/>}/>
<Route path="guitarras" element={<Guitars/>}></Route>
<Route path="guitarras/crear" element={<CrearGuitarra/>}></Route>
<Route path="guitarras/:id" element={<Single/>}></Route>
<Route path="tiendas" element={<Stores/>}></Route>
<Route path="tiendas/crear" element={<CrearTienda/>}></Route>
<Route path="tiendas/:id" element={<Tienda/>}></Route>

            </Route>
        </Routes>
    </BrowserRouter>
    </StoreState>
    </GuitarState>
</>
    )
}


export default Router