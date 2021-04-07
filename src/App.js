import "./App.css";
import { PokeCards } from "./PokeCards";
import { Navbar } from "./Navbar";
import { Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { PokeDetails } from "./PokeDetails";


function App() {

  const [pokeNames, setPokeNames] = useState([]);
  const [pokeImgUrls, setPokeImgUrls] = useState([]);
  const [page, setPage] = useState(0);

  const fetchData = (pageNum) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${
      20 * pageNum
    }&limit=20`;

    fetch(url)
      .then((res) => res.json())
      .then((pokemons) => {
        pokemons.results.map((pokemon) => {
          setPokeNames((prev) => [...prev, pokemon.name]);
          return fetch(pokemon.url)
            .then((res) => res.json())
            .then((pokemon) => {
              const imgUrl = pokemon.sprites.front_default;
              setPokeImgUrls((prev) => [...prev, imgUrl]);
            });
        });
      });
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="App">
      <Navbar />

      <Route
        exact
        path="/"
        render={() => (
          <PokeCards pokeNames={pokeNames} pokeImgUrls={pokeImgUrls} />
        )}
      />
      <Route exact path="/:pokeName" render={() => <PokeDetails />} />
    </div>
  );
}

export default App;
