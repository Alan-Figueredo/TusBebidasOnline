import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase/index";
import { Item } from "../Item/Item";
import imagen from "../../images/Loading.gif"
import "../Categories/Categories.css"
import { BarraCategorias } from "./BarraCategorias";
import { useCart } from "../../context/CartContext";

const Categories = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const { categoria } = useCart()
    const { categoryID } = useParams();
    useEffect(() => {

        const db = getFirestore()
        let productsCollection;
        if (categoryID) {
            productsCollection = db.collection("productos")
                .where("categoryID", "==", Number(categoryID));
        } else {
            productsCollection = db.collection("productos")
        }

        const getDataFromFirestore = async () => {
            setIsLoading(true);
            try {
                const response = await productsCollection.get();
                setData(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

            } finally {
                setIsLoading(false);
            }
        }
        getDataFromFirestore();
    }, [categoryID]);
    if (isLoading) {
        return <div className="centrado"><img src={imagen} alt="loading" /></div>
    } else {
        return (
            <div div className = "container" id = "containerCategories" >
                <BarraCategorias />
                <h1 className="titulo">Nuestra selección de {categoria}</h1>
                <div className="row">
                    {data.map((product) =>
                        <div className="col-sm-3 col-12">
                            <Item key={product.key} product={product} />
                        </div>
                    )}
                </div>
            </div >

        )
    }

}
export default Categories;