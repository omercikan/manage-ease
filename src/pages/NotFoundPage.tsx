import React from 'react'
import { TbWorldExclamation } from "react-icons/tb";
import { IoChevronBackSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    }

  return (
    <div className='grid place-content-center text-center h-screen bg-slate-200 relative overflow-hidden'>
        <div className="container">
            <h1 className='flex items-center justify-center gap-3 text-9xl select-none font-light drop-shadow-lg'>
                4 <TbWorldExclamation strokeWidth={"1.5"} /> 4
            </h1>
            <p className='mb-10 text-2xl'><strong className='text-red-600 font-medium drop-shadow-lg'>Upss!</strong> Burada bir şeyler ters gitmiş olmalı. Yolculuğa geri dönelim!</p>
            <button className='text-xl hover:bg-white hover:text-slate-950 border-slate-950 border-2 transition-all duration-500 active:scale-90 bg-slate-950 text-white rounded-3xl p-2 px-4 flex items-center gap-1.5 mx-auto' onClick={handleBack}>
                <IoChevronBackSharp size={24}/>
                Geri dön
            </button>
        </div>

        <div className='bg-yellow-300 w-40 h-40 absolute rounded-full -right-14 -top-14 border-[5px] border-yellow-200'></div>
        <div className='w-screen h-10 bg-slate-950 absolute bottom-0 border-t-[7px] border-dashed border-white'></div>
    </div>
  )
}

export default NotFoundPage