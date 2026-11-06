import { useState, useEffect } from 'react';
import FormProduct from '@components/FormProduct';
import { useRouter } from 'next/router';
import axios from 'axios';
import endPoints from '@/services/api';
import { useAuth } from '@/hooks/useAuth';

export default function Edit() {
  const [product, setProduct] = useState({});
  const router = useRouter();
  const { auth } = useAuth();

  useEffect(() => {
    if (!router.isReady) return;
    if (router.isReady && !auth) {
      router.replace('/login');
    }

    const getProduct = async (id) => {
      const response = await axios.get(endPoints.products.getProductById(id));
      setProduct(response.data);
    };
    const { id } = router.query;
    getProduct(id);
  }, [router.isReady]);

  // This prevents rendering UI components if the user is not authenticated

  if (!auth) {
    return;
  }

  return <FormProduct product={product} />;
}
