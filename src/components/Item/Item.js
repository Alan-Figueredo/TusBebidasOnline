import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./item.css"
export const Item =({product})=>{
    const [string, setString] = useState(product.description.substring(0,35))
    let navigate = useNavigate();
    return(
            <article onMouseEnter={()=>{setString(product.description)}} onMouseLeave={()=>{setString(product.description.substring(0,35))}} className="text-center mt-3 shadow mb-2 cardItem" onClick={()=>navigate(`/productos/${product.id}`)}>
                <div className="card-body">
                    <img className="imagen-card " src={product.img} alt={product.name}/>
                    <hr/>
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{string}</p>
                </div>
            </article>
    );
}
