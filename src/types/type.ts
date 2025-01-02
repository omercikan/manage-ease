export type ProductInputsType = {
  id?: string;
  name: string;
  placeholder?: string;
  type: string;
  onChangeCapture?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

export type modalInputStateType = {
  productName: string;
  productPrice: string;
  productImage: string;
};

export type Product = {
  id: number;
  productName: string;
  productPrice: string;
  productImage: string;
};