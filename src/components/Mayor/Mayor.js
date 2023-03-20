import { useAge } from "../../context/AgeContext";

export const Mayor = () => {
    const { setMayor} = useAge();
    const {hidden, setHidden} = useAge();
    return (
        <div className="card mt-5 px-3 text-center" id="card" hidden={hidden}>
            <h2 className="mt-3">Para ingresar a la pagina debes ser mayor de 18</h2>
            <p className="mb-5" id="mayor">¿Eres mayor a 18?</p>
            <button className="mb-2 btn btn-primary botonSiNo" onClick={
                (evt) => {
                    evt.preventDefault();
                    setMayor(true)
                    setHidden(true);
                }
            }
            >Si</button>
            <button className="mb-5 btn btn-primary botonSiNo" onClick={
                (evt) => {
                    evt.preventDefault();
                    setMayor(false)
                    setHidden(true);
                }
            }
            >no</button>
        </div>
    )
}