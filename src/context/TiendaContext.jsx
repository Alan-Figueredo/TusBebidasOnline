import { createContext, useContext, useEffect, useState } from "react";
import { Item } from "../components/Item/Item";
import { getFirestore } from "../firebase";

export const TiendaContext = createContext([]);

export const TiendaContextProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [sliceParam, setSliceParam] = useState(6)
    const nombreCategorias = [];

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
    //<Metodos de ordenamiento
    const ordenarMayor = (array) => {
        array.sort((a, b) => {
            if (a.name < b.name) {
                return -1
            }
            else if (a.name > b.name) {
                return 1
            }
            else {
                return 0
            }
        })
    }
    const ordenarMenor = (array) => {
        array.sort((a, b) => {
            if (a.name < b.name) {
                return 1
            }
            else if (a.name > b.name) {
                return -1
            }
            else {
                return 0
            }
        })
    }
    const ordenarPrecioMayor = (array) => {
        array.sort(function (a, b) { return a.price - b.price })
    }
    const ordenarPrecioMenor = (array) => {
        array.sort(function (a, b) { return b.price - a.price })
    }

    const handleSort = (value) => {
        switch (value) {
            case 1:
                ordenarMayor(data); setData([...data])
                break;
            case 2:
                ordenarMenor(data); setData([...data])
                break;
            case 3:
                ordenarPrecioMayor(data); setData([...data])
                break;
            case 4:
                ordenarPrecioMenor(data); setData([...data])
                break;
            default:
                console.log("ok")
        }
    }
    //Metodos de ordenamiento/>

    //Mostrar mas

    const cargarMas = (prod) => {
        if (sliceParam >= 8 + prod.length) {
            return (
                prod.slice(0, sliceParam).map((product) => {
                    setSliceParam(6)
                    return (
                        <div className="col-6 col-sm-3">
                            <Item key={product.id} product={product} id={product.id} />
                        </div>
                    )
                }

                ))
        } else {
            return (
                prod.slice(0, sliceParam).map((product) => {
                    return (
                        <div className="col-11 m-auto m-sm-0 col-sm-3">
                            <Item key={product.id} product={product} id={product.id} />
                        </div>
                        // <img src={publicacion.media_url} className="me-1 mb-1" alt="g" id={publicacion.id} style={{ height: "29%", width: "32%" }} onClick={() => { setHandlePost(publicacion); abrir() }} />
                    )
                }))
        }
    }

    const filtrado = () => {
        data.forEach(element => {
            nombreCategorias.push({ name: element.category, id: element.categoryID });
        });
        const nombreCategoriasMap = nombreCategorias.map(elemento => {
            return [elemento.name, elemento]
        })
        const nombreCategoriasArr = new Map(nombreCategoriasMap);
        const unicos = [...nombreCategoriasArr.values()];
        return unicos
    }
    return (
        <TiendaContext.Provider value={{ isLoading, data, filtrado, cargarMas, handleSort }}>
            {children}
        </TiendaContext.Provider>
    )
}
export const useTiendaContext = () => useContext(TiendaContext);