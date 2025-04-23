import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faBook } from '@fortawesome/free-solid-svg-icons'
import { motion, useScroll, useTransform } from "framer-motion"
import gharda from '../images/gharda.png'
import { NavLink } from 'react-router-dom'
import "./Home.css"

import bg from '../images/parallexpt1.jpg'
import { useEffect, useRef } from 'react'

function Home() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const ref2 = useRef(null)
    // const { scrollYProgress: scrollP2 } = useScroll({
    //     target: ref2,
    //     offset: ["start start", "end start"]
    // })
    useEffect(() => {
        document.title = "Welcome to GIT Knowledge Hub"
    }, [])
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "300%"])
    // const card = useTransform(scrollP2, [0, 1], ["0%", "100%"])


    return (
        <div className='w-full '>
            <div ref={ref} className="heading mx-0 rounded-none md:mx-16 relative md:rounded-2xl shadow-2xl " >

                <div className="title absolute top-0 flex flex-col space-y-5 text-[#333A73] my-10 mx-auto" >
                    <motion.div
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.7 }}
                        style={{ y: textY }}

                        // delay={0.5}

                        className='text-3xl md:text-5xl lg:text-7xl font-extrabold mx-auto z-10'>
                        Explore & Elevate,
                    </motion.div>

                    <motion.div
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ y: textY }}

                        className='text-3xl md:text-5xl lg:text-7xl font-extrabold mx-auto z-10'>
                        GIT Knowledge Hub
                        <FontAwesomeIcon icon={faStar} />
                    </motion.div>
                    <motion.div
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="decription relative font-mono drop-shadow-xl top-0 invisible md:visible mx-16 text-sm md:text-md flex text-center z-10 text-[#387ADF]"


                        style={{ border: "2px solid #387ADF", borderRadius: "10px", padding: "10px", y: bgY, backgroundColor: "white" }}
                    >
                        <p>
                            "Explore the digital haven for CSE enthusiasts at GIT!
                            Dive into semester-wise notes, contributed by top minds globally.
                            Plus, unleash your own wisdom by uploading personalized gems.
                            Learning made dynamic, only at Gharda Institute Of Technology!"
                        </p>

                    </motion.div>
                </div>


                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="headImg w-full  rounded-none md:rounded-xl opacity-[0.9]">

                    <img src={gharda} alt="" height={"auto"} width={"100%"} className='w-[100%] h-auto rounded-none md:rounded-2xl' />
                </motion.div>
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1 }}
                    className="headImg absolute w-full h-auto top-0 -z-20 rounded-none md:rounded-2xl opacity-[0.6]">

                    <img src={bg} alt="" height={"auto"} width={"100%"} className='w-[100%] h-auto rounded-none md:rounded-2xl' />
                </motion.div>
            </div>




            {/* special button */}
            <motion.div className="special w-full mt-10 flex flex-col justify-center items-center" >

                <NavLink to={"/notes?sub=cse"}>

                    <div className="button mx-auto">
                        <motion.div
                            initial={{ x: -200, scale: 0.5 }}
                            whileHover={{ scale: 1.3, boxShadow: "0px 0px 10px 0px #387ADF" }}
                            whileInView={{ x: 0, scale: 1 }}
                            transition={{ duration: 0.5, type: 'spring', stiffness: 100, damping: 10 }}
                            // href="#_" 
                            className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <FontAwesomeIcon icon={faBook} />  </svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease" > Visit Notes</span>
                            <span className="relative invisible">Visit Notes</span>
                        </motion.div>

                    </div>
                </NavLink>

            </motion.div>



            <div ref={ref2} className=''>
                <div className='text-5xl mt-8 font-sans flex flex-auto justify-center z-32 text-[#333A73] p-4 mb-0'>
                    Total content on the website
                </div>
            </div>


            <div className="curves layer1  relative -z-20  flex flex-col justify-end" >
                <motion.div
                    transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                    className="features relative grid sm:grid-cols-3 px-2 sm:px-6 md:16 lg:px-32  pt-10 w-full">
                    <motion.div

                        initial={{ x: -100, opacity: 0, filter: 'blur(10px)' }}
                        whileInView={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 0.5, type: 'spring', stiffness: 100, damping: 10 }}
                        // style={{ y: card }}
                        className="card relative col-span-1 w-full h-56  p-2 z-10">
                        <div className="cardContent p-2 shadow-xl mx-auto sm:mx-0 md:mx-auto rounded-lg w-[50%] sm:w-full md:w-[70%] h-full bg-[#50C4ED] border-[8px] opacity-[0.7] border-[#387ADF]">
                            <div className="title text-2xl  text-center">Total Semesters</div>
                            <div className="title text-6xl flex text-center h-[70%] justify-center items-center font-extrabold">
                                <p>
                                    6
                                </p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: -100, opacity: 0, filter: 'blur(10px)' }}
                        whileInView={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 0.5, type: 'spring', stiffness: 100, damping: 10, delay: 0.2 }}
                        className="card relative col-span-1 w-full h-56 p-2 z-10">
                        <div className="cardContent p-2 shadow-xl mx-auto sm:mx-0 md:mx-auto rounded-lg w-[50%] sm:w-full md:w-[70%] h-full bg-[#50C4ED] border-[8px] opacity-[0.7] border-[#387ADF]">
                            <div className="title text-2xl  text-center">Total Question</div>
                            <div className="title text-6xl flex text-center h-[70%] justify-center items-center font-extrabold">
                                <p>
                                    0
                                </p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: -100, opacity: 0, filter: 'blur(10px)' }}
                        whileInView={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 0.5, type: 'spring', stiffness: 100, damping: 10, delay: 0.6 }}
                        className="card relative col-span-1 w-full h-56  p-2 z-10">
                        <div className="cardContent p-2 shadow-xl mx-auto  sm:mx-0 md:mx-auto rounded-lg w-[50%] sm:w-full md:w-[70%] h-full bg-[#50C4ED] border-[8px] opacity-[0.7] border-[#387ADF]">
                            <div className="title text-2xl  text-center">Total Notes</div>
                            <div className="title text-6xl flex text-center h-[70%] justify-center items-center font-extrabold">
                                <p>
                                   270 
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>


            <div className='p-3 md:p-32 sm:p-16 bg-[#297EA6] text-white'>


                <div className="info  space-y-4 bg-[#001829]">
                    <div className="cardType2 flex flex-row justify-between items-center ">
                        <div className='h-auto w-[34rem] '>
                            <img src={"src/assets/card1.jpeg"} alt="" />
                        </div>
                        <div className='text-xl  p-8 w-[60%] flex flex-col gap-2 justify-start'>
                            <p className='text-4xl font-bold'>Notes Repository</p>
                            <p className='text-2xl'>Access a vast collection of notes, subject-wise and department-wise.</p>
                        </div>
                    </div>


                    <div className="cardType2 flex flex-row justify-between items-center ">
                        <div className='text-xl  p-8 w-[60%] flex flex-col gap-2 justify-start'>
                            <p className='text-4xl font-bold'>Past Question Papers</p>
                            <p className='text-2xl'>Find previous years' question papers to help with exam preparation.</p>
                        </div>
                        <div className='h-auto w-[32rem] '>
                            <img src={"src/assets/question.png"} alt="" />
                        </div>
                    </div>


                    <div className="cardType2 flex flex-row justify-between items-center ">
                        <div className='h-auto w-[34rem] '>
                            <img src={"src/assets/assignment.jpeg"} alt="" />
                        </div>
                        <div className='text-xl  p-8 w-[60%] flex flex-col gap-2 justify-start'>
                            <p className='text-4xl font-bold'>Assignments & Projects</p>
                            <p className='text-2xl'>Explore sample assignments and project ideas.</p>
                        </div>
                    </div>


                    <div className="cardType2 flex flex-row justify-between items-center ">
                        <div className='text-xl  p-8 w-[60%] flex flex-col gap-2 justify-start'>
                            <p className='text-4xl font-bold'>Study Material</p>
                            <p className='text-2xl'>Curated study material including books, articles, and videos.</p>
                        </div>
                        <div className='h-auto w-[32rem] '>
                            <img src={"src/assets/study.png"} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}


export default Home