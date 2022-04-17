import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { getFirestore } from "../../firebase";
import { ItemCount } from "../ItemCount/ItemCount";
import "../itemDetail/ItemDetail.css"
export const ItemDetail =()=>{
    const { addItem } = useCart();
    const [disabled, setDisabled] = useState(false);
    const [counter, setCounter] = useState(1);
    const { productID } = useParams();
    const [product, setProduct] =useState({});
    const [isLoading, setIsLoading] =useState(false)
    useEffect(()=>{
        const db = getFirestore() 
        const productCollection = db.collection("productos");
        const selectedProduct = productCollection.doc(productID);
        setIsLoading(true);
        selectedProduct
            .get()
            .then((response)=> {
            setProduct({...response.data(), id: response.id})
        })
        .finally(()=> setIsLoading(false)); 
    }, [productID]);

    const handleClick=()=>{
        addItem(product,counter);
    };
    const sumar=()=>{
        if(counter < product.stock){
            setCounter((prevState)=>prevState+1)
        }else{
            setDisabled(true)
        }
    }
    const restar=()=>{
        if(counter > 1){
            setCounter((prevState)=>prevState-1)
            setDisabled(false)
        }else{
            setCounter(counter);
        }
    }

    if(isLoading || !product) return <p className="text-center" id="loading">Cargando los productos...</p>
    return(
            <div className="shadow text-center card mt-5" id="container">
                <div className="card-body row">
                    <div className="col-sm-7 col-12">
                        <img className="img-fluid img-thumbnail" src={product.img} alt={product.name}/>
                    </div>
                    <div className="col-sm-5 col-12" >
                        <h5 className="card-title" id="tituloCard">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text">Stock disponible: {product.stock}</p>
                        <p className="my-4" id="fuentePrecio"><b>${product.price}</b></p>
                        <ItemCount  sumar={sumar} restar={restar} counter={counter} setCounter={setCounter} disabled={disabled}/>
                        {counter === product.stock && <div className="alert alert-danger" role="alert" id="alertaStock" >Llegaste al limite de stock!</div>}
                        <div className="mb-3 row">
                            <div className="col-sm-2 card-body">
                                <button onClick={handleClick} className="btn" id="agregarCarrito">Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                    
                </div>

                
            </div>
    )
}