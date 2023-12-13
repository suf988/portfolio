import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'
import './Navbar.css'

const Navbar = () => {

    const [responsive, setResponsive] = useState(false)

    const links = [
        {
            id: 1,
            link: "home"
        },

        {
            id: 2,
            link: "about"
        },

        {
            id: 3,
            link: "portfolio"
        },

        {
            id: 4,
            link: "skills"
        },

        {
            id: 5,
            link: "contact"
        },
    ]

    return (
        <div className='main-div'>

            <div>
                <Link className='title' to='home' smooth={true} duration={500}>Sufyan Scripts</Link>
            </div>

            <ul className='nav-menu'>
                {links.map(({ id, link }) => (

                    <li key={id}
                        className='menu-items'>
                        <Link to={link} smooth={true} duration={800}>{link}</Link>
                    </li>

                ))}
            </ul>

            <div onClick={() => setResponsive(!responsive)}
                className='responsive-div'>

                {responsive ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {responsive && <ul className='responsive-nav-menu'>

                {links.map(({ id, link }) => (

                    <li key={id}
                        className='responsive-menu-items'>
                        <Link to={link} smooth={true} duration={800} onClick={() => setResponsive(!responsive)}>
                            {link}
                        </Link>
                    </li>
                ))}

            </ul>
            }

        </div>
    )
}

export default Navbar
