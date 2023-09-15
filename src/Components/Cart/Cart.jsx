/* eslint-disable react/prop-types */
import "./Cart.css";

const Cart = ({ selectedActors, remaining, totalCost }) => {
  console.log(selectedActors);

  return (
    <div>
      <h1>Total Actors: {selectedActors.length}</h1>
      <h3>Remaining: {remaining}</h3>
      <h3>Total Cost: {totalCost}</h3>
      
      {selectedActors.map((actor) => (
        <li key={actor.id}>{actor.name}</li>
      ))}
    </div>
  );
};

export default Cart;
