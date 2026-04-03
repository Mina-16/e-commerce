import axiosClient from "./axiosClient";

const addToCart = (payload) => axiosClient.post('/carts', payload)
const getUserCsrtItems = (email) => axiosClient.get('') 
export default{
    addToCart
};