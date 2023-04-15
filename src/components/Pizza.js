import React from "react";

function Pizza({pizza, onSelectPizza }) {

  const {topping, size, vegetarian} = pizza

function handleEditButton () {
  onSelectPizza(pizza)
}

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "yes" : "no"}</td>
      <td>
        <button onClick ={handleEditButton} type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
