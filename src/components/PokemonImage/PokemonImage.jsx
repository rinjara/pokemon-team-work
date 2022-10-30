import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { fetchOnePokemon } from 'Services/Services';

export const PokemonImage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const name = params.get('name');

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    (async () => {
      const res = await fetchOnePokemon(name);
      setPokemon(res);
    })();
  }, [name]);

  const handleGoBack = () => {
    navigate(state.from ?? '/');
  };

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pokemon.url} />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>{pokemon.name}</Card.Title>

          <Button variant="primary" onClick={handleGoBack}>
            Go back
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
