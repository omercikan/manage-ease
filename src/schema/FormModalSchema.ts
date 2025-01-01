import * as Yup from 'yup';

export const FormModalSchema = Yup.object().shape({
    productName: Yup.string()
    .required("Ürün ismi zorunludur")
    .min(6, 'En az 6 karakter girmelisiniz'),

    productPrice: Yup.number()
    .required("Ürün fiyatı zorunludur")
    .positive("Lütfen pozitif bir sayı giriniz")
    .integer("Lütfen fiyatı tam sayı şeklinde giriniz"),

    productImage: Yup.string()
    .required("Ürün resmi zorunludur")
});