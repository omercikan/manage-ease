import React from 'react'
import { AiFillProduct } from "react-icons/ai";
import { MdOutlineAddCircle } from "react-icons/md";
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className='bg-slate-900 text-white py-3 border-b-2 border-red-600'>
        <div className='container'>
            <div className="header-wrapper flex justify-between">
                <div className="brand text-3xl font-medium">
                    <Link to='/' className='flex gap-3 items-center'>
                        <AiFillProduct />
                        ManageEase
                    </Link>
                </div>

                <div className="user-event-tab items-center flex gap-3">
                    <div className="filter-box text-black">
                        <select className='form-select h-10 rounded-lg outline-none'>
                            <option value="decreasing">Azalan</option>
                            <option value="growing">Artan</option>
                        </select>
                    </div>

                    <div className="search-box">
                        <input type="text" className='h-10 rounded-lg px-4 placeholder-black text-black outline-none' placeholder='Ürün arayın..'/>
                    </div>

                    <div className="add-product-box w-10 h-10 bg-indigo-900 grid place-items-center rounded-full cursor-pointer">
                        <MdOutlineAddCircle size={24}/>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header 