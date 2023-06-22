import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/20/solid';
import Modal from '@common/Modal';
import FormProduct from '@/components/FormProduct';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Products() {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Page headings de TailwindUI */}
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1 border-b-2 mb-4 pb-4">
          <div className="flex sm:justify-between mb-4">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Product List</h2>
            <div className="mt-5 flex lg:ml-4 lg:mt-0">
              <span className="sm:ml-3">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={() => setOpen(true)}
                >
                  <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                  Add Product
                </button>
              </span>
            </div>
          </div>
          <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:justify-around sm:flex-wrap sm:space-x-6">
            <div className="mt-2 flex items-center text-sm text-gray-500">Name</div>
            <div className="mt-2 flex items-center text-sm text-gray-500">Category</div>
            <div className="mt-2 flex items-center text-sm text-gray-500">Price</div>
            <div className="mt-2 flex items-center text-sm text-gray-500">Id</div>
          </div>
        </div>
      </div>
      <Modal open={open} setOpen={setOpen}>
        <FormProduct />
      </Modal>
    </>
  );
}
