import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCrown, faDove, faEnvelope, faHouse, faList, faMagnifyingGlass, faPlus, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";


function Menu () {
  return (
    <>
      <ul class="rounded nav flex-column bg-light vertical">
        <li class="nav-item">
            <a class="nav-link active menu-vertical" aria-current="page" href="#"><FontAwesomeIcon icon={faDove} />X</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active menu-vertical" aria-current="page" href="#"><FontAwesomeIcon icon={faHouse} /> Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link menu-vertical" href="#"><FontAwesomeIcon icon={faMagnifyingGlass} />  Explore</a>
        </li>
        <li class="nav-item">
          <a class="nav-link menu-vertical" href="#"><FontAwesomeIcon icon={faBell} /> Notifications </a>
        </li>
        <li class="nav-item">
          <a class="nav-link menu-vertical" href="#"><FontAwesomeIcon icon={faEnvelope} /> Menssages </a>
        </li>
        <li class="nav-item">
          <a class="nav-link menu-vertical" href="#"><FontAwesomeIcon icon={faList} /> Lists </a>
        </li>
        <li class="nav-item">
          <a class="nav-link menu-vertical" href="#"><FontAwesomeIcon icon={faUsers} /> Communities </a>
        </li>
        <li class="nav-item">
          <a class="nav-link menu-vertical" href="#"><FontAwesomeIcon icon={faDove} /> Premium</a>
        </li>
        <li class="nav-item">
          <a class="nav-link menu-vertical" href="#"><FontAwesomeIcon icon={faUser} /> Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link menu-vertical" href="#"><FontAwesomeIcon icon={faPlus} /> More</a>
        </li>
        <button type="button" class="btn btn-primary rounded-pill btn-md mt-2 ms-6 mb-2 d-block mx-auto"> Post </button>
    </ul> 
    <div className="tw-followCard-perfil">
    <button type="buttonProfileMenu" class="btn btn-light rounded-pill btn-sm mt-4 ms-6 d-flex mx-auto buttonProfileMenu"> 
      <img
      className='tw-followCard-perfil'
          alt= "@gabybit" 
          src="https://unavatar.io/github/gabybitdeveloper"/>
        <div className='tw-followCard-info'>
          <strong>Gaby Bit</strong>
          <br></br>
          <span
          className='tw-followCard-infoUserName'>@gabybit                     </
          span>
          <strong>...</strong>
        </div>
    </button>
    </div>
  </>
    );
  }

export default Menu;