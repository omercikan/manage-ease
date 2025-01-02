import React, { useState } from 'react';
import { Product } from '../../types/type';
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { RemoveProductCase, UpdateProductCase } from '../../redux/dataSlice';
import { useNavigate } from 'react-router-dom';
import { changeModalCase } from '../../redux/modalSlice';

type productItemProps = {
  product: Product;
}

const ProductItem: React.FC<productItemProps> = ({product}) => {
  const { id, productName, productImage, productPrice } = product;
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate();

  const handleUpdateFunc = () => {
    navigate(`/?update=${id}`)
    setIsOpenModal(false);
    dispatch(changeModalCase())
    dispatch(UpdateProductCase(product));
  }

  return (
    <div className='mb-2 drop-shadow'>
      <div className='product-menu absolute right-4 top-2 text-red-700'>
        <HiOutlineDotsHorizontal size={24} cursor="pointer" onClick={() => setIsOpenModal(!isOpenModal)} />
      </div>

      <img src={productImage} alt={productName} className='h-[200px] w-full object-cover rounded-t-md'/>

      <div className="product-body bg-slate-900 text-white p-3 rounded-b-md">
        <h1>{productName}</h1>
        <h3>{productPrice} TL</h3>
      </div>

      {
        isOpenModal && (
          <div className='absolute right-5 top-8 bg-black text-white -50 py-2 border border-white rounded-md'>
            <span className='block border-b px-2 pb-2 pe-10 cursor-pointer' onClick={() => dispatch(RemoveProductCase(id))}>Sil</span>
            <span className='px-2 block pt-2 pe-10 cursor-pointer' onClick={handleUpdateFunc}>Düzenle</span>
          </div>
        )
      }
    </div>
  )
}

export default ProductItem