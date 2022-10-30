import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { NavLink, useParams, useLocation } from 'react-router-dom';
import { fetchPokemons } from 'Services/Services';

export const Gallery = () => {
  const [pokemons, setPokemons] = useState([]);
  const { name: pokemonName } = useParams();
  const { pathname } = useLocation();
  useEffect(() => {
    (async () => {
      const res = await fetchPokemons();
      setPokemons(res);
    })();
  }, []);

  return (
    <div>
      Gallery
      <ListGroup as="ul">
        {pokemons.map(({ name }) => (
          <ListGroup.Item as="li" active={pokemonName === name} key={name}>
            <NavLink
              to={`/galleryitem?name=${name}`}
              style={{ color: 'red' }}
              state={{ name, from: pathname }}
              replace
            >
              {name}
            </NavLink>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
