import { useEffect, useState } from 'react';
import { getGifs } from '@/helpers/getGifs';
import type { GifType } from '@/shared/types';

const useFetchGifs = (category: string) => {
  const [images, setImages] = useState<GifType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    void getGifs(category).then((imgs) => {
      setImages(imgs);
      setLoading(false);
    });
  }, [category]);

  return {
    images,
    setImages,
    loading,
    setLoading,
  };
};

export default useFetchGifs;
