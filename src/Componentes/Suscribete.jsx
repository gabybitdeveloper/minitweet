import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";



function Suscribete() {
  return (
    <>
        <div class="rounded input-group mb-3">
            <span class="input-group-text rounded-pill">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="search" class="form-control-search rounded-pill" id="exampleInputSearch" placeholder="Buscar" aria-describedby="searchHelp" /> 
            </span>
        </div>
        <div class="cajita-suscribete">
            <h4>Suscríbete a Premium</h4>
            <h6>Suscríbete para desbloquear nuevas funciones y, si eres elegible, recibir un pago de cuota de ingresos por anuncios. </h6>
            <button type="button" class="btn btn-dark rounded-pill btn-md mb-2"> Suscribirse </button>
        </div>
            <br></br>
         <div class="rounded cajita-seguir">
        <section className='tw-followCard'>
            <div>
            <div className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar'
                alt= "avatarmidu" 
                src="https://unavatar.io/midudev" />
                <div className='tw-followCard-info'>
                    <strong>Miguel Ángel Durán</strong>
                    <br></br>
                    <span
                        className='tw-followCard-infoUserName'>@midudev</
                        span>
                </div>
            </div>
            <button className='btn btn-dark rounded-pill btn-sm mt-8 ms-4 mb-2'>
                Seguir
            </button>
            </div>
        </section>
        
        <div>
            <div className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar'
                alt= "avatarlp" 
                src="https://unavatar.io/twitter/linkinpark" />
                <div className='tw-followCard-info'>
                    <strong>Linkin Park</strong>
                    <br></br>
                    <span
                        className='tw-followCard-infoUserName'>@linkinpark</
                        span>
                </div>
            </div>
            <button className='btn btn-dark rounded-pill btn-sm mt-8 ms-4 mb-2'>
                Seguir
            </button>
            </div>
            <div className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar'
                alt= "avatarlp" 
                src="https://unavatar.io/twitter/linkinpark" />
                <div className='tw-followCard-info'>
                    <strong>El País</strong>
                    <br></br>
                    <span
                        className='tw-followCard-infoUserName'>@el_pais</
                        span>
                </div>
            </div>
            <button className='btn btn-dark rounded-pill btn-sm mt-8 ms-4 mb-2'>
                Seguir
            </button>
            </div>
            <br></br>
        <div class="rounded tendencias">
            <h4>Tendencias de España</h4>
            #OrangeBlackFriday
            Descuentos increíbles
            <FontAwesomeIcon icon={faWandMagicSparkles} /> Promocionado por Orange España
        </div>
        
    </>
  );
}

export default Suscribete