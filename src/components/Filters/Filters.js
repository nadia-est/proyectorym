import { Fragment } from "react";
import Filter from "../Filter/Filter";
import "./Filters.css"


export default function Filters({filterCharacter}) {

    return(
        <Fragment>
        <section className="row section-filters py-5">
          <div className="filters-area d-flex m-2 align-items-center">
              <h2>Filters</h2>
          </div>
         <form className="filtros">
            <Filter filterName="Alive" title="Character Alive" filterCharacter={filterCharacter}/>
            <Filter filterName="Dead" title="Character Dead" filterCharacter={filterCharacter}/>
            <Filter filterName="Female" title="Female" filterCharacter={filterCharacter}/>
            <Filter filterName="Male" title="Male" filterCharacter={filterCharacter}/>
            <Filter filterName="Unknown" title="Origin Unknown" filterCharacter={filterCharacter}/>
         </form>
         
         </section>

        </Fragment>
       
    )
}