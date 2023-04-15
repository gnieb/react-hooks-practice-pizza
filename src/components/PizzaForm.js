import React, {useState} from "react";

function PizzaForm({handleEditPizza, selectedPizza, handleChangeForm}) {
// const [newTopping, setNewTopping] = useState(selectedPizza.topping);
// const [newSize, setNewSize] = useState(selectedPizza.size);
// const [newVegetarian, setNewVegetarian] = useState(selectedPizza.vegetarian);

const { topping, size, vegetarian } = selectedPizza;

function handleToppingChange (e) {
  handleChangeForm(e.target.name, e.target.value)
}

function handleNewSize (e) {
  handleChangeForm(e.target.name, e.target.value)
}

function handleNewVegetarian (e) {
  handleChangeForm(e.target.name, e.target.value === "Vegetarian")
}

function handleFormSubmit (e) {
  e.preventDefault();
  fetch(`http://localhost:3002/pizzas/${selectedPizza.id}`, {
    method: "PATCH",
    headers: {"Content-Type" : "application/json"}, 
    body: JSON.stringify(selectedPizza)
  })
  .then(r => r.json())
  .then(za => handleEditPizza(za))
  
  
}




  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            value={topping}
            onChange={handleToppingChange}
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
          />
        </div>
        <div className="col">
          <select onChange={handleNewSize} value = {size} className="form-control" name="size">
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
            
              checked = {vegetarian}
              onChange={handleNewVegetarian}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked = {!vegetarian}
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
