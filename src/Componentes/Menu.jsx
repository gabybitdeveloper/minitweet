import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBookmark, faClock, faCrown, faDove, faEnvelope, faFaceSmileWink, faGear, faGift, faHouse, faImage, faList, faLocationDot, faMagnifyingGlass, faPerson, faPlus } from "@fortawesome/free-solid-svg-icons";



function Menu () {
  return (
    <>
      <ul class="nav flex-column dark bg-dark">
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
        <button type="button" class="btn btn-outline-light rounded-pill btn-sm mt-4 ms-4 d-flex justify-content-center"> Postear </button>
    </ul> 
    <img src="shiny-articuno" alt="@gabybit" />
  </>
    );
  }

export default Menu;