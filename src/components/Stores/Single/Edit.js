import React, {useState, useContext, useEffect} from 'react'
import StoreContext from './../../../context/Store/StoreContext'
import { useParams } from 'react-router-dom'

export default function EditStore() {
// estado global: state
const ctx = useContext(StoreContext)
const {userSubmitForm, getStore, updateStore, singleStore} = ctx
const { nombre, domicilio, telefono} = ctx.singleStore //checar que sí se llame así en el contexto
const params = useParams()
const idStore = params.id

// estado local: context  (apenas se capturan los datos, se utilizan en un action.post)
const [storeData, setStoreData] = useState({
    nombre:"",
    domicilio:"",
    telefono:"",
})

// funciones

//actualización

// USEEFFECT PARA ACTUALIZAR DATOS EN EL ESTADO GLOBAL
useEffect(() => {
	getStore(idStore)
	
}, [])

// USEEFFECT PARA ACTUALIZAR LOS DATOS DEL ESTADO GLOBAL AL ESTADO LOCAL
useEffect(() => {
	const {
		nombre,
		domicilio,
		telefono
	} = ctx.singleStore
		
		//descargar los datos de la tienda de la página
		//cambiar el estado con los nuevos cambios del global al local
setStoreData({
	nombre: nombre,
	domicilio: domicilio,
	telefono: telefono,
})
		
	
}, [singleStore])

const handleChange = (e) => {
    e.preventDefault()
    setStoreData({
        ...storeData,
        [e.target.name]: e.target.value
    })
}

const handleSubmit = (event) => {
    event.preventDefault()
   updateStore(storeData, idStore)
}


    return (
        <>
			<form onSubmit={(event) => {handleSubmit(event)}}>
				<div className="shadow sm:rounded-md sm:overflow-hidden">
					<div className="bg-white py-6 px-4 space-y-6 sm:p-6">
						<div>
							<h3 className="text-lg leading-6 font-medium text-gray-900">Editar tienda</h3>
						</div>

						<div className="grid grid-cols-6 gap-6">
							<div className="col-span-6 sm:col-span-3">
								<label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
								<input
									onChange={ (event) => { handleChange(event) } } 
									type="text" 
									name="nombre"
									value={storeData.nombre}  
									className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>

							<div className="col-span-6 sm:col-span-3">
								<label htmlFor="domicilio" className="block text-sm font-medium text-gray-700">Domicilio</label>
								<input value={storeData.domicilio} onChange={ (event) => { handleChange(event) } } 
								type="text" name="domicilio" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>

							<div className="col-span-6 sm:col-span-6 lg:col-span-4">
								<label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Teléfono</label>
								<textarea value={storeData.telefono} onChange={ (event) => { handleChange(event) } } 
								type="text" name="telefono" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>


						</div>
					</div>
					<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
						<button type="submit" className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							Guardar tienda
						</button>
					</div>
				</div>
			</form>
		</>
    )
}
