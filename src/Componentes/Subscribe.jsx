import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";



function Subscribe() {
  return (
    <>
        <div class="rounded input-group mb-3">
            <span class="input-group-text rounded-pill">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="search" class="form-control-search rounded-pill" id="exampleInputSearch" placeholder="Search" aria-describedby="searchHelp" /> 
            </span>
        </div>
        <div class="cajita-suscribete">
            <h5><strong>Subscribe to Premium </strong> </h5>
            <h6>Subscribe to unlock new features and if eligible, receive a share of ads revenue. </h6>
            <button type="button" class="btn btn-dark rounded-pill btn-md mb-2"> Subscribe </button>
        </div>
            <br></br>
         <div class="rounded boxFollow">
         <h5><strong> Who to follow </strong> </h5>
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
                <button className='btn btn-dark rounded-pill btn-sm mt-8 ms-4 mb-2'>
                Follow
                </button>
                </div>
            </div>
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
                <button className='btn btn-dark rounded-pill btn-sm mt-8 ms-4 mb-2'>
                Follow
                </button>
                </div>
            </div>
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
                <button className='btn btn-dark rounded-pill btn-sm mt-8 ms-4 mb-2 self-end'>
                Follow
                </button>
                </div>
            </div>
            <button type="button" class="btn btn-light fw-lighter btn-md buttonShowMore">Show more </button>
        </div>
            <br></br>
        <div class="rounded tendencias">
            <br></br>
            <h5> <strong> Spain trends </strong> </h5>
            <br></br>
            <ul className='ulTrending'>
                <li>
                    <p class="text-sm-start-li"> 1 · Politics · Trending 
                        <button type="button" 
                        class="btn btn-light rounded-pill btn-sm ms-4 mb-4 Button..."> ... 
                        </button>
                    </p>
                    <p class="text-sm-start-li-strong"> <strong> #investidura </strong> </p>
                    <p class="text-sm-start-li">9,065 posts </p>
                </li>
                <br></br>
                <li>
                    <p class="text-sm-start-li">2 · Politics · Trending  
                        <button type="button" 
                        class="btn btn-light rounded-pill btn-sm ms-4 mb-4 Button..."> ... 
                        </button>
                    </p>
                    <p class="text-sm-start-li-strong"> <strong> #MeGustaLaFruta </strong> </p>
                    <p class="text-sm-start-li">16.5K posts </p>
                </li>
                <br></br>
                <li>
                    <p class="text-sm-start-li">3 · Trending 
                        <button type="button" 
                        class="btn btn-light rounded-pill btn-sm ms-4 mb-4 Button..."> ... 
                        </button>
                    </p>
                    <p class="text-sm-start-li-strong"> <strong> #BlackFriday </strong> </p>
                    <p class="text-sm-start-li">8,232 posts </p>
                </li>
                <br></br>
            </ul>
    
        </div>
        
    </>
  );
}

export default Subscribe