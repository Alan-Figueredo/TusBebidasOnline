import Carousel from 'react-bootstrap/Carousel';
import "./Carrusel.css"
function Carrusel() {
    return (
        <Carousel fade id="carrusel">
            <Carousel.Item>
                <img
                    className="d-block w-100 carruselItem"
                    src="https://www.absolut.com/wp-content/uploads/ADAPTACION_WEB_DESKTOP-1.jpg?imwidth=1200"
                    alt="first slide"
                />
                <Carousel.Caption>
                    <h3>Absolut Pride</h3>
                    <p>por ricardo cavolo.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carruselItem"
                    src="https://bodegaelbarril.es/wp-content/uploads/2021/01/v4Banner_Home_Jack_Daniels.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carruselItem"
                    src="https://www.fernetbranca.com/wp-content/uploads/2016/07/section_background_02-1.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>TRES SORBOS</h3>
                    <p>un viaje único en su género destinado a forjar una relación nueva, vibrante e infinita.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carrusel;