import React, {useState, useContext, useEffect} from 'react'
import GuitarContext from './../../../context/Guitar/GuitarContext'
import { useParams } from 'react-router-dom'

export default function EditGuitar() {
// estado global: state
const ctx = useContext(GuitarContext)
const {userSubmitForm, getGuitar, updateGuitar} = ctx
const { nombre, precio, color, imagen, description } = ctx.singleGuitar
const params = useParams()
const idGuitar = params.id

// estado local: context  (apenas se capturan los datos, se utilizan en un action.post)
const [guitarData, setGuitarData] = useState({
    nombre:"",
    precio:"",
    color:"",
    imagen:"",
    description:""
})

// funciones

//actualización
useEffect(() => {
	const updateLocalState = async() => {
		//descargar los datos de la guitarra de la página
await getGuitar(idGuitar)
		//cambiar el estado con los nuevos cambios del global al local
setGuitarData({
	nombre,
	precio,
	color,
	imagen,
	description,
})
//return y cerramos
return
		
	}
	updateLocalState()
}, [])

const handleChange = (e) => {
    e.preventDefault()
    setGuitarData({
        ...guitarData,
        [e.target.name]: e.target.value
    })
}

const handleSubmit = (event) => {
    event.preventDefault()
   updateGuitar(guitarData, idGuitar)
}


    return (
        <>
			<form onSubmit={(event) => {handleSubmit(event)}}>
				<div className="shadow sm:rounded-md sm:overflow-hidden">
					<div className="bg-white py-6 px-4 space-y-6 sm:p-6">
						<div>
							<h3 className="text-lg leading-6 font-medium text-gray-900">Editar guitarra</h3>
						</div>

						<div className="grid grid-cols-6 gap-6">
							<div className="col-span-6 sm:col-span-3">
								<label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
								<input
									onChange={ (event) => { handleChange(event) } } 
									type="text" 
									name="nombre"
									value={guitarData.nombre}  
									className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>

							<div className="col-span-6 sm:col-span-3">
								<label htmlFor="precio" className="block text-sm font-medium text-gray-700">Precio</label>
								<input value={guitarData.precio} onChange={ (event) => { handleChange(event) } } type="number" name="precio" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>

							<div className="col-span-6 sm:col-span-4">
								<label htmlFor="imagen" className="block text-sm font-medium text-gray-700">Imagen</label>
								<input value={guitarData.imagen} onChange={ (event) => { handleChange(event) } } type="text" name="imagen" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>

							<div className="col-span-6 sm:col-span-4">
								<label htmlFor="color" className="block text-sm font-medium text-gray-700">Color</label>
								<select onChange={ (event) => { handleChange(event) } } name="color" className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option value={guitarData.color}>---</option>
                                    <option value={"Blanco con negro"}>Blanco con negro</option>
									<option value={"Rojo con blanco"}>Rojo con blanco</option>
                                    
								</select>
							</div>

							<div className="col-span-6 sm:col-span-6 lg:col-span-4">
								<label htmlFor="description" className="block text-sm font-medium text-gray-700">Descripción</label>
								<textarea value={guitarData.description} onChange={ (event) => { handleChange(event) } } type="text" name="description" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>


						</div>
					</div>
					<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
						<button type="submit" className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							Guardar guitarra
						</button>
					</div>
				</div>
			</form>
		</>
    )
}
