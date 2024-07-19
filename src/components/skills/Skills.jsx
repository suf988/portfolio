import html from '../../assets/html.png'
import css from '../../assets/css.png'
import javascript from '../../assets/javascript.png'
import react from '../../assets/react.png'
import github from '../../assets/github.png'
import tailwind from '../../assets/tailwind.png'
import node from '../../assets/node.png'
import express from '../../assets/express.png'
import mongodb from '../../assets/mongodb.png'
import bootstrap from '../../assets/bootstrap.png'

const Skills = () => {

    const skills = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500"
        },

        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500"
        },

        {
            id: 3,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500"
        },

        {
            id: 4,
            src: react,
            title: "React JS",
            style: "shadow-blue-600"
        },

        {
            id: 5,
            src: github,
            title: "Github",
            style: "shadow-gray-400"
        },

        {
            id: 6,
            src: tailwind,
            title: "Tailwind CSS",
            style: "shadow-sky-400"
        },
        {
            id: 7,
            src: node,
            title: "Node JS",
            style: "shadow-green-600"
        },
        {
            id: 8,
            src: express,
            title: "Express JS",
            style: "shadow-zinc-600"
        },
        {
            id: 9,
            src: bootstrap,
            title: "Bootstrap",
            style: "shadow-zinc-600"
        },
        {
            id: 9,
            src: mongodb,
            title: "Mongo DB",
            style: "shadow-zinc-600"
        }
    ]

    return (
        <div name="skills" className='w-full bg-gradient-to-b from-gray-800 to-black h-screen'>

            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>

                <div>

                    <h3 className='text-4xl font-bold border-b-4 border-gray-500 inline p-2'>
                        Skills
                    </h3>

                    <p className='py-6'>I bring expertise in these technologies to the table.</p>

                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0'>

                    {skills.map(({ id, src, title, style }) => (

                        <div key={id} className={`shadow-md hover:scale-105 duration-300 py-2 rounded-lg  ${style}`}>

                            <img src={src} alt="skills-images" className='w-20 mx-auto' />
                            <h4 className='mt-4'>{title}</h4>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Skills
