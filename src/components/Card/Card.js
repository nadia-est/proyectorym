import { useState } from 'react';

import Description from '../Description/Description';

import "./Card.css"

export default function Card({infoPersonaje}) {

    let [hide,setHide]=useState(true);

    const showMore=()=>{
        setHide(false)
    }

    return(
       <div className="rounded card p-2 d-flex flex-row gap-3">
        <div className='Tarjeta' >
            <img src={infoPersonaje.image}/>
            <h3>{infoPersonaje.name}</h3>
            <button className="btn btn-active align-self-end more" onClick={showMore}>Know More...</button>
        {

            hide === false? <Description status={infoPersonaje.status} especie={infoPersonaje.species} genero={infoPersonaje.gender} origen={infoPersonaje.origin.name} setHide={setHide}/>:''
        }

        </div>

        
      </div>
    )
    
}