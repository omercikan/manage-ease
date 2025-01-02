import React, { useState } from 'react'
import { AiFillProduct } from "react-icons/ai";
import { MdOutlineAddCircle } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppDispatch } from '../redux/store';
import { changeModalCase } from '../redux/modalSlice';
import { SearchingProduct, SortingProductPrice } from '../redux/dataSlice';

const Header: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [isActiveMenu, setIsActiveMenu] = useState<boolean>(false);

    const handleSearching = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(SearchingProduct(e.target.value));
    }

    const handleMenu = () => {
        setIsActiveMenu(!isActiveMenu);
    }

    return (
        <header className='main-header bg-slate-900 text-white py-3 border-b-2 border-red-600'>
            <div className='container'>
                <div className={`header-wrapper flex justify-between gap-3 items-center ${isActiveMenu && 'active'}`}>
                    <div className="brand text-3xl font-medium">
                        <Link to='/' className='flex gap-3 items-center'>
                            <AiFillProduct />
                            ManageEase
                        </Link>
                    </div>

                    <div className="user-event-tab items-center flex gap-3">
                        <div className="filter-box text-black">
                            <select className='form-select h-10 w-24 ps-2 rounded-lg outline-none' onChange={(e) => dispatch(SortingProductPrice(e.target.value))}>
                                <option value="growing">Artan</option>
                                <option value="decreasing">Azalan</option>
                            </select>
                        </div>

                        <div className="search-box">
                            <input type="text" className='h-10 rounded-lg px-4 placeholder-black text-black outline-none' placeholder='Ürün arayın..' onChange={handleSearching}/>
                        </div>

                        <div className="add-product-box w-10 h-10 bg-indigo-900 grid place-items-center rounded-full cursor-pointer">
                            <MdOutlineAddCircle size={24} onClick={() => dispatch(changeModalCase())}/>
                        </div>
                    </div>

                    <div className={`hamburger-menu cursor-pointer md:hidden ${isActiveMenu && 'active'}`} onClick={handleMenu}>
                        <span className='block w-7 h-0.5 bg-white mb-1.5'></span>
                        <span className='block w-7 h-0.5 bg-white mb-1.5'></span>
                        <span className='block w-7 h-0.5 bg-white'></span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header 