import React from 'react';
import  logo from '../assets/images/logo-icon.png'
import '../assets/css/custom.css'
import {Navbar, NavItem, NavLink} from "react-bootstrap";
import chat from '../assets/images/download.png'
import hd from '../assets/images/4.png'
import person from '../assets/images/3.png'
import {Typewriter} from 'react-simple-typewriter';
import Skill from "../component/skill.jsx";
import Project from "../component/project.jsx";
const HomePage = () => {

    return (
        <div>
            <div className='cover'>
                <div className='container pt-3'>
                    <div className='row'>
                        <div className='col-6'>
                            <img src={logo}/>
                        </div>
                        <div className='col-6'>
                            <Navbar className='float-end'>
                                <NavItem className='navbar'>
                                    <NavLink className='fw-bold text-white nav-link mx-2' >Home</NavLink>
                                    <NavLink className='fw-bold text-white nav-link mx-2' >About</NavLink>
                                    <NavLink className='fw-bold text-white mx-2' >Contact</NavLink>
                                </NavItem>
                                <div>
                                    <button className='btn '><img src={chat}/></button>
                                </div>
                            </Navbar>
                        </div>
                    </div>
                </div>

                <div className='container margin'>
                    <div className='row'>
                        <div className='col-6'>
                            <h1 className='my-font text-white'>Hello <img src={hd} className='my-im'/> <br/>
                                I'm Sifat
                            </h1>

                            <div>
                                <span className='span-text text-white'>I AM{' '}</span>
                                <span className='span-text text-white'>
                         <Typewriter
                             words={['Web Developer', 'Web Designer', 'js Coder', 'React Developer']}
                             loop={10}
                             cursor
                             cursorStyle='_'
                             typeSpeed={70}
                             deleteSpeed={50}
                             delaySpeed={1000}
                         />
                     </span>
                            </div>
                        </div>


                        <div className='col-6'>
                            <img className='w-100 margin-top' src={person}/>
                        </div>
                    </div>
                </div>


            </div>
            <Skill/>
            <Project/>
        </div>
    );
};

export default HomePage;