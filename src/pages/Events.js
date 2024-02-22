import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/BGMI.png'
import essay from "../assets/ESSAY.png"
import free from "../assets/Free fire.png"
import Code from "../assets/Code-A.png"
import Debate from "../assets/Debate.png"
import Paper from "../assets/PAPER.png"
import Archicad from "../assets/Archicad.png"
import TechQuiz from "../assets/TechQuiz.png"
import Expo from "../assets/Project.png"
function Events() {
  return (
    <>
     


      



      <section className=" body-font">
        <div className=" px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <img src={Paper}/>
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                  
                  <p className=' text-white'>Paper Presentation</p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <img src={Code}/>
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                 
                <p className=' text-white'>Code-Athon</p>
                    
                 
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <img src={Debate}/>
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                  
                <p className=' text-white'>Debate</p>
                   
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className="text-gray-400 body-font">
        <div className=" px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <img src={essay}/>
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                  
                  <p className=' text-white'>Essay</p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <img src={logo}/>
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                 
                <p className=' text-white'>BGMI</p>
                    
                 
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <img src={Archicad}/>
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                  
                <p className=' text-white'>Archicad Design</p>
                   
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-400 body-font">
        <div className=" px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <img src={TechQuiz}/>
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                  
                  <p className=' text-white'>Tech Quiz</p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <img src={free}/>
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                 
                <p className='text-white'>Free Fire</p>
                    
                 
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <img src={Expo}/>
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                  
                <p className=' text-white'>Project Expo</p>
                   
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </>
  )
}

export default Events