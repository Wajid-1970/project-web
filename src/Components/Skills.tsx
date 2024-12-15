import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
                <div data-aos="zoom-in-up">
                    <h2 className='text-4xl md:text-5xl' >Learning & working with the following Technologies</h2>
                    <p className='text-gray-500 pt-2'>
                    I am a passionate leaner of web development, alongwith HTML, CSS, JavaScript. My learning experience entends to using frameworks like React and Next.js to create dynamic and user-friendly applicationsI am also learning Tailwind CSS for efficient styling and design with passion and stay update on the latest technologies to enhance the skills effectively for projects.   
                    </p>
                </div>
                <div>
                    <div className='grid grid-cols-2 text-accent text 3xl sm:text-4xl'>
                        <div className='space-y-2'>
                            <h2 data-aos="zoom-in-up"> Typescript </h2> 
                            <h2 data-aos="zoom-in-up"> React.js </h2>
                            <h2 data-aos="zoom-in-up"> Next.js </h2>
                        </div>
                        <div className='space-y-2'>
                            <h2 data-aos="zoom-in-up"> Tailwind </h2>
                            <h2 data-aos="zoom-in-up"> CSS </h2>
                            <h2 data-aos="zoom-in-up"> Node.js </h2>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
