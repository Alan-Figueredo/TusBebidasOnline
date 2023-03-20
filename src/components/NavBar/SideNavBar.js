import { Offcanvas, Row } from "react-bootstrap"
import { Link } from "react-router-dom";

export const SideNavBar = ({ abrir, handle }) => {
    const AbrirCerrar = abrir;
    const handleClick = handle;
    return (
        <Offcanvas show={AbrirCerrar} onHide={handleClick} >
            <Offcanvas.Header closeButton closeVariant='white' style={{ height: "80px", backgroundColor:"grey" }}>
                <Link to="/" className="nombreH1"><h1 >TusBebidasOnline</h1></Link>
            </Offcanvas.Header>
            <hr className=' mt-0' />
            <Offcanvas.Body>
                <Row>
                    <ul style={{listStyle:"none", left:"0"}}>
                        <li className="nav-item ">
                            <Link to="aboutUs" className="nav-link item" style={{textDecoration:"none", color:"black"}} onClick={handleClick}>Sobre nosotros</Link>
                        </li>
                        <hr/>
                        <li className="nav-item ">
                            <Link to="tienda" className="nav-link item" style={{textDecoration:"none", color:"black"}} onClick={handleClick}>Tienda</Link>
                        </li>
                        <hr />
                    </ul>

                </Row>
            </Offcanvas.Body>
            <Row className='m-auto w-100 bg-dark' style={{ position: "absolute", bottom: "0px" }}>
                <div className='col-sm-12'>
                    <p className='text-center' style={{ color: "white" }}>©2022 Copyright TusBebidasOnline</p>
                </div>
            </Row>
        </Offcanvas>
    )
}