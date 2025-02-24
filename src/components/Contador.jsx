import CountUp from "react-countup";
const Contador = () => {
    return(
        <div className="contador-container">
            <div className="cards-contador-container">
                <div className="card-contador">
                    <h2>Proyectos realizados</h2>
                    <span className="number">+
                        <CountUp end="50" duration="5"/>
                    </span>
                </div>
                <div className="card-contador">
                    <h2>Años de experiencia</h2>
                    <span className="number">+
                        <CountUp end="2" duration="7"/>
                    </span>
                </div>
                <div className="card-contador">
                    <h2>Clientes satisfechos</h2>
                    <span className="number">+
                    <CountUp end="30" duration="5"/>
                    </span>
                </div>
                <div className="card-contador">
                    <h2>Tecnologías</h2>
                    <span className="number">+
                        <CountUp end="10" duration="7"/>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Contador;