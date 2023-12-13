import React from 'react'

const ContactForm = () => {
    return (
        //idhr min-h-screen ko h-screen tha phle
        <div name="contact" className='w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>

            <div className='flex flex-col justify-center p-4 mx-auto mt-16 max-w-screen-lg h-full'>

                <div className='pb-8'>

                    <h3 className='text-4xl inline font-bold border-b-4 border-gray-500'>
                        Contact Me
                    </h3>

                    <p className='py-6'>
                        Let's Connect! Pop your message in the form.
                    </p>
                </div>

                <div className='flex justify-center items-center'>

                    <form action="https://getform.io/f/1613b3ef-fb56-4956-972c-95d9fecf301f" method='POST' className='flex flex-col w-full md:w-1/2'>

                        <label htmlFor="name">Full Name</label>
                        <input type="text" name="name" id="name" autoComplete='off' placeholder='Enter your full name' required
                            className='p-2 my-3 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="email" id="email" autoComplete='off' placeholder='Enter your email address' required
                            className='p-2 my-3 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                        <label htmlFor="msg">Your Message</label>
                        <textarea name="msg" id="msg" rows="10" required className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>

                        <button className='text-white bg-gradient-to-r from-cyan-500 to to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
