import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBookmark, faCrown, faDove, faEnvelope, faHouse, faList, faMagnifyingGlass, faPerson, faPlus } from "@fortawesome/free-solid-svg-icons";


function Menu () {
  return (
    <>
      <ul class="rounded nav flex-column bg-light vertical">
        <li class="nav-item">
            <a class="nav-link active menu-vertical" aria-current="page" href="#"><FontAwesomeIcon icon={faDove} />X</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active menu-vertical" aria-current="page" href="#"><FontAwesomeIcon icon={faHouse} /> Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link menu-vertical" href="#"><FontAwesomeIcon icon={faMagnifyingGlass} />  Explorar</a>
        </li>
        <li class="nav-item">
          <a class="nav-link menu-vertical" href="#"><FontAwesomeIcon icon={faBell} /> Notificaciones </a>
        </li>
        <li class="nav-item">
          <a class="nav-link menu-vertical" href="#"><FontAwesomeIcon icon={faEnvelope} /> Mensajes </a>
        </li>
        <li class="nav-item">
          <a class="nav-link menu-vertical" href="#"><FontAwesomeIcon icon={faList} /> Listas </a>
        </li>
        <li class="nav-item">
          <a class="nav-link menu-vertical" href="#"><FontAwesomeIcon icon={faBookmark} /> Guardados </a>
        </li>
        <li class="nav-item">
          <a class="nav-link menu-vertical" href="#"><FontAwesomeIcon icon={faCrown} /> Premium</a>
        </li>
        <li class="nav-item">
          <a class="nav-link menu-vertical" href="#"><FontAwesomeIcon icon={faPerson} /> Perfil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link menu-vertical" href="#"><FontAwesomeIcon icon={faPlus} /> Más opciones</a>
        </li>
        <button type="button" class="btn btn-primary rounded-pill btn-md mt-2 ms-6 mb-2 d-block mx-auto"> Postear </button>
    </ul> 
    <div className="tw-followCard-perfil">
    <button type="button" class="btn btn-light rounded-pill btn-md mt-2 ms-6 mb-4"> 
      <img
      className='tw-followCard-perfil'
          alt= "@gabybit" 
          src="https://unavatar.io/github/gabybitdeveloper"/>
        <div className='tw-followCard-info'>
          <strong>Gaby Bit</strong>
          <br></br>
          <span
          className='tw-followCard-infoUserName'>@gabybit</
          span>
          <br></br>
          <strong>...</strong>
        </div>
    </button>
    </div>
  </>
    );
  }

export default Menu;