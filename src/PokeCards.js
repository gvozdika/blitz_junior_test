import { PokeCard } from "./PokeCard";
import "./PokeCards.css";

export const PokeCards = ({pokeNames, pokeImgUrls}) => {
  return (
    <ul className="pokeCards">
      {pokeNames.map((name, id) => (
        <PokeCard key={id} name={name} bgUrl={pokeImgUrls[id]} />
      ))}
    </ul>
  );
};
