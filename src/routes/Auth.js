import React, {useContext, useEffect, useState} from 'react'

import {Navigate, Router} from 'react-router-dom' //redirecciones, en lugar de redirect

import UserContext from '../context/User/UserContext'

export default function PublicRoute({ component: Component, ...props }) { 
    // los ...props son todos los valores que se pongan en Router.js. 
    // component: Component lo pide React, crea un  componente y lo asigna a Component. es la representación de Register
    const userCtx = useContext(UserContext)
    const { authStatus, verifyToken } = userCtx

    const [loading, setLoading] = useState(true) //para el spinner de carga

    useEffect(async () => {
        await verifyToken()
        setLoading(false)

    }, [authStatus]) //authStatus verifica si está loggeado el usuario

    return (
		<>
			{
				authStatus ?
				(<Navigate replace to="/" />)
				:
				(<Component/>)
			}
		</>
    )
    
}