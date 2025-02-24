const Inicio = () => {
    const btnWhatsapp = () => {
    const numero = 543875898903;
    const mensaje = "¡Hola👋! Me interesa conocer más sobre algunos de tus servicios";
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`, "_blank")
}
    return(
        <div>
            <header className="header-container">
                <img src="public/brand.png" alt="Logo" className="brand"/>
                <h1>Desarrollo web</h1>
                <h2>En <b>Seven Studio</b> transformamos tus ideas en sitios web que destacan.</h2>
                <p className="p-header">Trabajamos contigo para desarrollar una página que refleje la esencia de tu marca y conecte con tus clientes</p>
                <div className="btn-container">
                <button className="btn-12" onClick={btnWhatsapp}><span>Contáctanos</span></button>
                </div>
            </header>
        </div>
    )
}
export default Inicio;