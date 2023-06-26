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
                                <h3 class="card-title text-uppercase text-center" >ADD TO CART</h3>
                                <img src={addcart} alt="cart" />
                                <div>
                                    <p>
                                        The add-to-cart button is a feature of ecommerce
                                        stores that allows customers to choose items to purchase
                                        without actually completing the payment.
                                        For online stores, it lives on individual product pages,
                                        functioning as the digital equivalent of a shopping cart in a brick and mortar store.
                                    </p>
                                </div>
                                <div class="d-grid btn-section">
                                    <NavLink to="https://fantastic-ganache-164d55.netlify.app/" className='btn' >View</NavLink>
                                    <NavLink to="https://github.com/mahiiram/shoppingCart" className='btn' >Source</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                <h3 class="card-title text-uppercase text-center">CALCULATOR</h3>
                                <img src={calc} alt="calc" />
                                <div>
                                    <p>
                                    A machine for performing arithmetical operations 
                                    (as multiplication) that are usually more complex than 
                                    can be done on an adding machine
                                    </p>
                                </div>
                                <div class="d-grid btn-section">
                                    <NavLink to="https://gleeful-clafoutis-2ce1ac.netlify.app/" className='btn' >View</NavLink>
                                    <NavLink to="https://github.com/mahiiram/day15calculator" className='btn' >Source</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="card mb-10 mb-lg-0">
                            <div class="card-body">
                                <h3 class="card-title text-uppercase text-center">urlshortener</h3>
                                <img src={url} alt="calc" />
                                <div>
                                    <p>
                                    URL sortner its shorts the long url into short,if you are a registered user you have to be use this shortner Otherwise not.After login the the url shorner form Will come. You can using it after login 
                                    </p>
                                </div>
                                <div class="d-grid btn-section">
                                    <NavLink to="https://tranquil-haupia-9236a4.netlify.app/" className='btn' >View</NavLink>
                                    <NavLink to="https://github.com/mahiiram/urlshortener-frontend" className='btn' >Source</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="card mb-10 mb-lg-0">
                            <div class="card-body">
                                <h3 class="card-title text-uppercase text-center">Movie BOOKING</h3>
                                <img src={moviebooking} alt="calc" />
                                <div>
                                    <p>
                                    This is a simple movie booking app created with both Reactjs and Nodejs.you can add and delete a movie as an Admin. if You are user you can booking the movies only.  
                                    </p>
                                </div>
                                <div class="d-grid btn-section">
                                    <NavLink to="https://tubular-valkyrie-8e79c8.netlify.app/" className='btn' >View</NavLink>
                                    <NavLink to="https://github.com/mahiiram/wecode-frontend-ticketbooking" className='btn' >Source</NavLink>
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
                                    <NavLink to="" className='btn' >Source</NavLink>
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