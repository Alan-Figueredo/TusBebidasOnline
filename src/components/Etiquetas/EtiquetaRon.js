import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import "../Etiquetas/Etiquetas.css"

export const EtiquetaRon = () => {
    const { setCategoria } = useCart()
    return (
        <div className="card col-sm mx-2 shadow">
            <div className="row">
                <div className="col-12 col-sm-6">
                    <p className="etiquetaTitulo">Vigente hasta el finde! </p>
                    <h3 className="promos">Hasta 15% off <br /> en Rones</h3>
                    <Link to="/category/2"><button className="btn btn-primary mt-2 mb-3" onClick={()=>{setCategoria("Ron")}}>Ver más</button></Link>
                </div>
                <div className="col-12 col-sm-6">
                    <img alt="Ron" className="imagenesPromo" src="https://th.bing.com/th/id/OIP.SvImgAs3Ia6YuLn52IixbwHaHa?pid=ImgDet&rs=1"></img>
                </div>
            </div>
        </div>
    )
}