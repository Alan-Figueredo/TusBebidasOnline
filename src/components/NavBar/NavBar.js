import "bootstrap/dist/css/bootstrap.css";
import CartWidget from "./../CartWidget/CartWidget.js";
import Cart from "../../images/Cart.png"
import { Link, NavLink } from "react-router-dom";
import "../../components/NavBar/NavBar.css"
import { Dropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getFirestore } from "../../firebase/index";
import "../NavBar/NavBar.css"

function NavBar(){
    const [data, setData] = useState([])
    const [dropdown, setDropdown] = useState(false);

    const nombreCategorias = [];
    data.forEach(element => {
        nombreCategorias.push({name: element.category, id: element.categoryID});
    });

    const nombreCategoriasMap = nombreCategorias.map(elemento=>{
        return [elemento.name, elemento]
    })
    const nombreCategoriasArr = new Map(nombreCategoriasMap);
    const unicos = [...nombreCategoriasArr.values()];

    const abriCerrarDrop = ()=>{
        setDropdown(!dropdown)
    }

    useEffect(() => {
        const db = getFirestore() 
        const productsCollection = db.collection("productos");
        const getDataFromFirestore = async ()=>{
            const response = await productsCollection.get();
            setData(response.docs.map((doc)=> ({...doc.data(), id: doc.id})));
        }
        getDataFromFirestore();
    }, []);
    return(
        <div className="py-3 navBarStyle">
            <div className="row">
                <div className="col-12 col-sm text-center mr-5">
                    <Link to="/" id="linkH1"><h1 id="nombreH1" >TusBebidasOnline</h1></Link>
                </div>
                <div className="col-sm col-12 text-center   mt-2">
                    <NavLink to="/" className="vinculo">Inicio</NavLink>
                </div>
                <Dropdown isOpen={dropdown} toggle={abriCerrarDrop} className="col-sm col-12 text-center my-auto" >
                        <Dropdown.Toggle  id="dropDown" >
                            <span className="vinculo">Categorias</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {unicos.map((product)=>(
                                <Dropdown.Item id="dropItem">
                                    <NavLink to={"category/"+product.id} className="nombresCategorias">{product.name}</NavLink>
                                </Dropdown.Item>
                            )
                            )}
                        </Dropdown.Menu>
                </Dropdown>
                <div className="col-sm col-12 text-center mt-2">
                    <NavLink to="/aboutUs" className="vinculo">Sobre Nosotros</NavLink>
                </div>
                <div className="col-sm col-12 text-center mt-sm-0 mt-3">
                    <Link to="/cart"><CartWidget Cart={Cart}/></Link>
                    
                </div>
                
            </div>
        </div>
    );
}
export default NavBar;