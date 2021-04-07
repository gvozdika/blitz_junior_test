import { FaChevronDown, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./Navbar.css";

export const Navbar = () => {

  const [pokemons, setPokemons] = useState([]);
  const navbar = useRef(null);

  useEffect(() => {
    for (let i = 1; i < 9; i++) {
      fetch(`https://pokeapi.co/api/v2/generation/${i}`)
        .then((res) => res.json())
        .then((pokemons) => {
          setPokemons((prev) => [
            ...prev,
            [...pokemons.pokemon_species.map((pok) => pok.name)].sort(),
          ]);
        });
    }
  }, []);

  const toggleSidebar = () => {
    navbar.current.classList.toggle("navbar--active");
  };

  const clickGenerationBtn = (e) => {
    e.target.nextSibling.classList.toggle("generation__list--active");
  };

  return (
    <div className="sidebar">
      <Link to="#" className="menu--open" onClick={toggleSidebar}>
        MENU
      </Link>

      <nav className="navbar" ref={navbar}>
        <Link to="#" className="menu--close" onClick={toggleSidebar}>
          <FaTimes />
        </Link>

        <ul className="generations-list">
          {pokemons.map((generation, id) => (
            <li className="generation" key={id}>
              <button
                className="generation__btn"
                onClick={(e) => clickGenerationBtn(e)}
              >
                {++id + " GENERATION"} <FaChevronDown />
              </button>
              <ul className="generation__list">
                {generation.map((pokemon, id) => (
                  <li className="generation__item" key={id}>
                    <Link to={{ pathname: `/${pokemon}` }} className="generation__link" onClick={toggleSidebar}>
                      {pokemon}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
