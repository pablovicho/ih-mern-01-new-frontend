// ESTADO GLOBAL (O STORE). TODO LO QUE TENGA QUE VER CON GUITARRAS ESTARÁ GUARDADO AQUÍ

// LA ARQUITECTURA QUE SE UTILIZA PARA GENERAR EL ESTADO GLOBAL SE LE CONOCE COMO ARQUITECTURA DE FLUX

//

import { useReducer } from "react"; //es como useState
import GuitarContext from "./GuitarContext";
import GuitarReducer from "./GuitarReducer";
import axiosClient from "../../config/axios";

const GuitarState = (props) => {
  // 1. Estado inicial
  const initialState = {
    guitars: [],
    hola: "mundo",
    singleGuitar: {
      _id: "",
			nombre: "",
			descripcion: "",
			color: "",
			precio: "",
			imagen: ""}
  };
  // 2. Configuración de reducer y creación del estado global
  const [globalState, dispatch] = useReducer(GuitarReducer, initialState); //GuitarReducer son todas las funciones que van a alterar el estado inicial
  //dipatch es una fución que cambia el estado global, le da los datos reales al reducer para que haga su propia función

  // 3. Funciones de cambio en estado global
  const changeText = () => {
    dispatch({
      type: "CHANGE_TEXT",
      payload: "estoy aprendiendo Context sin morir en el intento", //datos reales que le vas a pasar para cambiar el estado global
    });
  };

  const getGuitars = async() => {
    const res = await axiosClient.get("guitars/readall")
    const list = res.data.data
    dispatch({
      type: "GET_GUITARS",
      payload: list, //datos reales que le vas a pasar para cambiar el estado global
    });
  }

const getGuitar = async(guitarId) => {
  const res = await axiosClient.get(`guitars/readone/${guitarId}`)
  const selectedGuitar = res.data.data
dispatch({
  type:"GET_GUITAR",
  payload:selectedGuitar
})
}

const crearGuitarra = (async(form) => {
  const res = await axiosClient.post("guitars/create", form)
  console.log(res)
})


const updateGuitar = async (form, idGuitar) => {
  const res = await axiosClient.put(`guitars/edit/${idGuitar}`)
  console.log(res)
  const updatedGuitar = res.data.data
  dispatch({
    type: "UPDATE_GUITAR",
    payload: updatedGuitar
  })
}

  // 4. Retorno. para que pueda retornar todos los datos, necesitamos un provider: da acceso a db
  return (
    <GuitarContext.Provider
      value={{
        //las llaves para llamar js; llama un objeto, con el valor de guitarras y el saludo
        guitars: globalState.guitars,
        hola: globalState.hola,
        singleGuitar: globalState.singleGuitar,
        changeText,
        getGuitars,
        getGuitar,
        crearGuitarra,
        updateGuitar
      }}
    >
      {props.children} {/*todos los children tendrán acceso a value*/}
    </GuitarContext.Provider>
  );
};


export default GuitarState;
