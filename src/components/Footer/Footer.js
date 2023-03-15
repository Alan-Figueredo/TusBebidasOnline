import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "../Footer/Footer.css"
export const Footer =()=>{
    return(
            <footer className="bg-dark text-white mt-5 " id="footer">
                <div className="row w-100">
                    <div className="col-sm-4 col-12 text-center">
                        <h2 className="mt-4 mb-3" id="tituloFooter">TusBebidasOnline</h2>
                    </div>
                    <div className="col-sm-4 col-12 text-center">
                        <h2 className="mt-4 mb-3">Contacto</h2>
                        <FontAwesomeIcon icon={faInstagram} className="iconos" />
                        <FontAwesomeIcon icon={faWhatsapp} className="iconos"/>
                        <FontAwesomeIcon icon={faFacebook} className="iconos"/>
                        <FontAwesomeIcon icon={faEnvelope} className="iconos"/>
                    </div>
                    <div className="col-sm-4 col-12 text-center">
                        <h2 className="mt-4 mb-3">Horarios</h2>
                        <p>⚪Lun a vie: 9-18hs</p>
                    </div>
                </div>
                <div className="row w-100">
                    <div className="col">
                        <p className="text-center">©2022 Copyright TusBebidasOnline</p>
                    </div>
                </div>
            </footer>
    )
}