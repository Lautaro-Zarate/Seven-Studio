const Servicios = () => {
    return(
        <div>
            <main>
                <section className="services-container">
                <h2 className="title-servicios">¿Que hacemos?</h2>
                <div className="services-container-secondary">
                    <div className="cards-services cards1">
                        <img src="/dw.png" alt="ICONO-DESARROLLO-WEB"/>
                        <div className="cards-services-secondary">
                            <h3 className="title-services-card">Desarrollo web de landing pages</h3>
                            <ul>
                                <li>Diseño único y profesional.</li>
                                <li>Rápido, funcional y optimizado.</li>
                                <li>Adaptado a todos los dispositivos.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="cards-services cards2">
                        <img src="/uiux.png" alt="ICONO-DISEÑO UX/UI"/>
                        <div className="cards-services-secondary">
                            <h3 className="title-services-card">Diseno UI/UX</h3>
                            <ul>
                                <li>Interfaces atractivas y fáciles de usar.</li>
                                <li>Prototipos interactivos personalizados.</li>
                                <li>Experiencia de usuario optimizada.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="cards-services cards3">
                        <img src="/e-commerce.png" alt="ICONO E-COMMERCE"/>
                        <div className="cards-services-secondary">
                            <h3 className="title-services-card">E-commerce</h3>
                            <ul>
                                <li>Tiendas online seguras y escalables.</li>
                                <li>Experiencia de compra intuitiva.</li>
                                <li>Diseño enfocado en aumentar ventas.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="cards-services cards4">
                        <img src="/mantenimiento.png" alt="ICONO MANTENIMIENTO Y SOPORTE"/>
                        <div className="cards-services-secondary">
                            <h3 className="title-services-card">Soporte y mantenimiento</h3>
                            <ul>
                                <li>Actualizaciones constantes.</li>
                                <li>Solución rápida de problemas.</li>
                                <li>Monitoreo y seguridad 24/7.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="cards-services cards5">
                        <img src="/branding.png" alt="ICONO BRANDING"/>
                        <div className="cards-services-secondary">
                            <h3 className="title-services-card">Branding y diseno gráfico</h3>
                            <ul>
                                <li>Identidad visual impactante.</li>
                                <li>Material promocional atractivo.</li>
                                <li>Coherencia en todos los diseños.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        </div>
    )
}
export default Servicios;