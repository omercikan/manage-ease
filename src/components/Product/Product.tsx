import React from "react";
import ProductList from "./ProductList";
import FormModal from "../Form/FormModal";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { changeModalCase } from "../../redux/modalSlice";
import { useNavigate } from "react-router-dom";

const Product: React.FC = () => {
  const { searchedData } = useSelector((state: RootState) => state.data);
  const { isOpenModal } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const onCloseModal = () => {
    dispatch(changeModalCase());
    navigate("/");
  };

  return (
    <div>
      {searchedData.length == 0 ? (
        <p>Henüz ürün eklemediniz</p>
      ) : (
        <ProductList productsData={searchedData} />
      )}

      {isOpenModal && (
        <div>
          <FormModal onClose={onCloseModal} />
        </div>
      )}
    </div>
  );
};

export default Product;
