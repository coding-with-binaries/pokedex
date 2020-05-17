import React from 'react';
import './PokeCard.css';
import { useHistory } from 'react-router-dom';

const PokeCard = (props) => {
  const { id, name } = props;
  const history = useHistory();
  const routeToPokemonDetails = () => {
    history.push(`/pokemon/${id}`);
  };
  return (
    <div className="pokemon-card" onClick={routeToPokemonDetails}>
      <div className="pokemon-card-image">
        <img
          height="180px"
          src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
          alt={`Pokémon: ${name}`}
        />
      </div>
      <div className="pokemon-card-info">
        <span className="pokemon-card-id">#{id}</span>
        <span className="pokemon-card-name">{name}</span>
      </div>
    </div>
  );
};

export default PokeCard;
