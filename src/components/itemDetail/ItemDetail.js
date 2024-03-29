import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Link, NavLink, useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { getFirestore } from "../../firebase";
import { MdArrowBackIos } from "react-icons/md"
import "../itemDetail/ItemDetail.css"
import imagen from "../../images/Loading.gif"
export const ItemDetail = () => {
    const { addItem } = useCart();
    const [counter, setCounter] = useState(1);
    const { productID } = useParams();
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const db = getFirestore()
        const productCollection = db.collection("productos");
        const selectedProduct = productCollection.doc(productID);
        setIsLoading(true);
        selectedProduct
            .get()
            .then((response) => {
                setProduct({ ...response.data(), id: response.id })
            })
            .finally(() => setIsLoading(false));
    }, [productID]);

    const handleClick = () => {
        addItem(product, counter);
    };
    const prueba = () => {
        let lista = [];
        for (let i = 1; i <= (product.stock); i++) {
            lista.push(<option key={i} value={i} >{i}</option>)
        }
        return lista
    }

    if (isLoading || !product) return <div className="centrado"><img src={imagen} alt="loading" /></div>
    return (
        <>
            <NavLink to="tienda" className="botonBack">
                <MdArrowBackIos style={{fontSize:"30px", display:"inline-block", marginLeft:"10px"}} /><p style={{fontSize:"22px", display:"inline-block", alignContent:"center", alignItems:"center"}}>Volver a la tienda</p>
            </NavLink>
            <div className="card my-3 prueba">
                <Row className="my-2">
                    <div className="col-sm-6 col-12">
                        <img className="img-fluid img-thumbnail mx-sm-2" src={product.img} alt={product.name} />
                    </div>
                    <div className="col-sm-5 col-12 my-auto">
                        <div className="text-align-justify">

                            <p className="nombreItem"><b>{product.name}</b></p>
                            <p><b>{product.marca}</b></p>
                            {/* <p className="estrellas">*****</p> */}
                            <span className="precio">${product.price}</span><p className="cuotas">Hasta 12 cuotas sin interés</p>
                            <span className="my-3 ">Envío:<b> Acordar con el vendedor</b></span>
                        </div>
                        <Link to={`/cart`} className="my-3 col-sm-12 col-12 btn btn-primary" onClick={handleClick}><a style={{ all: "unset" }}
                            href="#top">Comprar ahora</a>
                        </Link>

                        <Row>
                            <button className="my-3  col-sm-8 col-11 m-sm m-auto  btn btn-primary" onClick={handleClick}>Agregar al carrito</button>
                            <select name="quantity" onChange={(evt) => { setCounter(Number(evt.target.value)) }} className="col-sm-3 col-11 m-sm m-auto mt-3" style={{ height: "30px" }} >
                                {prueba()}
                            </select>

                        </Row>
                    </div>
                </Row>
                <hr />
                <Row className="mx-sm-4 mx-2 my-sm-4 my-2 ">
                    <h3>Descripción</h3>
                    <p>{product.description}</p>
                </Row>
            </div>
        </>
    )
}