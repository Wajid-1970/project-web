import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data =[
    {
        id: 0,
        title: "Project-A",
        desc: "A React and Typescript based project.",
        img: "/project_01.jpg",
        tags: ["React", "Node", "CSS", "Typescript"],
    },
    {
        id: 1,
        title: "Project-B",
        desc: "A Next.js and Typescript based project.",
        img: "/project_02.jpg",
        tags: ["Next.js", "Node", "CSS", "Typescript"],   
    },
    {
        id: 2,
        title: "Project-C",
        desc: "A Next.js and Typescript based project.",
        img: "/project_03.jpg",
        tags: ["Next.js", "Node", "CSS", "Typescript"],
    }
]
const Project = () => {
  return (
    <div id='project' className='container pt-32'>
      <Heading title='Projects Under Construction'/>
      <div className='grid:gap-10 xl gap-0 xl: gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el)=> (<Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
        />))};
      </div>
    </div>
  )
}

export default Project
