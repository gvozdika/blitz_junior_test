import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./PokeDetails.css";

export const PokeDetails = () => {
  const { pokeName } = useParams();
  const [pokeDetails, setPokeDetails] = useState({});

  const fetchData = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

    const data = await fetch(url);
    const details = await data.json();

    // console.log(details);

    const types = details.types.map((type) => type.type.name);
    const abilities = details.abilities.map((ability) => ability.ability.name);

    setPokeDetails({
      id: details.id,
      height: details.height,
      weight: details.weight,
      types: types.join(", "),
      abilities: abilities.join(", "),
      imgUrl: details.sprites.front_default,
    });
    // console.log(pokeDetails);
  };

  useEffect(() => {
    fetchData();
  }, [pokeDetails]);

  return (
    <div className="pokeDetails">
      <h1 className="pokeDetails__name">{pokeName}</h1>
      <div className="pokeDetail__id">#{pokeDetails.id}</div>
      <div
        className="pokeDetails__img"
        style={{ backgroundImage: `url(${pokeDetails.imgUrl})` }}
      ></div>
      <div className="pokeDetails__container">
        <div className="pokeDetails__height">
          <div className="pokeDetails__left_raw">height:</div>
          <div className="pokeDetails__right_raw">
            {pokeDetails.height / 10}m
          </div>
        </div>
        <div className="pokeDetails__weight">
          <div className="pokeDetails__left_raw">weight:</div>
          <div className="pokeDetails__right_raw">
            {pokeDetails.weight / 10}kg
          </div>
        </div>
        <div className="pokeDetails__types">
          <div className="pokeDetails__left_raw">type(s):</div>
          <div className="pokeDetails__right_raw">{pokeDetails.types}</div>
        </div>
        <div className="pokeDetails__abilities">
          <div className="pokeDetails__left_raw">abilities:</div>
          <div className="pokeDetails__right_raw">{pokeDetails.abilities}</div>
        </div>
      </div>
    </div>
  );
};
