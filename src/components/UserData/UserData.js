import { useState } from "react";
import { getFirestore } from "../../firebase";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../UserData/UserData.css"
const UserData = ()=>{
    const { cart, clearAll } = useCart();
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [diff, setDiff] = useState(true);
    const [hidden, setHidden] = useState(true);
    let navigate = useNavigate();
    const addZero=(i)=> {
        if (i < 10) {
            i = '0' + i;
        }
        return i;
    }
    const hoyFecha=()=>{
        var hoy = new Date();
        var dd = hoy.getDate();
        var mm = hoy.getMonth()+1;
        var yyyy = hoy.getFullYear();
        
        dd = addZero(dd);
        mm = addZero(mm);
    
        return dd+'/'+mm+'/'+yyyy;
    }
    const getTotal = (cart) =>{
        let total = 0;
        cart.forEach((element) => {
            total += element.item.price * element.quantity;
        });
        return total;
    }
    const handleSubmit = (evt)=>{
        evt.preventDefault()

        if(!name || !phone || !lastName || !email || (email !== confirmEmail)){
            return false;
        }
        const newOrder = { 
            buyer: {name, lastName ,phone, email},
            items: cart,
            total: getTotal(cart),
            fecha: hoyFecha()
        };
        
        const db = getFirestore();
        db.collection("orders")
        .add(newOrder)
        .then((res)=> {
            navigate(`/thanks/${res.id}`)
        })
        //.catch((err) => console.log(err))
        clearAll();
    }
    return(
    <div className="card mt-3 mb-5" id="cardUserData">
        <h2 className="my-3">Introduzca sus datos</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" placeholder="Escriba su nombre" className="form-control" value={name} onChange={(e)=> {setName(e.target.value); setHidden(true) }}/>
            
            <label htmlFor="name">Apellido</label>
            <input type="text" id="lastName" name="lastName" placeholder="Escriba su apellido" className="form-control" value={lastName} onChange={(e)=> {setLastName(e.target.value); setHidden(true) }}/>
            
            <label htmlFor="e-mail">E-mail</label>
            <input type="text" id="email" name="email" placeholder="Escriba su mail" className="form-control" value={email} onChange={(e)=> {setEmail(e.target.value); setHidden(true) }}/>

            <label htmlFor="e-mail">Confirmación E-mail</label>
            <input type="text" id="confirmacionEmail" name="confirmacionEmail" placeholder="Vuelva a escribir su mail" className="form-control" value={confirmEmail} onChange={(e)=> {setConfirmEmail(e.target.value); e.target.value !== email?
                (setDiff(false)) : (setDiff(true)); setHidden(true) }}/>

            <div className="alert alert-danger" hidden={diff} role="alert" id="alertaDatos">Los mails deben coincidir!</div>

            <label htmlFor="phone">Telefono</label>
            <input type="number" id="phone" name="phone" placeholder="Escriba su numero de telefono" className="form-control" value={phone} onChange={(e)=> {setPhone(e.target.value); setHidden(true) }}/>
            
            <input type="submit" value="Finalizar compra"  onClick={()=> (!name || !lastName || !phone) && setHidden(false)}  className="my-4 btn btn-primary"/>

            <div className="alert alert-danger" hidden={hidden} role="alert" id="alertaDatos">Ingresa los datos correspondientes!</div>
        </form>
    </div>)
}
export default UserData;