import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import ProductNameInput from "./Inputs/ProductNameInput";
import ProductPriceInput from "./Inputs/ProductPriceInput";
import ProductFileInput from "./Inputs/ProductFileInput";
import { IoMdClose } from "react-icons/io";
import { FormModalSchema } from "../../schema/FormModalSchema";
import { Product } from "../../types/type";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { AddProductCase, UpdateProductCase } from "../../redux/dataSlice";
import { useNavigate } from "react-router-dom";

type FormModalProps = {
  onClose: () => void;
};

const FormModal: React.FC<FormModalProps> = ({ onClose }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.data);
  const location = new URLSearchParams(window.location.search);
  const navigate = useNavigate();
  const [modalInputValues, setModalInputValues] = useState<Product>({
    id: data.length + 1,
    productName: "",
    productPrice: "",
    productImage: "",
  });

  const paramsID = location.get("update");
  const matchedProduct = data.find(
    (product) => product.id === Number(paramsID)
  );

  useEffect(() => {
    if (matchedProduct) {
      setModalInputValues({ ...matchedProduct });
    }
  }, [paramsID]);

  const onChangeFunc = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    if (type == "productImage") {
      const file = e.target.files![0];
      const reader = new FileReader();

      reader.onload = () => {
        const image = reader.result;
        setModalInputValues((prev) => ({ ...prev, [e.target.name]: image }));
      };
      reader.readAsDataURL(file);
    } else {
      setModalInputValues((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleProduct = () => {
    if (paramsID) {
      dispatch(UpdateProductCase({ ...modalInputValues }));
      navigate("/");
    } else {
      dispatch(AddProductCase({ ...modalInputValues }));
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          productName: "",
          productPrice: "",
          productImage: "",
        }}
        onSubmit={async (values, actions) => {
          await new Promise((resolve) => setTimeout(resolve, 250));
          actions.resetForm();
          onClose();
        }}
        validationSchema={FormModalSchema}
      >
        {({ errors, touched, isSubmitting }) => {
          const hasErrors = Object.keys(errors).length > 0;
          const allTouched =
            Object.keys(touched).length === Object.keys(errors).length;

          return (
            <Form className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-[430px]:w-11/12 max-[768px]:w-3/4 md:w-1/2 lg:w-1/3 bg-white shadow-lg py-5 px-3 border rounded-md">
              <div className="form-top flex justify-between items-center border-b pb-3">
                <h1 className="text-2xl leading-none font-medium">
                  {paramsID ? "Ürün Güncelle" : "Ürün Oluştur"}
                </h1>
                <IoMdClose
                  size={24}
                  cursor="pointer"
                  onClick={() => onClose()}
                />
              </div>

              <ProductNameInput
                value={modalInputValues.productName}
                name="productName"
                id="productName"
                type="text"
                placeholder="Ürün adı"
                onChangeCapture={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onChangeFunc(e, "productName")
                }
              />
              <ProductPriceInput
                value={modalInputValues.productPrice}
                name="productPrice"
                id="productPrice"
                type="number"
                placeholder="Ürün fiyatı"
                onChangeCapture={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onChangeFunc(e, "productPrice")
                }
              />
              <ProductFileInput
                name="productImage"
                id="productImage"
                type="file"
                onChangeCapture={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onChangeFunc(e, "productImage")
                }
              />
              <button
                type="submit"
                className="bg-slate-900 mt-3 text-white w-full py-2 rounded-md disabled:bg-slate-500"
                disabled={isSubmitting || hasErrors || allTouched}
                onClick={handleProduct}
              >
                {paramsID ? "Ürün Güncelle" : "Ürün Oluştur"}
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormModal;
