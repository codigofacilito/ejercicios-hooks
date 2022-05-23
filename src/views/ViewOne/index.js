import { useEffect, useState } from "react";

import useFetchPokemons from "../../hooks/useFetchPokemons";

const ViewOne = () => {
 const { pokemons, error, isLoading, onFetchPokemons } = useFetchPokemons();


 useEffect(() => {
  onFetchPokemons().catch(null);
 }, []);

 return (
  <div>
   <h1>View One</h1>
   {isLoading && <p>Cargando...</p>}
   {!isLoading && pokemons?.map(pokemon => (
    <div key={pokemon.name}>
     <p>{pokemon.name}</p>
    </div>
   ))}
   {error && <p>Something went wrong!</p>}
  </div>
 );
};

export default ViewOne;