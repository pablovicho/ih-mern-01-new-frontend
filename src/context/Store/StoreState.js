import { useReducer } from "react"; //es como useState
import StoreContext from "./StoreContext";
import StoreReducer from "./StoreReducer";
import axiosClient from "../../config/axios";

const StoreState = (props) => {
  // 1. Estado inicial
  const initialState = {
    stores: [],
    hola: "mundo",
    singleStore: {
      _id: "",
      nombre: "",
      domicilio: "",
      telefono: "",
    },
  };
  // 2. Configuración de reducer y creación del estado global
  const [globalState, dispatch] = useReducer(StoreReducer, initialState); //el Reducer son todas las funciones que van a alterar el estado inicial
  // 3. Funciones de cambio en estado global
  const changeText = () => {
    dispatch({
      type: "CHANGE_TEXT",
      payload: "¿neta pudimos cambiar esto?", //datos reales que le vas a pasar para cambiar el estado global
    });
  };

  const getStores = async () => {
    const res = await axiosClient.get("stores/readall");
    const list = res.data.data;
    dispatch({
      type: "GET_STORES",
      payload: list, //datos reales que le vas a pasar para cambiar el estado global
    });
  };

  const getStore = async (storeId) => {
    const res = await axiosClient.get(`stores/readone/${storeId}`);
    const singleStore = res.data.data;
    console.log(singleStore)
    dispatch({
      type: "GET_STORE",
      payload: singleStore,
    });
  };

  const crearTienda = async(form) => {
  const res = await axiosClient.post("stores/create", form)
  console.log(res)
}

const updateStore = async (form, idStore) => {
  const res = await axiosClient.put(`stores/edit/${idStore}`, form) //hay que pasarle el form, si no no cambia el estado
  console.log(res)
  const updatedStore = res.data.data
  dispatch({
    type: "UPDATE_STORE",
    payload: updatedStore
  })
}

  // 4. Retorno. para que pueda retornar todos los datos, necesitamos un provider: da acceso a db
  return (
    <StoreContext.Provider
      value={{
        //las llaves para llamar js; llama un objeto, con el valor de stores y el saludo
        stores: globalState.stores,
        hola: globalState.hola,
        singleStore: globalState.singleStore,
        changeText,
        getStores,
        getStore,
        crearTienda,
        updateStore
      }}
    >
      {props.children} {/*todos los children tendrán acceso a value*/}
    </StoreContext.Provider>
  );
};

export default StoreState;
