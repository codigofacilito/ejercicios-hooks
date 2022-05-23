import useCounter from "../../hooks/useCounter";

/**
 * 
 * La intencion de este ejercicio encapsular la logica de este componente en 1 solo lugar,
 * creando un hook para poder utilizarlo en todo mi proyecto. 
 * 
 * Replicarlo en Counter 
 */

const Counter = () => {
  const { count, onIncrement, onDecrement } = useCounter();
 
 return (
  <div>
   <h1>Counter</h1>
   <div>
    <p>{count}</p>
    <button onClick={onIncrement}>Sumar</button>
    <button onClick={onDecrement}>Restar</button>
   </div>
  </div>
 );
};

export default Counter;