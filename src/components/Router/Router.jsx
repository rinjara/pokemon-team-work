// import { PokemonImage } from 'components/PokemonImage/PokemonImage';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Gallery } from 'pages/Gallery';
import { GalleryItem } from 'pages/GalleryItem';
import { Home } from 'pages/Home';
import { Routes, Route, Navigate } from 'react-router-dom';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="galleryitem" element={<GalleryItem />} />
        <Route path="*" element={<h1>Not found!</h1>} />
      </Route>
    </Routes>
  );
};
