import { useState } from "react";
import { useEffect } from "react";
import { getFirestore } from "../../firebase/index";
import { useNavigate } from "react-router";
import { Card, NavLink, Placeholder } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export const BarraCategorias = () => {
    let navigate = useNavigate();
    const [data, setData] = useState([])
    const nombreCategorias = [];
    const [isLoading, setIsLoading] = useState(true)
    const { setCategoria } = useCart()
    data.forEach(element => {
        nombreCategorias.push({ name: element.category, id: element.categoryID, img: element.img, category: element.category });
    });

    const nombreCategoriasMap = nombreCategorias.map(elemento => {
        return [elemento.name, elemento, elemento.img]
    })
    const nombreCategoriasArr = new Map(nombreCategoriasMap);
    const unicos = [...nombreCategoriasArr.values()];

    useEffect(() => {
        const db = getFirestore()
        const productsCollection = db.collection("productos");
        const getDataFromFirestore = async () => {
            const response = await productsCollection.get();
            setData(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setIsLoading(false)
        }
        getDataFromFirestore();
    }, []);
    if (window.innerWidth <= 768) {
        return (
            <div className="row w-100 justify-content-between">
                {unicos.map((filtro) => {
                    return (
                        <NavLink onClick={() => { navigate(`${filtro.id}`) }} className="col-sm  col-5 card mx-2 mb-4" style={{ height: "10vh" }}>
                            <img className="m-auto" style={{ height: "50px" }} alt={unicos.name} src={filtro.img} />
                            <p className="text-center">{filtro.name}</p>
                        </NavLink>
                    )
                })}
            </div>
        )
    }
    else if (isLoading) {
        return (
            <div className="row w-100">
                <div className="card col mx-2 mb-4" style={{ height: "15vh" }}>
                    <Placeholder className="text-center" as="p" animation="wave">
                        <Card.Img className="col-sm-6 mt-1 m-auto" variant="top" style={{ height: "100px" }} src="https://vignette.wikia.nocookie.net/horadeaventura/images/6/6e/Gris.jpg/revision/latest?cb=20140117225534&path-prefix=es" />
                        <Placeholder className="m-auto" xs={8} />
                    </Placeholder>
                </div>
                <div className="card col mx-2 mb-4" style={{ height: "15vh" }}>
                    <Placeholder className="text-center" as="p" animation="wave">
                        <Card.Img className="col-sm-6 mt-1 m-auto" variant="top" style={{ height: "100px" }} src="https://vignette.wikia.nocookie.net/horadeaventura/images/6/6e/Gris.jpg/revision/latest?cb=20140117225534&path-prefix=es" />
                        <Placeholder className="m-auto" xs={8} />
                    </Placeholder>
                </div>
                <div className="card col mx-2 mb-4" style={{ height: "15vh" }}>
                    <Placeholder className="text-center" as="p" animation="wave">
                        <Card.Img className="col-sm-6 mt-1 m-auto" variant="top" style={{ height: "100px" }} src="https://vignette.wikia.nocookie.net/horadeaventura/images/6/6e/Gris.jpg/revision/latest?cb=20140117225534&path-prefix=es" />
                        <Placeholder className="m-auto" xs={8} />
                    </Placeholder>
                </div>
                <div className="card col mx-2 mb-4" style={{ height: "15vh" }}>
                    <Placeholder className="text-center" as="p" animation="wave">
                        <Card.Img className="col-sm-6 mt-1 m-auto" variant="top" style={{ height: "100px" }} src="https://vignette.wikia.nocookie.net/horadeaventura/images/6/6e/Gris.jpg/revision/latest?cb=20140117225534&path-prefix=es" />
                        <Placeholder className="m-auto" xs={8} />
                    </Placeholder>
                </div>
                <div className="card col mx-2 mb-4" style={{ height: "15vh" }}>
                    <Placeholder className="text-center" as="p" animation="wave">
                        <Card.Img className="col-sm-6 mt-1 m-auto" variant="top" style={{ height: "100px" }} src="https://vignette.wikia.nocookie.net/horadeaventura/images/6/6e/Gris.jpg/revision/latest?cb=20140117225534&path-prefix=es" />
                        <Placeholder className="m-auto" xs={8} />
                    </Placeholder>
                </div>
                <div className="card col mx-2 mb-4" style={{ height: "15vh" }}>
                    <Placeholder className="text-center" as="p" animation="wave">
                        <Card.Img className="col-sm-6 mt-1 m-auto" variant="top" style={{ height: "100px" }} src="https://vignette.wikia.nocookie.net/horadeaventura/images/6/6e/Gris.jpg/revision/latest?cb=20140117225534&path-prefix=es" />
                        <Placeholder className="justify-content-center" xs={8} />
                    </Placeholder>
                </div>
            </div>
        )

    } else {
        return (
            <div className="row " style={{ justifyContent: "space-between" }}>
                {unicos.map((filtro) => {
                    return (
                        <div key={filtro.id} className="col-2"  onClick={(e)=>{setCategoria(filtro.category)}} >
                            <Link to={`/category/${filtro.id}`}  className="card shadow-sm my-3 category"   style={{ height: "19vh", color: "black", textDecoration: "none" }}>
                                <img value={filtro.category} className="m-auto" style={{ height: "100px" }} alt={unicos.name} src={filtro.img} />
                                <p className="text-center text-dark">{filtro.name}</p>
                            </Link>
                        </div>
                    )
                })}
            </div>
        )
    }

}