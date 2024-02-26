import Navegation from "../../components/Navagation"
import "./Contact.css"

export default function Contact(){
    return(
      
        <div >
            <Navegation hoja="Contact"/>
            <div className="contenedorformulario container-fluid ">
            <main className="formulario">
                <h1 className="row colorBLue py-5">Contact</h1>
                    <p className="textocontact row colorBLue subtitle">Leave us your information so we can contact you</p>
                <form action="creo usuario en formspree y pego el link si quiero...">
                    <div className="row g-3">
                        <div className="col">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control"  aria-label="First name" id="name"/>
                        </div>
                        <div className="col">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control"  aria-label="Last name" id="email"/>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label ">Message</label>
                        <textarea className="form-control" id="message" rows="3"></textarea>
                    </div>
                    <input className="boton " type="submit" value="Send"/>
                </form>
            </main>
        </div>
        </div>
    )
}
