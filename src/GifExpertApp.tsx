import { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const categoriesArr = ['One Punch', 'Samurai X', 'Dragon Ball'];

const GifExpertApp = () => {
  const [categories, setCategories] = useState(categoriesArr);

  const handleAdd = (value: string) => {
    setCategories((oldCategories) => [value, ...oldCategories]);
  };

  return (
    <>
      <h2>GifExpertApp</h2>

      <AddCategory handleAdd={handleAdd} />

      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
