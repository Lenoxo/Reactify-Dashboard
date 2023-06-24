import useFetch from '@hooks/useFetch';
import endPoints from '@services/api';
import { useState } from 'react';
import { Chart } from '@common/Chart';
const PRODUCT_LIMIT = 0;
const PRODUCT_OFFSET = 0;
export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState(0);
  const products = useFetch(endPoints.products.getProducts(PRODUCT_LIMIT, PRODUCT_OFFSET));
  let currentPageProducts = products?.slice(currentPage, currentPage + 10);
  const isLastPage = currentPage + currentPageProducts?.length === products?.length;
  const categoryNames = products?.map((product) => product.category.name);
  // Esta función recibe un array como argumento, y usando reduce, va contando las veces que se repite un elemento en el array, y devuelve de return un objeto.
  const countOcurrences = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});
  const data = {
    datasets: [
      {
        label: 'Products with this category',
        data: countOcurrences(categoryNames),
        borderWidth: 2,
        backgroundColor: ['#ffbb11', '#c0c0c0', '#50AF95', '#f3ba2f', '#2a71d0'],
      },
    ],
  };

  return (
    <>
      <Chart className="mb-8 mt-2" chartData={data} />
      <div id="product-container" className="flex flex-col">
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
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentPageProducts?.map((product) => (
                    <tr key={`Product-item-${product.id}`}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={product.images[0]} alt="" />
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
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Edit
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Delete
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between">
          <a
            href={currentPage > 1 ? '#product-container' : '#previous'}
            className={`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium ${
              currentPage === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 10 : currentPage)}
          >
            Previous
          </a>
          <div className="flex items-center">
            <p className="text-sm text-gray-700 text-center">
              Showing <span className="font-medium">{currentPage + 1}</span> to <span className="font-medium">{currentPageProducts?.length + currentPage}</span> of{' '}
              <span className="font-medium">{products?.length}</span> products
            </p>
          </div>
          <a
            href={currentPage + currentPageProducts?.length < products?.length ? '#product-container' : '#Next'}
            className={`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium ${
              isLastPage ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setCurrentPage(currentPage + currentPageProducts?.length < products?.length ? currentPage + 10 : currentPage)}
          >
            Next
          </a>
        </div>
      </div>
    </>
  );
}
