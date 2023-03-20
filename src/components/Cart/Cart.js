import * as React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import UserData from "../UserData/UserData";
import "../Cart/Cart.css"
const Cart =()=>{
    const { cart, removeItem, clearAll } = useCart();
    const getTotal = (cart) =>{
        let total = 0;
        cart.forEach((element) => {
            total += element.item.price * element.quantity;
        });
        return total;
    }
    return(
        <div id="Container">
            <div className="card mt-3" style={{width:"100%", marginLeft:"auto", marginRight:"auto"}}>
                {cart[0] == null && <div className="my-5 text-center"><h2>Ups! Parece que no tenes nada en el carrito.</h2><p>¡Volve a la tienda para encontrar los productos que necesitas!</p><Link to="/tienda"><button className="btn btn-primary mt-3">Volver a la tienda</button></Link></div>}
                {cart.map((purchase)=>{
                        return (
                        <div className="mx-2" key={purchase.item.id}>
                            <div  className=" text-center mt-3" id="productos">
                            <div className="row my-2 mx-2">
                                <div className="col-sm-2 col-12">
                                    <img src={purchase.item.img} alt={purchase.item.name} className="img-thumbnail"/>
                                </div>
                                <div className="col-sm-10 col-12">
                                    <p className="mt-2">Producto: {purchase.item.name}</p>
                                    <p>Cantidad: {purchase.quantity}</p>
                                    <p>Precio: ${parseInt(purchase.quantity * purchase.item.price)}</p>
                                    <button className="btn btn-primary mt-3" onClick={()=>removeItem(purchase.item.id)}>Eliminar</button>
                                </div>
                            </div>
                            </div>
                            <hr/>
                        </div>
                    )})}
                    {cart[0] != null && <h3 id="Total">Total ${getTotal(cart)}</h3>}

                    {cart[0] != null && <button className="mt-5" id="eliminarTodosButton" onClick={clearAll}>Eliminar todos</button>}
            </div>

            {cart[0] != null && <UserData/>
            } 
        </div>
    )
}
export default Cart;