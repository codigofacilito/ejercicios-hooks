import useFetchPokemons from "../../hooks/useFetchPokemons";

const ViewTwo = () => {
 const { error, isLoading, onFetchPokemons, pokemons } = useFetchPokemons();

 return (
  <div>
   <h1>View Two</h1>
   {isLoading && <p>Cargando...</p>}
   {!isLoading && pokemons?.map(pokemon => (
    <div key={pokemon.name}>
     <p>{pokemon.name}</p>
    </div>
   ))}
   {error && <p>Something went wrong!</p>}
   <button onClick={onFetchPokemons}>Fetch pokemons</button>
  </div>
 );
};

export default ViewTwo;