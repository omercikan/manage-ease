import { Form, Formik } from 'formik';
import React, { useState } from 'react'
import ProductNameInput from './Inputs/ProductNameInput';
import ProductPriceInput from './Inputs/ProductPriceInput';
import ProductFileInput from './Inputs/ProductFileInput';
import { IoMdClose } from "react-icons/io";
import { FormModalSchema } from '../../schema/FormModalSchema';
import { Product } from '../../types/type';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { AddProductCase } from '../../redux/dataSlice';

type FormModalProps = {
  onClose: () => void;
}

const FormModal: React.FC<FormModalProps> = ({onClose}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.data);
   const [modalInputValues, setModalInputValues] = useState<Product>({
      id: data.length +1,
      productName: "",
      productPrice: "",
      productImage: "",
  });

  const onChangeFunc = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    if(type === "url") {
      setModalInputValues(prev => ({...prev, [e.target.name]: URL.createObjectURL(e.target.files![0])}))
    } else {
      setModalInputValues(prev => ({...prev, [e.target.name]: e.target.value}))
    }
  }

  return (
    <div>
     <Formik
       initialValues={{
         productName: '',
         productPrice: '',
         productImage: '',
       }}
       onSubmit={async (values, actions) => {
          await new Promise((resolve) => setTimeout(resolve, 1000))
          actions.resetForm();
          onClose();
       }}
       validationSchema={FormModalSchema}
     >
       {({ errors, touched, isSubmitting }) => {
        const hasErrors = Object.keys(errors).length > 0;
        const allTouched = Object.keys(touched).length === Object.keys(errors).length;

        return (
         <Form className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 bg-white shadow-lg py-5 px-3 border rounded-md'>
            <div className="form-top flex justify-between items-center border-b pb-3">
              <h1 className='text-2xl leading-none font-medium'>Ürün Oluştur</h1>
              <IoMdClose size={24} cursor="pointer" onClick={() => onClose()}/>
            </div>

           <ProductNameInput value={modalInputValues.productName} name="productName" id='productName' type="text" placeholder="Ürün adı" onChangeCapture={(e: React.ChangeEvent<HTMLInputElement>) => onChangeFunc(e, "productName")} />
           <ProductPriceInput value={modalInputValues.productPrice} name="productPrice" id='productPrice' type="number" placeholder="Ürün fiyatı" onChangeCapture={(e: React.ChangeEvent<HTMLInputElement>) => onChangeFunc(e, "productPrice")}/>
           <ProductFileInput name="productImage" id="productImage" type="file" onChangeCapture={(e: React.ChangeEvent<HTMLInputElement>) => onChangeFunc(e, "productImage")}/>
           <button type='submit' className='bg-slate-900 mt-3 text-white w-full py-2 rounded-md disabled:bg-slate-500' disabled={isSubmitting || hasErrors || allTouched} onClick={() => dispatch(AddProductCase(modalInputValues))}>Ürün Oluştur</button>
         </Form>
        )
      }}
     </Formik>
   </div>
  )
}

export default FormModal