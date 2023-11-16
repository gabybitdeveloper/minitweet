import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faFaceSmileWink, faGear, faGift, faHeart, faImage, faList, faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Feed() {
  return (
<>
  <div class= "caja1">
    <button type="button" class="btn btn-light btn-lg botonParati"><strong>For you</strong></button>
    <button type="button" class="btn btn-light btn-lg botonSiguiendo"><strong>Following</strong></button>
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
      What is happening?!
      </h5>
      </label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <button type="button" class="btn btn-outline-primary rounded-pill btn-sm mt-4 ms-4"><FontAwesomeIcon icon={faImage} /> </button>
    <button type="button" class="btn btn-outline-primary rounded-pill btn-sm mt-4 ms-4"><FontAwesomeIcon icon={faGift} /> </button>
    <button type="button" class="btn btn-outline-primary rounded-pill btn-sm mt-4 ms-4"><FontAwesomeIcon icon={faList} /> </button>
    <button type="button" class="btn btn-outline-primary rounded-pill btn-sm mt-4 ms-4"><FontAwesomeIcon icon={faFaceSmileWink} /> </button>
    <button type="button" class="btn btn-outline-primary rounded-pill btn-sm mt-4 ms-4"><FontAwesomeIcon icon={faClock} /> </button>
    <button type="button" class="btn btn-outline-primary rounded-pill btn-sm mt-4 ms-4"><FontAwesomeIcon icon={faLocationDot} /> </button>
    <button type="button" class="btn btn-primary rounded-pill btn-sm mt-4 ms-4 mb-4"> Post </button>
  </div>
  <div className='botonPosts'>
  <button type="button" class="btn btn-light fw-lighter btn-md botonPosts">Show 30 posts </button>
  </div>
  <div className='Box3Posts'>
  <img 
        className='tw-followCard-perfil'
            alt= "@gabybit" 
            src="https://unavatar.io/github/gabybitdeveloper"/>
    <div className='tw-followCard-Posts'>
        <strong>Gaby Bit</strong>
        <span
            className='tw-followCard-infoUserName'>@gabybit 19h</
            span>
          <button type="button" class="btn btn-light rounded-pill btn-sm ms-4 mb-4 botonPerfilPosts"> ... </button>
            </div>
            
    <p>
      This is my friend Adriana Blu
      <br></br>

      She is an incredible artist <FontAwesomeIcon icon={faHeart} />
      <br></br>
      Here is her new song and website
      <br></br>
      <a href="#" class="text-decoration-none">https://www.adrianablu.com/</a> 
    </p>
    <div className='container'>
      <div class="ratio ratio-16x9">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/S-lrOL7n3bw?si=VD9Jnk4_p9aiphKN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>
      </div>
    </div>
            
  </div>

</>
  )
}

export default Feed;