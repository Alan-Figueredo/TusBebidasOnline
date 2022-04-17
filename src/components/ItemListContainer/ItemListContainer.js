import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../ItemListContainer/ItemListContainer.css"
import ItemList from "../ItemList/ItemList";
import { useAge } from "../../context/AgeContext";
import "../ItemListContainer/ItemListContainer.css"

const ItemListContainer =()=>{
    const {mayor, setMayor} = useAge();
    const {hidden, setHidden} = useAge();
    return(
        <div className="container" id="itemContainer">
            <div className="card mt-5" id="card" hidden={hidden}>
                <h2 className="mt-3">Para ingresar a la pagina debes ser mayor de 18</h2>
                <p className="mb-5" id="mayor">¿Eres mayor a 18?</p>
                <button className="mb-2 btn btn-primary botonSiNo" onClick={
                    (evt)=>{evt.preventDefault();
                        setMayor(true)
                        setHidden(true);
                    }
                    }
                    >Si</button>
                <button className="mb-5 btn btn-primary botonSiNo" onClick={
                    (evt)=>{evt.preventDefault();
                        setMayor(false)
                        setHidden(true);
                    }
                }
                >no</button>
            </div>
            {mayor === false &&  <div><p className="text-center" id="sinEdad"><b>¡No contas con la edad suficiente para entrar a la pagina!</b></p></div>}
            {mayor === true && <ItemList/>}
            
        </div>

    );
}
export default ItemListContainer;