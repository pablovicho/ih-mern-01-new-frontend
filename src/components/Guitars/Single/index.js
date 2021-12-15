import React, { useContext, useEffect } from 'react'
import GuitarContext from '../../../context/Guitar/GuitarContext'
import { useParams } from 'react-router-dom'

export default function Single() {
    const ctx = useContext(GuitarContext)
    const {getGuitar, singleGuitar} = ctx
    const params =  useParams()
    const id = params.id

    useEffect(() => {
		getGuitar(id)
	}, [])
    
    return (
        <div>
            Página individual de guitarra
            <img src={singleGuitar.imagen} alt=""></img>
            <h1>Marca: {singleGuitar.nombre}</h1>
            <p>Descripción: {singleGuitar.description}</p>
            <p><b>Precio:</b>{singleGuitar.precio}</p>

        </div>
    )
}
