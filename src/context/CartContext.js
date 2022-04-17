import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children })=>{
    const [cart, setCart] = useState([]);
    const [cantidadCarrito, setCantidadCarrito] = useState(0)

    useEffect(()=>{
        const getCantidad = ()=>{
            let cantidad = 0;
            cart.forEach((compra)=>{
                cantidad += compra.quantity;
            });
            setCantidadCarrito(cantidad);
        }
        getCantidad();
    }, [cart])

    const addItem = (item, quantity) => {
        const itemEnCarrito = cart.find((compra)=> compra.item.id === item.id);
        if(itemEnCarrito){
            const actualizarCarrito = cart.map((compra)=>{
                if(compra.item.id === item.id){
                    return {...compra, quantity: itemEnCarrito.quantity + compra.quantity}
                }else{
                    return compra;
                }
            })
                setCart(actualizarCarrito);
        }else{
            setCart((prev)=>[...prev, {item, quantity}])
        }
        
    };
    const removeItem=(id)=>{
        setCart((prev)=>prev.filter((element)=>element.item.id !== id));
        //setCantidad((prevState)=> prevState) como??
    }
    const clearAll=()=>{
        setCart([]);
        setCantidadCarrito(0);
    }
    const calcularTotal=()=>{
        const preTotal = cart.map(x=>x.price * x.quantity);
        let total = 0;
        for(let elemento of preTotal){
            total = total + elemento;
        }
        return total;
    }
    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clearAll, calcularTotal, cantidadCarrito }}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = ()=> useContext(CartContext);