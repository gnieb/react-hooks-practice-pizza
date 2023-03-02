import React, {useState} from "react";

function PizzaForm({handleAddPizza}) {
const [newTopping, setNewTopping] = useState('');
const [newSize, setNewSize] = useState('Small');
const [newVegetarian, setNewVegetarian] = useState('');


function handleNewTopping (e) {
  setNewTopping(e.target.value)
}

function handleNewSize (e) {
  setNewSize (e.target.value)
}

function handleNewVegetarian (e) {
  setNewVegetarian(e.target.value)
}

function handleFormSubmit (e) {
  e.preventDefault();
  const newPizza = {
    topping: newTopping,
    size: newSize,
    vegetarian: ((newVegetarian === "Vegetarian") ? "yes" : "no")
  }
  fetch("http://localhost:3001/pizzas", {
    method: "POST",
    headers: {"Content-Type" : "application/json"}, 
    body: JSON.stringify(newPizza)
  })
  .then(r => r.json())
  .then(za => handleAddPizza(za))
  
  setNewTopping('');
  setNewSize('');
  setNewVegetarian('');
}




  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
          onChange={handleNewTopping}
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
          />
        </div>
        <div className="col">
          <select onChange={handleNewSize} className="form-control" name="size">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked = {newVegetarian === "Vegetarian"}
              onChange={handleNewVegetarian}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked = {newVegetarian==="Not Vegetarian"}
              onChange={handleNewVegetarian}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
