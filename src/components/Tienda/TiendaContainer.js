import { useState } from "react";
import ListaProductos from "./ListaProductos";
import { Row } from "react-bootstrap";
import { useTiendaContext } from "../../context/TiendaContext";
import { BarraCategorias } from "../Categories/BarraCategorias";
import { useAge } from "../../context/AgeContext";
import { Mayor } from "../Mayor/Mayor";


export const Tienda = () => {
    
    const { mayor } = useAge();
    const { data, handleSort } = useTiendaContext()
    const [prueba, setPrueba] = useState("")

    const handleChange = e => {
        setPrueba(e.target.value);
    };
    //filtrado
    const filteredProducts = data.filter(
        productos => {
            return (
                productos.name.toLowerCase().includes(prueba.toLowerCase())
            );
        }
    );
    const end = "end"
    return (


        <div className="container">
            <Mayor />
            {mayor === false && <div><p className="text-center" id="sinEdad"><b>¡No contas con la edad suficiente para entrar a la pagina!</b></p></div>}
            {mayor === true &&
                <>
                    <BarraCategorias />
                    <Row>
                        <div className="input-group col-12">
                            <input className="form-control" placeholder="Buscar" id="buscador" onChange={handleChange} />
                        </div>
                    </Row>
                    <Row className="justify-content-end">
                        <div className="col-12 col-lg-2 mt-sm-1 my-3">
                            <select name="ordenar" id="ordenar" onChange={(evt) => { handleSort(Number(evt.target.value)); }}>
                                <option selected disabled>Ordenar por</option>
                                <option value={1}>Alfabeticamente A-Z</option>
                                <option value={2}>Alfabeticamente Z-A</option>
                                <option value={3}>Precio Menor-Mayor</option>
                                <option value={4}>Precio Mayor-Menor</option>
                            </select>
                        </div>
                    </Row>
                    <ListaProductos filteredProducts={filteredProducts} />
                </>
            }
        </div>
    )
}
