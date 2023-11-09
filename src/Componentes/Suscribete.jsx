import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBookmark, faClock, faCrown, faDove, faEnvelope, faFaceSmileWink, faGear, faGift, faHouse, faImage, faList, faLocationDot, faMagnifyingGlass, faPerson, faPlus } from "@fortawesome/free-solid-svg-icons";

function Suscribete() {
  return (
    <>
        <div class="input-group mb-3">
            <span class="input-group-text">
            <FontAwesomeIcon icon={faMagnifyingGlass} />  </span>
            <input type="search" class="form-control" id="exampleInputSearch" placeholder="Buscar" aria-describedby="searchHelp" /> 
        </div>
        <div class="container">
            <h4>Suscríbete a Premium</h4>
            <h6>Suscríbete para desbloquear nuevas funciones y, si eres elegible, recibir un pago de cuota de ingresos por anuncios. </h6>
            <button type="button" class="btn btn-dark rounded-pill btn-lg"> Suscribirse </button>
            <br></br>
            <h4>A quién seguir</h4>
            @elpais <button type="button" class="btn btn-dark rounded-pill btn-sm mt-4 ms-4"> Seguir </button>

            <br></br>
            <h4>Tendencias de España</h4>
            #OrangeBlackFriday
        </div>
    </>
  )
}

export default Suscribete