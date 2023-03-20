import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../ItemListContainer/ItemListContainer.css"
import ItemList from "../ItemList/ItemList";
import { useAge } from "../../context/AgeContext";
import "../ItemListContainer/ItemListContainer.css"
import { Mayor } from "../Mayor/Mayor";
import Carrusel from "../Carrusel/Carrusel";

const ItemListContainer = () => {
    const { mayor } = useAge();
    return (
        <>
            {mayor === true && <Carrusel />}
            <div className="container" id="itemContainer">
                <Mayor />
                {mayor === false && <div><p className="text-center" id="sinEdad"><b>¡No contas con la edad suficiente para entrar a la pagina!</b></p></div>}
                {mayor === true && <ItemList />}

            </div>
        </>

    );
}
export default ItemListContainer;