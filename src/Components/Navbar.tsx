import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
           <div className='text-xl font-medium'>Abdul Wajid Warsi</div>
            
            <ul className='gap-10 lg:gap-16 hidden md:flex'> 

              <li className='menueLink'><a href ='#herosection'>Home</a></li>
              <li className='menueLink'><a href ='#project'>Project</a></li>
              <li className='menueLink'><a href ='#skills'>Skills</a></li>
              <li className='menueLink'><a href ='#contact'>Contact</a></li>
              <li className='menueLink'><a href ='#about'>About</a></li> 
            </ul>
            <AiOutlineMenu className='md:hidden' size={30}/>
        </div>
    </div>
  )
}

export default Navbar
