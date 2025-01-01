import { useField } from 'formik'
import React from 'react'
import { ProductInputsType } from '../../../types/type';

const ProductPriceInput: React.FC<ProductInputsType> = ({...props}) => {
    const [field, meta] = useField(props);

  return (
    <div>
        <input {...field} {...props} className='border w-full p-3 rounded-lg outline-none mt-3' />
        { meta?.error && <p>{meta.error}</p> }
    </div>
  )
}

export default ProductPriceInput