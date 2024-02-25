import {Link} from 'react-router-dom';

import './BotonInicio.css'

export default function BotonInicio({nombreBoton,pasaje}){
    return(
     
        <li className= "nav-item" >
         <Link className="nav-link btn-inicio "to={pasaje}>{nombreBoton}</Link>
        </li>
       
    )
}