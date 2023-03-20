import "bootstrap/dist/css/bootstrap.min.css"
import { Card, Placeholder } from "react-bootstrap";
import { Item } from "../Item/Item";
import { useTiendaContext } from "../../context/TiendaContext";

function ListaProductos({ filteredProducts }) {
    const { isLoading, data } = useTiendaContext()
    const filtered = filteredProducts.map(prod => <div className="col-12 col-sm-3" ><Item key={prod.id} product={prod} id={prod.id} /></div>);



    if (isLoading) {
        let card = []
        for (let i = 0; i < 8; i++) {
            (
                card.push(
                    <div className="col-sm-3 col-12" style={{ marginBottom: "5%" }}>
                        <div className="text-center mt-3 card mb-2">
                            <div className="card-body">
                                <Placeholder className="col-sm-11 col-12 text-center" as="p" animation="wave">
                                    <Card.Img className="col-sm-6 mx-sm-3  mx-0 col-12" variant="top" style={{ height: "13vh" }}
                                        src="https://vignette.wikia.nocookie.net/horadeaventura/images/6/6e/Gris.jpg/revision/latest?cb=20140117225534&path-prefix=es" />
                                </Placeholder>
                                <hr />
                                <Placeholder as="p" animation="wave">
                                    <Placeholder xs={8} />
                                </Placeholder>
                                <Placeholder as="p" animation="wave">
                                    <Placeholder xs={4} />
                                </Placeholder>
                            </div>
                        </div>
                    </div>)
            )
        }
        return (card)

    } else {
        return (
            <div className="row w-100 m-auto" style={{ marginBottom: "5%" }}>
                {!filtered ? (data.map((product) => (
                    <div key={product.id} >
                        {filtered}
                    </div>
                ))) : filtered}
            </div>
        )
    }
}
export default ListaProductos;