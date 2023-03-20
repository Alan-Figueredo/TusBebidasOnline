import { createContext, useContext, useState } from "react";
export const AltPagContext = createContext([]);

export const AlturaPaginaProvider = ({ children }) => {
    const [modalShow, setModalShow] = useState(true);
    const [ubicacionPrincipal, setUbicacionPrincipal] = useState(window.pageYOffset);
    const [desplazamiento_Actual, setDesplazamiento_Actual] = useState(null)

    const cerrarPopUp = () => {
        setModalShow(false)
    }

    window.onscroll = function () {
        setDesplazamiento_Actual(window.pageYOffset);
        setUbicacionPrincipal(desplazamiento_Actual);
    }

    return (
        <AltPagContext.Provider value={{ ubicacionPrincipal, desplazamiento_Actual, setModalShow, modalShow, cerrarPopUp }}>
            {children}
        </AltPagContext.Provider>
    )
}
export const useAltPag = () => useContext(AltPagContext);