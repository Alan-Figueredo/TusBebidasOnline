import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { Item } from "../Item/Item.js";
import { getFirestore } from "../../firebase/index.js";
import { EtiquetaCerveza } from "../Etiquetas/EtiquetaCerveza.js";
import { EtiquetaRon } from "../Etiquetas/EtiquetaRon.js";
import imagen from "../../images/Loading.gif"
import "../ItemList/ItemList.css"
import { useNavigate } from "react-router-dom";

function ItemList() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        setIsLoading(true)
        const db = getFirestore()
        const productsCollection = db.collection("productos");
        const getDataFromFirestore = async () => {
            const response = await productsCollection.get();
            setData(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getDataFromFirestore();
        setIsLoading(false)
    }, []);
    if (isLoading) {
        return <div className="centrado"><img src={imagen} alt="loading" /></div>
    } else {
        return (
            <div className="container">
                <div className="row mt-5 w-100 m-auto">
                    <p className="titulo">Ofertas</p>
                    <EtiquetaCerveza />
                    <EtiquetaRon />
                </div>

                <div className="row mt-3 mb-3 w-100 m-auto">
                    <p className="titulo">Productos</p>
                    {(data && data.slice(0, 7).map((product) => (
                        <div className="col-12 col-sm-3" key={product.id}>
                            <Item key={product.id} product={product} id={product.id} />
                        </div>
                    )))}
                    <div className="col-12 col-sm-3 contenedor text-center" style={{ marginTop: "20vh" }}>
                        <button className="btn btn-primary w-50 objeto" onClick={() => { navigate("/tienda") }}>Ver más</button>
                    </div>
                </div>
            </div>

        )
    }
}
export default ItemList;