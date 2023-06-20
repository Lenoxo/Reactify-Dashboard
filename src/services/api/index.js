const API = process.env.NEXT_API_URL;
const VERSION = process.env.NEXT_API_VERSION;

const endPoints = {
  auth: {
    login: `${API}/${VERSION}/auth/login`,
    profile: `${API}/${VERSION}/auth/profile`,
    refreshToken: `${API}/${VERSION}/auth/refresh-token`,
  },
  products: {
    getProducts: (limit, offset) => `${API}/${VERSION}/products?limit=${limit}&offset=${offset}`,
    postProducts: `${API}/${VERSION}/products`,
    getProductById: (id) => `${API}/${VERSION}/products/${id}`,
    putProductById: (id) => `${API}/${VERSION}/products/${id}`,
    deleteProductById: (id) => `${API}/${VERSION}/products/${id}`,
  },
  users: {
    getUsers: (limit) => `${API}/${VERSION}/users?limit=${limit}`,
    postUsers: `${API}/${VERSION}/users`,
    isAvailableUserEmail: `${API}/${VERSION}/users/is-available`,
    getUserById: (id) => `${API}/${VERSION}/users/${id}`,
    putUserById: (id) => `${API}/${VERSION}/users/${id}`,
    deleteUserById: (id) => `${API}/${VERSION}/users/${id}`,
  },
  categories: {
    getCategories: (limit) => `${API}/${VERSION}/categories?limit=${limit}`,
    postCategories: `${API}/${VERSION}/categories`,
    getCategoryById: (id) => `${API}/${VERSION}/categories${id}`,
    putCategoryById: (id) => `${API}/${VERSION}/categories${id}`,
    deletetCategoryById: (id) => `${API}/${VERSION}/categories${id}`,
    getProductsInCategory: (id, limit, offset) => `${API}/${VERSION}/categories/${id}/products?limit=${limit}&offset=${offset}`,
  },
  files: {
    postFiles: `${API}/${VERSION}/files/upload`,
    getFile: (fileName) => `${API}/${VERSION}/files/${fileName}`,
  },
};

export default endPoints;
