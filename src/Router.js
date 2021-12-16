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
import EditGuitar from './components/Guitars/Single/Edit'
import EditarTienda from './components/Stores/Single/Edit'
import Auth from "./routes/Auth"
import Private from "./routes/Private"
import Profile from "./components/User/Profile"

import GuitarState from './context/Guitar/GuitarState'
import StoreState from './context/Store/StoreState'
import UserState from './context/User/UserState'


const Router = () => {
    return (
<>
<UserState>
<GuitarState> {/* GuitarState y UserState engloban todos los elementos y les otorga un valor */}
<StoreState>
    <BrowserRouter>
        <Routes>
            <Route path="/" element ={<Layout/>}>
            <Route index element={<Home/>}/>
{/* Rutas de autenticación: evitan que un usuario loggeado (con  token) pueda entrar a register.js y login.js */}
            <Route path="registro" element={<Auth component={Register} />} />
            <Route path="iniciar-sesion" element={<Auth component={Login}/>}/>
            <Route path="guitarras" element={<Guitars/>}></Route>
            <Route path="guitarras/crear" element={<CrearGuitarra/>}></Route>
            <Route path="guitarras/:id" element={<Single/>}></Route>
            <Route path="guitarras/:id/editar" element={<EditGuitar/>}></Route>
            <Route path="tiendas" element={<Stores/>}></Route>
            <Route path="tiendas/crear" element={<CrearTienda/>}></Route>
            <Route path="tiendas/:id" element={<Tienda/>}></Route>
            <Route path="tiendas/editar/:id" element={<EditarTienda/>}></Route>
            <Route path="profile" element={<Private component={Profile}/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
    </StoreState>
    </GuitarState>
    </UserState>
</>
    )
}


export default Router