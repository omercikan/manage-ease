import React from 'react'
import { AiFillProduct } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
        <div className="brand text-3xl font-medium">
            <Link to='/'>
                <AiFillProduct />
                ManageEase
            </Link>
        </div>
    </header>
  )
}

export default Header