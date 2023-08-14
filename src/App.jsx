
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Header from './components/shared/Header/Header';
import { apiPoke } from "./data/apiData";
import './App.css'
import React, { useState, useEffect } from "react";
import { PokeContext } from './components/context/PokeContext';
import PokerDetails from './components/shared/PokerDetails/PokerDetails';

function App() {

  const [pokemonData, setPokemonData] = useState([]);

useEffect(() => {
    fetch(apiPoke)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            const results = data.results;
            const fetchDataPromises = results.map((pokemon) => {
                return fetch(pokemon.url).then((response) => {
                    if (!response.ok) {
                        throw new Error(`Network response was not ok: ${response.status}`);
                    }
                    return response.json();
                });
            });
            Promise.all(fetchDataPromises)
                .then((pokemonData) => {
                    setPokemonData(pokemonData);
                })
                .catch((error) => {
                    console.error("Error fetching Pokemon data:", error);
                });
        })
        .catch((error) => {
            console.error("Fetch error:", error);
        });
}, []);
  return (
    <PokeContext.Provider value={pokemonData}>
       <Header />
              <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path='/pokerdetails/:id' element={<PokerDetails/>}/>
              </Routes>
    </PokeContext.Provider>
  );
};

export default App;