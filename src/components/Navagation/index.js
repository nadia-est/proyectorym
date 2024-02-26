import {Link} from 'react-router-dom';

import "./Navegation.css";

export default function Navegation({hoja}){

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary active Arriba">
            <div className="container-fluid">
                <Link to="/" className='text-decoration-none'>
                    <h1 className="navbar-brand titulo" >Rick & Morty</h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className={hoja === "Characters" ? "nav-link active":"nav-link "} aria-current="page" >
                           <Link to="/characters" className={hoja === "Characters" ? "text-decoration-none":"text-decoration-none titulo"}> Characters</Link>
                        </li>
                        <li className={hoja === "Contact" ? "nav-link active":"nav-link "} >
                            <Link to="/contact" className={hoja === "Contact" ? "text-decoration-none":"text-decoration-none titulo"}>Contact</Link>
                        </li>
                    
                    </ul>
                </div>
            </div>
            </nav>
    )
}
 

