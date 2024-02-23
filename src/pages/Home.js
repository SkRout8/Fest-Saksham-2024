import React from 'react'

import Anim from '../assets/Anim.json'
import Lottie from 'lottie-react'
import Navbar from '../components/Navbar'

const Home = ({ isLoggedIn }) => {
  return (
    <>
      {/* <div className=' flex sk text-center  font-serif align-middle '>
        <div className='   '>
          SAKSHAM-2K24
          <Lottie className='Text-anim ' animationData={Anim} />

        </div>

        <p className='text1 text-sm'>Welcome to the Technical fest of Srinix College of Engineering,Balasore
        </p>

      </div>


      <button className=' text-black w-40 h-10 bg-white relative  -top-44 left-60  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... rounded hover:duration-300	 hover:ease-in-out hover: animate-bounce	 	'>
        Get Started
      </button> */}



      <div className=' main-div w-8/12 mx-auto mt-10'>
        <div className='sd-div flex  items-center justify-between gap-20'>
          <div className=' sk3 flex flex-col gap-5 items-center'>
            <h1 className=' sk text-center text-xl'>
              SAKSHAM-2K24
            </h1>

            <p className=' text1 text-white  text-2xl'>Welcome to the Technical fest of Srinix College of Engineering,Balasore
            </p>
            <button className='btn1  mt-4 text-white w-40 h-10 text-center   bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... rounded 	  hover: animate-bounce'>
               <div className='  text-center '>
               Get Started
               </div>
            </button>
          </div>

          <div>
            <Lottie className=' Text-anim' animationData={Anim} />
          </div>
        </div>
      </div>

      <div>
        <h1 className=' font1 text-center  text-white  '>About Us</h1>
        <p className='text-center py-5 text-white '> SAKSHAM is an annual Three-day Inter-collegiate Technical and Entrepreneurship festival organized by the Srinix College Of Engineering , Balasore which is held each March.The festival began in 2023 to develop student technological innovation. 2nd edition will be held from 3rd to 6th March 2024. Our efforts, work, and thoughts, all are synced to one simple thing only – help our society as much as we can. To ensure our goal, we have set up an international platform for the people to innovate and compete. Here, at SAKSHAM we truly believe that this can be done by having competitions and letting people crave for the best. In the process, everyone from the society will eventually lead to a better place , Thank You .</p>
      </div>

      <div>
        <footer className="screen-bar1 py-36 body-font">
          <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">SAKSHAM</span>
            </a>
            <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2024 SAKSHAM —
              <a href="https://twitter.com/knyttneve" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer"></a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-gray-400">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-400">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-400" href=' https://www.instagram.com/saksham_sce?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-400">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </footer>
      </div>
    </>

  )
}

export default Home
