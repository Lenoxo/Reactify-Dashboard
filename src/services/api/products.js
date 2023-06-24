import endPoints from '@services/api';
import axios from 'axios';

const addProducts = async (body) => {
  const config = {
    headers: {
      accept: '*/*',
      'content-Type': 'application/json',
    },
  };
  const response = await axios.post(endPoints.products.postProducts, body, config);
  return response.data;
};

const updateProducts = async (id, body) => {
  const config = {
    headers: {
      accept: '*/*',
      'content-Type': 'application/json',
    },
  };
  const response = await axios.put(endPoints.products.putProductById(id), body, config);
  return response.data;
};

const deleteProductById = async (id) => {
  const response = await axios.delete(endPoints.products.deleteProduct(id));
  return response.data;
};

export { addProducts, deleteProductById, updateProducts };
