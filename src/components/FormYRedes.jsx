import { useState } from "react";
import emailJs from "@emailjs/browser"
import {ToastContainer,toast} from "react-toastify";
const FormYRedes = () => {
    const numero = 543875898903;
    const mensaje = "¡Hola👋! Me interesa conocer más sobre algunos de tus servicios";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`
    const [formData, setFormData] = useState({
            name: "",
            email: "",
            mensaje: "",
        });
    
    const handlerChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    
    const mandarEmail = (e) => {
        e.preventDefault();
        
        emailJs.send(
            "service_7qod5qa",   // Service ID
            "template_bfywq5d",  // Template ID
            formData,
            "aX8K5q0PFeEPl7TZy"  // Public Key
        )
        .then((res) => {
            console.log("Mensaje Enviado", res);
            toast.success('El mensaje se ha enviado correctamente', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            setFormData({
                name: "",
                email: "",
                mensaje: "",
            })
        })
        .catch((err) => console.log("Su mensaje no pudo ser enviado", err))
    };
return(
        <div className="container-formyredes">
            <h2 className="title-servicios">Unete a nuestras redes</h2>
            <p>Puedes encontrarnos en nuestras redes y hablar directamente con nosotros:</p>
            <div className="redes-container">
                <div className="card-redes">
                    <a href="https://www.instagram.com/seven.studio.design/" target="_blank">
                        <img src="../public/ico-ig.svg" alt="CUENTA DE INSTAGRAM" className="redes-img"/>
                    </a>
                    <h3>Instagram</h3>
                </div>
                <div className="card-redes">
                    <a href={url} target="_blank">
                        <img src="../public/ico-wpp.svg" alt="CUENTA DE WPP" className="redes-img"/>
                    </a>
                    <h3>Whatsapp</h3>
                </div>
            </div>
            <div>
                <form onSubmit={mandarEmail}>
                    <h3>Contáctanos</h3>
                    <p>¿Tienes una idea en mente o necesitas ayuda con tu sitio web? Déjanos un mensaje y te responderemos lo antes posible.</p>
                    <label>Nombre
                        <input type="text" placeholder="Ingrese su nombre" name="name" required value={formData.name} onChange={handlerChange}/>
                    </label>
                    <label>Correo
                        <input type="email" placeholder="Ingrese su Correo" name="email" required value={formData.email} onChange={handlerChange}/>
                    </label>
                    <label>Mensaje
                        <textarea placeholder="Ingrese su comentario" name="mensaje" required value={formData.mensaje} onChange={handlerChange}></textarea>
                    </label>
                    <button type="submit" className="btn-form">Enviar</button>
                </form>
                <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                />
            </div>
        </div>
    )
}
export default FormYRedes;