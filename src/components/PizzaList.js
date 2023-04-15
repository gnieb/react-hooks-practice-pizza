import React from "react";
import Pizza from "./Pizza";

function PizzaList({pizzaList, onSelectPizza}) {

const displayPizzas = pizzaList.map(pizza => {
  return (
    <Pizza key ={pizza.id} onSelectPizza={onSelectPizza}
    pizza={pizza} />
  )
})

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
         displayPizzas
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
