import "./workcard.css";

import React from 'react';
import stackoverflow from '../assets/Stack-overflow.png'
import nightingale from '../assets/nightingale.png'
import { NavLink } from "react-router-dom";
import moviebooking from '../assets/Moviebooking.png'
import dietapp from '../assets/DIetapp.png';
import "react-multi-carousel/lib/styles.css";

const Workcard = () => {

    return (
        <div className="container">
            <ul className="cards">
                <li className="card">
                    <div>

                        <h3 className="card-title text-uppercase text-center">Chat-app</h3>
                        <img src={nightingale} style={{ width: '100%' }} alt="calc" />
                        <div className="card-content">
                            <p>Developed this chat application using Reactjs, Nodejs, Socket.io and Mongodb.
                            The purpose of the chat app is user can easily communicate with their friends.
                            If their friends registered in this application user can found them by searching username and chat with them</p>
                            <p>Technologies used: ReactJs, NodeJs, Socket.io, MongoDB</p>
                        </div>
                    </div>
                    <div className="card-link-wrapper">
                        <div className="d-flex btn-section" style={{justifyContent:'space-between'}}>
                            <NavLink to="https://nightingale-chatapp.netlify.app" className='btn' >View</NavLink>
                            <NavLink to="https://github.com/mahiiram/chatapp-client" className='btn' >Client</NavLink>
                        </div>
                        <div className="d-flex mt-2" style={{justifyContent:'center'}}>
                        <NavLink to="https://github.com/mahiiram/chatappserver" className='btn' >Server</NavLink>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div>

                        <h3 className="card-title text-uppercase text-center">Stackoverflow</h3>
                        <img src={stackoverflow} style={{ width: '100%' }} alt="calc" />
                        <div className="card-content p-2">
                            <p>Developed this application using Reactjs, Nodejs and Mongodb.
                                Designed a comprehensive database schema for storing questions,answers and user profiles,optimising data storage and retrivel efficiency
                                .integrated voting systems that allowed users to upvote and downvote questions and answers,reflecting the popularity and relevance of content
                            </p>
                            <p>Technologies used: ReactJs, NodeJs and MongoDB</p>
                        </div>
                    </div>
                    <div className="card-link-wrapper">
                        <div className="d-flex btn-section" style={{justifyContent:'space-between'}}>
                            <NavLink to="https://stackoverflow-clones.netlify.app" className='btn' >View</NavLink>
                            <NavLink to="https://github.com/mahiiram/stackoverflow-client" className='btn' >Client</NavLink>
                        </div>
                        <div className="d-flex mt-2" style={{justifyContent:'center'}}>
                        <NavLink to="https://github.com/mahiiram/stackoverflowserver" className='btn' >Server</NavLink>
                        </div>
                    </div>
                </li>
                <li className="card m-10">
                    <div>

                        <h3 className="card-title text-uppercase text-center">Moviebooking</h3>
                        <img src={moviebooking} style={{ width: '100%' }} alt="calc" />
                        <div className="card-content p-2">
                        <p>
                        Movie Booking is a process of selecting and making reservations for a cinema in particular theatre via online source.
                        From this web page user can booking a favourite movie for their entertainment.If you are a Admin of the webpage You can add and delete a movie</p>
                           <p>Technologies used: ReactJs, NodeJs, MongoDB</p>
                        </div>
                    </div>
                    <div className="card-link-wrapper">
                        <div className="d-flex btn-section" style={{justifyContent:'space-between'}}>
                            <NavLink to="https://tubular-valkyrie-8e79c8.netlify.app/" className='btn' >View</NavLink>
                            <NavLink to="https://github.com/mahiiram/wecode-frontend-ticketbooking" className='btn' >Client</NavLink>
                        </div>
                        <div className="d-flex mt-2" style={{justifyContent:'center'}}>
                        <NavLink to="https://github.com/mahiiram/Webcode-backend-booking" className='btn' >Server</NavLink>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div>

                        <h3 className="card-title text-uppercase text-center">Dietapp</h3>
                        <img src={dietapp} style={{ width: '100%' }} alt="calc" />
                        <div className="card-content p-2">
                           <p>
                           Its purposly developing for mobile application which the application for tracking nutritional intake and managing diets for healthy eating weightloss and weightgain and fitness. These are all important building blocks in behaviour change.
                            These apps have the potential to facilitate health-related activity tracking and weight management
                            </p> <p>Technologies used: ReactJs, NodeJs and MongoDB</p>
                        </div>
                    </div>
                    <div className="card-link-wrapper">
                        <div className="d-flex btn-section" style={{justifyContent:'space-between'}}>
                            <NavLink to="https://diet-suggestion-application.netlify.app" className='btn' >View</NavLink>
                            <NavLink to="https://github.com/mahiiram/dietsuggestionapp-frontend" className='btn' >Client</NavLink>
                        </div>
                        <div className="d-flex mt-2" style={{justifyContent:'center'}}>
                        <NavLink to="https://github.com/mahiiram/dietapp-backend" className='btn' >Server</NavLink>
                        </div>
                    </div>
                </li>

            </ul>
        </div>



    )
}

export default Workcard;