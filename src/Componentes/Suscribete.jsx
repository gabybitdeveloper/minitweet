import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBookmark, faClock, faCrown, faDove, faEnvelope, faFaceSmileWink, faGear, faGift, faHouse, faImage, faList, faLocationDot, faMagnifyingGlass, faPerson, faPlus, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";

function Suscribete() {
  return (
    <>
        <div class="input-group mb-3">
            <span class="input-group-text">
            <FontAwesomeIcon icon={faMagnifyingGlass} />  </span>
            <input type="search" class="form-control-search" id="exampleInputSearch" placeholder="Buscar" aria-describedby="searchHelp" /> 
        </div>
        <div class="cajita-suscribete">
            <h4>Suscríbete a Premium</h4>
            <h6>Suscríbete para desbloquear nuevas funciones y, si eres elegible, recibir un pago de cuota de ingresos por anuncios. </h6>
            <button type="button" class="btn btn-dark rounded-pill btn-md mb-2"> Suscribirse </button>
        </div>
            <br></br>
        <div class="cajita-seguir">
            <h4>A quién seguir</h4>
            <h6>El País</h6>
            @elpais_espana
            <button type="button" class="btn btn-dark rounded-pill btn-sm mt-4 ms-4 mb-2"> Seguir </button>
            <h6>LINKIN PARK</h6>
            @linkinpark
            <button type="button" class="btn btn-dark rounded-pill btn-sm mt-4 ms-4 mb-2"> Seguir </button>
            <h6>Miguel Ángel Durán</h6>
            @midudev
            <button type="button" class="btn btn-dark rounded-pill btn-sm mt-4 ms-4 mb-2"> Seguir </button>
        </div>
            <br></br>
        <div class="tendencias">
            <h4>Tendencias de España</h4>
            #OrangeBlackFriday
            Descuentos increíbles
            <FontAwesomeIcon icon={faWandMagicSparkles} /> Promocionado por Orange España
        </div>
        
    </>
  )
}

export default Suscribete