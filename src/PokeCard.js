import "./PokeCard.css";
import { Link } from "react-router-dom";

export const PokeCard = ({ name, bgUrl }) => {

  return (
    <li>
      <Link to={{ pathname: `/${name}` }} className="pokeCard">
        <div
          className="pokeImg"
          style={{ backgroundImage: `url(${bgUrl})` }}
        ></div>
        <div className="pokeName">{name}</div>
      </Link>
    </li>
  );
};
