import React, { useEffect, useState } from 'react';
import { Navbar } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";
import { BsCart3 } from 'react-icons/bs';
import { FaBars } from "react-icons/fa";
import "./NavBar.css";
import { SideNavBar } from './SideNavBar';
import { useAltPag } from '../../context/AlturaContext';
import { useCart } from '../../context/CartContext';

export const NavBar = () => {
    const { ubicacionPrincipal, desplazamiento_Actual } = useAltPag();
    const [AbrirCerrar, setAbrirCerrar] = useState(false)
    const { handleShow, cantidadCarrito } = useCart();
    const navigate = useNavigate();

    useEffect(() => {
        let DivNav = document.getElementById('DivNav')
        if (DivNav) {
            if (ubicacionPrincipal >= desplazamiento_Actual) {
                DivNav.style.top = '0';
            } else {
                DivNav.style.top = '-105px';
            }
        }
    })
    function handleClick() {
        setAbrirCerrar(!AbrirCerrar)
    }
    function handleNavigate(){
        navigate("/cart")
    }
    if (window.innerWidth <= 768) {
        return (
            <div className="py-sm-1 py-2 DivNav">
                <Navbar>
                    <button className="hamburger col-1" id="hamburger" onClick={(handleClick)}>
                        <FaBars />
                    </button>
                    <Link to="/" className="nombreH1 ms-2"><h1 >TusBebidasOnline</h1></Link>
                    <><BsCart3 className="navCart mt-1 pb-sm-0 pb-1 " style={cantidadCarrito === 0 ? { cursor: "pointer", marginLeft: "auto", marginRight: "22px" } : { cursor: "pointer", marginLeft: "auto", marginRight: "15px" }} onClick={handleShow} />{cantidadCarrito === 0 ? "" : <span className="translate-middle badge rounded-pill" style={{ cursor: "pointer", backgroundColor: "goldenrod" }} onClick={handleShow}>{cantidadCarrito}</span>}</>
                </Navbar>
                <SideNavBar abrir={AbrirCerrar} handle={handleClick} />
            </div>
        )
    } else {
        return (
            <div className="DivNav">
                <Navbar className="d-flex flex-row w-100">
                    <Link to="/" className="nombreH1 ms-5"><h1 >TusBebidasOnline</h1></Link><div>

                    </div>
                    <ul className={`nav nav-ul col-sm-7 col-8 ${AbrirCerrar}`} id="ListaNav">
                        <li className=" ms-5">
                            <Link to="aboutUs" className=" links" onClick={handleClick} >Sobre nosotros</Link>
                        </li>
                        <li className=" ms-5">
                            <Link to="tienda" className=" links" onClick={handleClick}>Tienda</Link>
                        </li>
                    </ul>
                    <><BsCart3 className="navCart" style={{ cursor: "pointer", marginLeft: "21vh" }} onClick={handleNavigate} />{cantidadCarrito === 0 ? "" : <span className="translate-middle badge rounded-pill" style={{ cursor: "pointer", backgroundColor: "goldenrod" }} onClick={handleShow}>{cantidadCarrito}</span>}</>
                </Navbar>
            </div>
        )
    }

}