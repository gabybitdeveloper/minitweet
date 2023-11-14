import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faFaceSmileWink, faGear, faGift, faImage, faList, faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Muro() {
  return (
<>
  <div class= "caja1">
    <button type="button" class="btn btn-light btn-lg botonParati"><strong>Para ti</strong></button>
    <button type="button" class="btn btn-light btn-lg botonSiguiendo"><strong>Siguiendo</strong></button>
    <button type="button" class="btn btn-light rounded-pill btn-sm mt-2 ms-4 botonGear"><FontAwesomeIcon icon={faGear} /> </button>
  </div>
  <div class= "caja2">
  <button type="button" class="btn btn-light rounded-pill btn-md mt-2 ms-6 mb-4"> 
      <img
      className='tw-followCard-perfil'
          alt= "@gabybit" 
          src="https://unavatar.io/github/gabybitdeveloper"/>
    </button>
    <label for="publicar" class="form-label">
      <h5>
      ¡¿Qué está pasando?!
      </h5>
      </label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <button type="button" class="btn btn-outline-primary rounded-pill btn-sm mt-4 ms-4"><FontAwesomeIcon icon={faImage} /> </button>
    <button type="button" class="btn btn-outline-primary rounded-pill btn-sm mt-4 ms-4"><FontAwesomeIcon icon={faGift} /> </button>
    <button type="button" class="btn btn-outline-primary rounded-pill btn-sm mt-4 ms-4"><FontAwesomeIcon icon={faList} /> </button>
    <button type="button" class="btn btn-outline-primary rounded-pill btn-sm mt-4 ms-4"><FontAwesomeIcon icon={faFaceSmileWink} /> </button>
    <button type="button" class="btn btn-outline-primary rounded-pill btn-sm mt-4 ms-4"><FontAwesomeIcon icon={faClock} /> </button>
    <button type="button" class="btn btn-outline-primary rounded-pill btn-sm mt-4 ms-4"><FontAwesomeIcon icon={faLocationDot} /> </button>
    <button type="button" class="btn btn-primary rounded-pill btn-sm mt-4 ms-4 mb-4"> Postear </button>
  </div>
  <br></br>

    Publicaciones
</>
  )
}

export default Muro