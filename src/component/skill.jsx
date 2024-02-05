import React from 'react';
import '../assets/css/skill.css'
import one from '../assets/images/1.png'

const Skill = () => {
    return (
        <div className='skill-cover'>
            <div className='container container-fluid'>
                <div className='row'>

                       <div className='col-12 d-flex justify-content-center '>
                           {
                               Array.from({length:3}).map(()=>{
                                   return(
                                       <div className='col-4 skill-margin mx-2'>
                                           <div className='border pading rounded'>
                                               <img className='w-25' src={one}/>
                                               <h1 className='text-white'> Web Design</h1>
                                               <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                           </div>
                                       </div>

                                   )
                               })
                           }
                       </div>

                </div>
            </div>

        </div>
    );
};

export default Skill;