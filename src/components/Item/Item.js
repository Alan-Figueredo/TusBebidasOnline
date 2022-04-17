import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from "react-router-dom"
export const Item =({product})=>{
    let navigate = useNavigate();
    return(
            <div className="text-center mt-3 shadow mb-2">
                <div className="card-body">
                    <img className="imagen-card " src={product.img} alt={product.name}/>
                    <hr/>
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <button onClick={()=>navigate(`/productos/${product.id}`)} className="btn btn-light mb-3">Ver detalle</button>
                </div>
            </div>
    );
}
