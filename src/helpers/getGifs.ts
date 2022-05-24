import { giphyApiKey, giphyUrl, limit } from '@/shared/constants';
import type { JSONResponse } from '@/shared/types';

export const getGifs = async (category: string) => {
  const res = await fetch(
    `${giphyUrl}/gifs/search?api_key=${giphyApiKey}&q=${encodeURI(
      category
    )}&limit=${limit}`
  );
  const { data } = await (res.json() as Promise<JSONResponse>);
  const gifs = (data ?? [])?.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium?.url,
  }));
  console.log('file: GifGrid.tsx ~ line 17 ~ getGifs ~ data', gifs);
  return gifs;
};
