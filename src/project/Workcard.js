import "./workcard.css";

import React from 'react';
import addcart from "../assets/addcart.png";
import dic from "../assets/dic.png";
import calc from "../assets/calc.png";
import url from '../assets/Url.png'
import { NavLink } from "react-router-dom";
import moviebooking from '../assets/Moviebooking.png'
import dietapp from '../assets/DIetapp.png'
const Workcard = () => {
    return (
        <section class="pricing py-5">
            <div class="container">
                <div class="row">

            
                    <div class="col-lg-4">
                        <div class="card mb-10 mb-lg-0">
                            <div class="card-body">
                                <h3 class="card-title text-uppercase text-center">DICTIONERY</h3>
                                <img src={dic} alt="dictionery" />
                                <div>
                                    <p>A dictionary is a compilation of words in alphabetical order.
                                        It is a reference book that gives information about words.
                                        Everyone who desires to use any language proficiently must make
                                        the dictionary his/her companion.
                                        Although a dictionary is a reference book,
                                        its uses require some guides and explanations.</p>
                                </div>
                                <div class="d-grid btn-section">
                                    <NavLink to="https://jolly-choux-427a1a.netlify.app/" className='btn' >View</NavLink>
                                    <NavLink to="https://github.com/mahiiram/dictinaryapi" className='btn' >Source</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card mb-10 mb-lg-0">
                            <div class="card-body">
                                <h3 class="card-title text-uppercase text-center">DietSuggestionAPP</h3>
                                <img src={dietapp} alt="calc" />
                                <div>
                                    <p>
                                    It is a simple diet suggestion app created with both Reactjs and Nodejs.You can learn how to loss and gain a weight from this app.  
                                    </p>
                                </div>
                                <div class="d-grid btn-section">
                                    <NavLink to="https://heartfelt-zabaione-54ea12.netlify.app/" className='btn' >View</NavLink>
                                    <NavLink to="https://github.com/mahiiram/dietsuggestionapp-frontend" className='btn' >Source</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </section>
    )
}

export default Workcard;