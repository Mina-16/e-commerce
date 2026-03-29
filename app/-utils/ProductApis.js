import axiosClient from "./axiosClient";

const getLatestProducts = () =>
  axiosClient.get('/products?populate=*');

// ✅ نستخدم filters بدل /:id
const getProductById = (id) =>
  axiosClient.get(`/products?filters[id][$eq]=${id}&populate=*`);

// ✅ نستخدم category.id مش category مباشرة
const getProductByCategory = (categoryId) =>
  axiosClient.get(`/products?filters[category][id][$eq]=${categoryId}&populate=*`);

export default {
  getLatestProducts,
  getProductById,
  getProductByCategory
};