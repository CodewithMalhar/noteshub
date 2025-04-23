import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

// import CardLoading from './CardLoading';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
// const Subject = lazy(() => import("./Subject"));

const SemisterArea = () => {
    const param = useParams()

    const navigate = useNavigate();
    const [sideBar, setSideBar] = useState(false);
    // const [subjectsArea, setSubjectsArea] = useState<any>();
    const head = useRef<HTMLDivElement | null>(null);
    const contentArea = useRef<HTMLDivElement | null>(null);
    const queryParams = new URLSearchParams(location.search);
    let sub:any = queryParams.get('sub');
    if(!sub)sub='cse';

    function onHideClick() {
        if (sideBar && head.current) {
            head.current.classList.add("hidden");
            contentArea.current?.classList.add("col-span-4");
        } else if (sideBar == false && head.current) {
            head.current.classList.remove("hidden");
            contentArea.current?.classList.remove("col-span-4");
        }
        setSideBar(state => !state);
    }
    function handleSem(eleContext: any): void {
        // const dept=param;

        let choice: string = eleContext.target.innerText;
        navigate('/notes'+'/' + choice+'?sub='+sub);
        // navigate('/notes?sub='+sub+'/' + choice);
        // navigate(`/notes?sub=${sub}/${choice}`);


    }
    return (
        <div className=" bg-[#1e2a45]  p-0 sm:p-8 md:p-16">
            <div className="content grid grid-cols-4 grid-rows-1 md:grid-rows-4 md:grid-cols-1 md:p-2" >
                <motion.div
                    initial="hidden"
                    transition={{ duration: 1 }}
                    className="head semList  col-span-1 p-3 h-full sm:h-[80vh] md:h-fit flex flex-col  space-y-2 justify-between items-center
                    md:items-end md:flex-row bg-blue-300  sm:rounded-xl md:my-3 
                    border-l-8 border-l-blue-400 border-r-8  border-r-slate-400 shadow-inner sm:border-0"  ref={head}>

                    <motion.div
                        whileTap={{ scale: 1.1, color: '#000000' }}
                        onClick={handleSem}
                        transition={{ duration: 0.4 }}
                        className="sem  " >
                        <button className='text-xm md:text-lg text-xs sm:text-sm md:font-extrabold'>Sem-III</button>
                    </motion.div>
                    <motion.div
                        whileTap={{ scale: 1.1, color: '#000000' }}
                        onClick={handleSem}
                        transition={{ duration: 0.4 }}
                        className="sem  " >
                        <button className='text-xm md:text-lg text-xs sm:text-sm md:font-extrabold'>Sem-IV</button>
                    </motion.div>
                    <motion.div
                        whileTap={{ scale: 1.1, color: '#000000' }}
                        onClick={handleSem}
                        transition={{ duration: 0.4 }}
                        className="sem  " >
                        <button className='text-xm md:text-lg text-xs sm:text-sm md:font-extrabold'>Sem-V</button>
                    </motion.div>
                    <motion.div
                        whileTap={{ scale: 1.1, color: '#000000' }}
                        onClick={handleSem}
                        transition={{ duration: 0.4 }}
                        className="sem  " >
                        <button className='text-xm md:text-lg text-xs sm:text-sm md:font-extrabold'>Sem-VI</button>
                    </motion.div>
                    <motion.div
                        whileTap={{ scale: 1.1, color: '#000000' }}
                        onClick={handleSem}
                        transition={{ duration: 0.4 }}
                        className="sem  " >
                        <button className='text-xm md:text-lg text-xs sm:text-sm md:font-extrabold'>Sem-VII</button>
                    </motion.div>
                    <motion.div
                        whileTap={{ scale: 1.1, color: '#000000' }}
                        onClick={handleSem}
                        transition={{ duration: 0.4 }}
                        className="sem  " >
                        <button className='text-xm md:text-lg text-xs sm:text-sm md:font-extrabold'>Sem-VIII</button>
                    </motion.div>


                    {/* </div> */}
                </motion.div>
                <div className="cardArea col-span-3 md:row-span-3 
                relative bg-slate-200 opacity-85 h-[80vh] 
                lg:h-[70vh] md:h-[60vh]  sm:h-[80vh] w-full shadow-inner sm:rounded-lg overflow-scroll" ref={contentArea}>
                    <div className="close absolute top-1/2 left-0 text-white  sm:hidden " onClick={onHideClick}>
                        <FontAwesomeIcon icon={faArrowCircleLeft} className="h-6 w-6" />
                    </div>
                    <div className="data p-4 ">
                        {!param.semId && <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 text-3xl  text-slate-600 '>Select something</div>}
                        <Outlet/>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SemisterArea;