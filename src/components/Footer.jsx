
const Footer = () => {
return (
    <footer className="footer">
        <div className="footer-container">
        {/* Logo y descripción */}
        <div className="footer-section">
            <img src="./public/brand.png" alt="Logo Footer" className="logo-footer"/>
            <h2 className="footer-logo">Agencia Web</h2>
            <p>Desarrollamos soluciones digitales para potenciar tu negocio.</p>
        </div>
        {/* Redes sociales */}
        <div className="footer-section">
            <h3>Síguenos</h3>
            <div className="social-icons">
                <a href="https://www.instagram.com/seven.studio.design/"><img src="./public/ico-ig.svg" alt="ICONO INSTAGRAM" className="ico-footer"/></a>
                <a href="#"><img src="./public/ico-lk.svg" alt="ICONO LINKEDIN" className="ico-footer"/></a>
                <a href="#"><img src="./public/ico-fb.svg" alt="ICONO FACEBOOK" className="ico-footer"/></a>
            </div>
        </div>
    </div>

      {/* Derechos de autor */}
    <div className="footer-bottom">
    © {new Date().getFullYear()} Agencia Web. Todos los derechos reservados.
    </div>
    </footer>
);
};

export default Footer;
