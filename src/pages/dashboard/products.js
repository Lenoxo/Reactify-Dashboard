import { useEffect, useState } from 'react';
import { PlusIcon } from '@heroicons/react/20/solid';
import { XCircleIcon } from '@heroicons/react/24/solid';
import Modal from '@common/Modal';
import FormProduct from '@/components/FormProduct';
import axios from 'axios';
import endPoints from '@/services/api';
import Alert from '@common/Alert';
import useAlert from '@hooks/useAlert';
import { deleteProductById } from '@services/api/products';
import Link from 'next/link';
import SearchBar from '@/common/SearchBar';
import Image from 'next/image';

export default function Products() {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { alert, setAlert, toggleAlert } = useAlert();

  useEffect(() => {
    async function getProducts() {
      const response = await axios.get(endPoints.products.getAllProducts);
      setProducts(response.data);
      setFilteredProducts(response.data);
    }
    try {
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }, [alert]);

  const handleSearch = (text) => {
    const matchingProducts = products.filter((product) => {
      const productTitle = product.title.toLowerCase();
      const preparedText = text.toLowerCase();
      return productTitle.includes(preparedText);
    });
    setFilteredProducts(matchingProducts); // Actualiza el estado de los productos filtrados
  };

  const handleProductDelete = (id) => {
    deleteProductById(id)
      .then(() => {
        setAlert({
          active: true,
          message: 'Delete product successfully',
          type: 'success',
          autoClose: true,
        });
      })
      .catch((error) => {
        setAlert({
          active: true,
          message: error.message,
          type: 'error',
          autoClose: false,
        });
      });
  };
  return (
    <>
      <Alert alert={alert} handleClose={toggleAlert} />
      {/* Page headings de TailwindUI */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2 gap-2">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl px-6 font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">List of Products</h2>
        </div>
        <div className="flex px-6">
          <span>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={() => setOpen(true)}
            >
              <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Add Product
            </button>
          </span>
        </div>
      </div>

      <SearchBar handleSearch={handleSearch} />
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Id
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredProducts?.map((product) => (
                    <tr key={`Product-item-${product.id}`}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 relative h-10 w-10">
                            <Image fill={true} className="object-cover rounded-full" src={product.images[0]} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{product.title}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{product.category.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">${product.price}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link href={`/dashboard/edit/${product.id}`} className="text-blue-600 hover:text-blue-900">
                          Edit
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <XCircleIcon className="flex-shrink-0 w-6 h-6 fill-gray-400" onClick={() => handleProductDelete(product.id)} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Modal open={open} setOpen={setOpen}>
        <FormProduct setOpen={setOpen} setAlert={setAlert} />
      </Modal>
    </>
  );
}
