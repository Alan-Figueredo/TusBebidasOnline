import "../ItemCount/ItemCount.css"
export const ItemCount =({sumar, restar, disabled ,counter})=>{
    return(
        <div className="row mb-2 tamaño" id="divContador">
            <button className="btn btn-primary col-sm-2 m-auto" id="restar" onClick={restar}>-</button>
            <p  className="text-center col-sm-2 my-auto">{counter}</p>
            <button className="btn btn-primary col-sm-2 m-auto"  id="sumar" onClick={sumar} disabled={disabled}>+</button>
        </div>
    );
    
}