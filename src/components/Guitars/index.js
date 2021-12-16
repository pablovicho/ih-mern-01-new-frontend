// ./client/src/components/Guitars/index.js
import React, { useEffect, useContext } from 'react'
import GuitarContext from './../../context/Guitar/GuitarContext'

import { Link } from 'react-router-dom'

export default function Guitars() {

	// ESTADO GLOBAL
	const ctx = useContext(GuitarContext)

	const {
		guitars,
		hola,
		changeText,
		getGuitars } = ctx


	// ESTADO LOCAL

// EL MOMENTO EN QUE SE EJECUTA EL USE EFFECT ES DESPUÉS DEL RETURN.
useEffect(() => {
		getGuitars()
	}, []) // CUANDO HAY UN ARREGLO VACÍO, SIGNIFICA QUE VA A EJECUTARSE UNA SOLA VEZ.

	return (
		<>
			<div className="max-w-7xl mx-auto my-8 px-4 sm:px-6 lg:px-8" >
				<div className="md:flex md:items-center md:justify-between">
					<div className="flex-1 min-w-0">
						<h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
							Listado de Guitarras
						</h2>
					</div>

					<div className="mt-4 flex md:mt-0">
						
                        <Link to="/guitarras/crear">
						<button type="button" className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

							Crear una publicación
						</button>
                        </Link>
					</div>
				</div>


				<div className="bg-white">
					<div>
						<div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

							{
								guitars.map(element => {
									return (
										<>
											<div className="">
												<div className="rounded-lg bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
													<Link to={`/guitarras/${element._id}`} >
													<img src={element.imagen} alt="Imagen de guitarra" className="w-full h-full object-center object-cover" />
													</Link>
												</div>
												<div className="pt-10 pb-4 text-center">
													<h3 className="text-sm font-medium text-gray-900">
														<Link to={`/guitarras/${element._id}`} >
															{element.nombre}
														</Link>
													</h3>
													<div className="mt-3 flex flex-col items-center">
														<p className="mt-1 text-sm text-gray-500">{element.descripcion}</p>
													</div>
													<p className="mt-4 text-base font-medium text-gray-900">${element.precio}</p>
												</div>
											</div>
										</>
									)
								})
							}

						</div>

					</div>
				</div>
			</div>
		</>
	)
}