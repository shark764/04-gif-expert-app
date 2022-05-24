import type { GifType } from '@/shared/types';

interface Props extends GifType {}

const GifGridItem = ({ title, url }: Props) => (
  <div className="card animate__animated animate__fadeIn">
    <img src={url} alt={title} />
    <p>{title}</p>
  </div>
);

export default GifGridItem;
