import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdDocument } from "react-icons/io";

const Social = () => {

    const links = [
        {
            id: 1,
            socialTitle: "LinkedIn",
            socialIcon: <FaLinkedin size={30} />,
            href: "https://www.linkedin.com/in/sufyan-ahmed49",
            style: "rounded-tr-md"
        },

        {
            id: 2,
            socialTitle: "GitHub",
            socialIcon: <FaGithub size={30} />,
            href: "https://github.com/suf988",
        },

        {
            id: 3,
            socialTitle: "E-mail",
            socialIcon: <MdEmail size={30} />,
            href: "mailto:sufyanahmed49@gmail.com",
        },

        {
            id: 4,
            socialTitle: "Resume",
            socialIcon: <IoMdDocument size={30} />,
            href: "/resume.pdf",
            style: "rounded-br-md",
            download: true  //this will allow us to download the resume
        }
    ]

    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">

            <ul>
                {links.map(({ id, socialIcon, socialTitle, href, style, download }) => (

                    <li key={id}
                        className={"flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-5px] hover:rounded-md duration-300 " + style}>

                        <a href={href}
                            download={download}
                            target="_blank"
                            rel="noreferrer" //rel="noreferrer" is used with target="_blank" (just to avoid warnings in terminal)
                            className="flex justify-between items-center w-full text-white">
                                
                            {socialTitle} {socialIcon}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Social
