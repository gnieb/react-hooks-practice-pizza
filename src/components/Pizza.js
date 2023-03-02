import React from "react";

function Pizza({id, topping, size, vegetarian }) {

function handleEditButton (e) {
  console.log(e)
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
