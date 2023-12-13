import HeroImage from '../../assets/heroImage.jpeg'
import { TiArrowRightThick } from "react-icons/ti";
import {Link} from 'react-scroll'

const Home = () => {
    return (
        <div name="home"
            className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>

            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>

                <div className='flex flex-col justify-center h-full'>

                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                        I am a Software Engineer
                    </h2>

                    <p className='text-gray-500 py-4 max-w-md'>
                        Passionate about crafting clean and efficient web solutions, my focus is on delivering seamless user experiences. With a commitment to staying current with industry trends, I tackle challenges with a creative and analytical mindset. Explore my portfolio to see how I bring ideas to life through code.
                    </p>

                    <div>
                        <Link className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer' to='portfolio' smooth={true} duration={800}>

                            Portfolio <span className='group-hover:rotate-90 duration-300'>
                                <TiArrowRightThick size={25} className='ml-1' />
                            </span>
                        </Link>
                    </div>
                </div>
                
                <div>
                    <img src={HeroImage} alt="profile picture"
                        className='rounded-3xl mx-auto w-2/3 md:w-4/5' />
                </div>
            </div>
        </div>
    )
}

export default Home
