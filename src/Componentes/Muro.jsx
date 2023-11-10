import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBookmark, faClock, faCrown, faDove, faEnvelope, faFaceSmileWink, faGear, faGift, faHouse, faImage, faList, faLocationDot, faMagnifyingGlass, faPerson, faPlus } from "@fortawesome/free-solid-svg-icons";

function Muro() {
  return (
<>
  <div class= "caja1">
    <button type="button" class="btn btn-light btn-lg">Para ti</button>
    <button type="button" class="btn btn-light btn-lg">Siguiendo</button>
    <button type="button" class="btn btn-light rounded-pill btn-sm mt-2 ms-4 "><FontAwesomeIcon icon={faGear} /> </button>
  </div>
  <div class= "caja2">
    <label for="publicar" class="form-label">¡¿Qué está pasando?!</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <button type="button" class="btn btn-outline-primary rounded-pill btn-sm mt-4 ms-4"><FontAwesomeIcon icon={faImage} /> </button>
    <button type="button" class="btn btn-outline-primary rounded-pill btn-sm mt-4 ms-4"><FontAwesomeIcon icon={faGift} /> </button>
    <button type="button" class="btn btn-outline-primary rounded-pill btn-sm mt-4 ms-4"><FontAwesomeIcon icon={faList} /> </button>
    <button type="button" class="btn btn-outline-primary rounded-pill btn-sm mt-4 ms-4"><FontAwesomeIcon icon={faFaceSmileWink} /> </button>
    <button type="button" class="btn btn-outline-primary rounded-pill btn-sm mt-4 ms-4"><FontAwesomeIcon icon={faClock} /> </button>
    <button type="button" class="btn btn-outline-primary rounded-pill btn-sm mt-4 ms-4"><FontAwesomeIcon icon={faLocationDot} /> </button>
    <button type="button" class="btn btn-dark rounded-pill btn-sm mt-4 ms-4 mb-4"> Postear </button>
  </div>
  <br></br>

    Publicaciones
</>
  )
}

export default Muro