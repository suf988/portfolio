import passwordGenerator from '../../assets/portfolio/passwordGenerator.png'
import registrationForm from '../../assets/portfolio/registrationForm.png'
import toDoList from '../../assets/portfolio/toDoList.png'
import weatherApp from '../../assets/portfolio/weatherApp.png'
import searchAndSort from '../../assets/portfolio/searchAndSort.png'
import shoeStore from '../../assets/portfolio/shoeStore.png'

const Portfolio = () => {

    const portfolio = [
        {
            id: 1,
            src: passwordGenerator,
            webLink: "https://passwordgenerator-by-s.netlify.app/"
        },

        {
            id: 2,
            src: registrationForm,
            webLink: "https://registration-by-s.netlify.app/"
        },

        {
            id: 3,
            src: toDoList,
            webLink: "https://to-do-app-with-redux.netlify.app/"
        },

        {
            id: 4,
            src: weatherApp,
            webLink: "https://weather-by-s.netlify.app/"
        },

        {
            id: 5,
            src: searchAndSort,
            webLink: "https://search-n-sort.netlify.app/"
        },

        {
            id: 6,
            src: shoeStore,
            webLink: "https://shoe-store-by-s.netlify.app/"
        }
    ]

    const handleClick = (webLink)=>{
        window.open(webLink, '_blank');
    }

    return (
        //idhr min-h-screen ko h-screen tha phle
        <div name="portfolio" className='bg-gradient-to-b from-black to bg-gray-800 w-full text-white md:min-h-screen'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

                <div className='pb-8'>

                    <h3 className='text-4xl inline font-bold border-b-4 border-gray-500'>
                        Portfolio
                    </h3>

                    <p className='py-6'>
                    Explore my portfolio for a concise overview of my projects, showcasing proficiency in Web Development. Each project reflects a commitment to clean, functional, and professional web development.
                    </p>

                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        portfolio.map(({ id, src, webLink }) => (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>

                                <img src={src} alt="project-images" className='rounded-md hover:scale-105 duration-200' />

                                <div className='flex items-center justify-center'>

                                    <button className='w-full px-6 py-2 m-4 duration-200 hover:scale-105' 
                                    onClick={()=>handleClick(webLink)}>Open Project</button>

                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Portfolio
