import useFetchGifs from '@/hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

interface Props {
  category: string;
}

const GifGrid = ({ category }: Props) => {
  const { loading, images } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && (
        <p className="animate__animated animate__flash">Cargando...</p>
      )}

      <div className="card-grid">
        {images.map((image) => (
          <GifGridItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
