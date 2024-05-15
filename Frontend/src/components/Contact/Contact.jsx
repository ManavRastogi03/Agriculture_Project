import React from 'react'
import { Link } from 'react-router-dom'
// import Photo_1 from "../../Images/Photo1.jpeg"
// import Photo_2 from "../../Images/Photo2.jpeg"
import Contactus from '../Utilis/contactus.jsx'
function Contact() {
  return (
    <>
    <div className="mx-auto w-full max-w-7xl">
        <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-5 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1  sm:ml-auto">
                        <Contactus/>
                    </div>
                </div>
{/* 
                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-80" src={Photo_1} alt="image1" />
                </div>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src={Photo_2} alt="image2" /> 
            </div>
*/}
            </aside>
            
        </div>
    </>
  )
}

export default Contact