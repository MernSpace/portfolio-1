import React from 'react';
import '../assets/css/project.css'
import img4 from '../assets/images/4.jpg'
const Project = () => {

    return (
        <div className='project-cover'>
            <div className='container'>
                <div className='row '>
                    {
                        Array.from({length:3}).map((i)=>{
                            return(
                                <div key={i} className='col-4 '>
                                    <div className='card project-margin'>
                                        <div className='card-body'>
                                            <div className='card-img text-center'>
                                                <img className='w-100 project-img' src={img4}/>
                                                <div className='bg-dark text-white d-none' id='myElement'>
                                                    <h1 className='text-dark'>this is the title</h1>
                                                    <p className='text-dark'>lorem ipsum</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Project;