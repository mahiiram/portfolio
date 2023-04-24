import "./workcard.css";

import React from 'react';
import addcart from "../assets/addcart.png";
import dic from "../assets/dic.png";
import calc from "../assets/calc.png"
import { NavLink } from "react-router-dom";

const Workcard = () => {
    return (
        <section class="pricing py-5">
            <div class="container">
                <div class="row">

                    <div class="col-lg-4">
                        <div class="card mb-5 mb-lg-0">
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
                        <div class="card mb-5 mb-lg-0">
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
                        <div class="card mb-5 mb-lg-0">
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



                </div>
            </div>
        </section>
    )
}

export default Workcard;