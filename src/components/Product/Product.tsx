import React, { useState } from "react";
import ProductList from "./ProductList";
import FormModal from "../Form/FormModal";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { changeModalCase } from "../../redux/modalSlice";

const Product: React.FC = () => {
    const { data } = useSelector((state:RootState) => state.data);
  const { isOpenModal } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch<AppDispatch>();
 
  const onCloseModal = () => {
    dispatch(changeModalCase());
  };

  return (
    <div>
      <ProductList productsData={data}/>

      <div>
        {isOpenModal && (
          <FormModal
            onClose={onCloseModal}
          />
        )}
      </div>
    </div>
  );
};

export default Product;
