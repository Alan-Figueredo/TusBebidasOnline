import "../CartWidget/CartWidget.css"
import "bootstrap/dist/css/bootstrap.css"
import { useCart } from "../../context/CartContext";

const CartWidget = ({Cart})=>{
    const {cantidadCarrito} = useCart();
    return(
        <><img className="cart" src={Cart} alt="cart" /><span className="position-absolute top-20 start-70 translate-middle badge rounded-pill bg-danger">{cantidadCarrito}</span></>
    );
}
export default CartWidget;