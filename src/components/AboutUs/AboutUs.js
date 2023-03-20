import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./AboutUs.css"
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { RxRocket } from "react-icons/rx"
import { BiTrophy } from "react-icons/bi"
import us from "../../images/us.png"
const AboutUs = () => {
    return (
        <section id="aboutUs">
            <div className="container my-3">
                <div className="row">
                    <div className="col-sm-7 col-12 mb-3">
                        <h2 className="sobreNosotros ">Sobre Nosotros</h2>
                        <p className="mt-2 col-12 col-sm-9"> At ultrices mi tempus imperdiet nulla malesuada. Vel eros donec ac odio tempor. Commodo nulla facilisi nullam vehicula ipsum a. Sit amet purus gravida quis. Id leo in vitae turpis massa.
                            sed elementum tempus egestas. Augue neque gravida in fermentum et.
                        </p>
                        <p className="mt-2 col-12 col-sm-9"> At ultrices mi tempus imperdiet nulla malesuada. Vel eros donec ac odio tempor. Commodo nulla facilisi nullam vehicula ipsum a. Sit amet purus gravida quis. Id leo in vitae turpis massa.</p>
                    </div>
                    <div className="col-sm-5 col-12 mb-3">
                        <img src={us} className="img-fluid" style={{ marginTop: "100px" }} alt="us" />
                    </div>
                </div>
                <hr />
                <div className="row mt-5">
                    <div className="col-sm col-12 text-center">
                        <AiOutlineDeliveredProcedure className="iconos" />
                        <p className="mt-4 col-7 mx-auto">lorem ipsum asdkopas. Augue neque gravida in fermentum et.</p>
                    </div>
                    <div className="col-sm col-12 text-center">
                        <RxRocket className="iconos" />
                        <p className="mt-4 col-7 mx-auto">lorem ipsum asdkopas. Augue neque gravida in fermentum et.</p>
                    </div>
                    <div className="col-sm col-12 text-center">
                        <BiTrophy className="iconos" />
                        <p className="mt-4 col-7 mx-auto">lorem ipsum asdkopas. Augue neque gravida in fermentum et.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutUs;