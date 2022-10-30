import { PokemonImage } from "components/PokemonImage/PokemonImage";
import { SharedLayout } from "components/SharedLayout/SharedLayout";
import { Gallery } from "pages/Gallery";
import { Home } from "pages/Home";
import { Routes, Route } from "react-router-dom";

export const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<SharedLayout/>}>
            <Route index element={<Home/>} />
            <Route path="gallery" element={<Gallery/>}>
                <Route path=":name" element={<PokemonImage/>}/>
            </Route>

        </Route>   
        
     </Routes>
  )
}
