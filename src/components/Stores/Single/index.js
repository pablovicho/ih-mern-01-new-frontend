import React, { useContext } from 'react'
import StoreContext from '../../../context/Store/StoreContext'
import { useParams } from 'react-router-dom'

export default function Tienda() {
    const ctx = useContext(StoreContext)
    console.log(ctx)
    const {getStore, singleStore} = ctx
    console.log(singleStore)
    const params =  useParams()
    const id = params.id
    
    return (
        <div>
            Página individual de tienda
            <button onClick={() => {getStore(id)}}>Obtener tienda  individual</button>
            <h1>Marca: {singleStore.nombre}</h1>
            <p>Descripción: {singleStore.direccion}</p>
            <p><b>Precio:</b>{singleStore.telefono}</p>

        </div>
    )
}
