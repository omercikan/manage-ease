import { useField } from 'formik'
import React from 'react'
import { ProductInputsType } from '../../../types/type'
import { PiCameraPlusDuotone } from "react-icons/pi";

const ProductFileInput: React.FC<ProductInputsType> = ({...props}) => {
    const [field, meta] = useField(props)

  return (
    <div>
        <label htmlFor="productImage" className='flex items-center gap-x-1.5 mt-3 border-2 cursor-pointer hover:bg-slate-800 hover:text-white transition-all duration-500  border-dotted p-2 rounded-lg'>
          <PiCameraPlusDuotone size={20}/>
          Resim seç
        </label>
        <input {...field} {...props} className='hidden'/>
        { meta?.error && <p>{meta.error}</p> }
    </div>
  )
}

export default ProductFileInput