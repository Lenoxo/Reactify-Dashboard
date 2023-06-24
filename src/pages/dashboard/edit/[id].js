import { useState, useEffect } from 'react';
import FormProduct from '@components/FormProduct';
import { useRouter } from 'next/router';
import axios from 'axios';
import endPoints from '@/services/api';

export default function Edit() {
  const [product, setProduct] = useState({});
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    const getProduct = async (id) => {
      const response = await axios.get(endPoints.products.getProductById(id));
      setProduct(response.data);
    };
    const { id } = router.query;
    getProduct(id);
  }, [router?.isReady]);
  return <FormProduct product={product} />;
}
