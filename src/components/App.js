import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzaList, setPizzaList] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
    .then(r=> r.json())
    .then(pizzas => setPizzaList(pizzas))
  }, ([]))

  function handleAddPizza (newPizza) {
    setPizzaList([...pizzaList, newPizza])
  }


  return (
    <>
      <Header />
      <PizzaForm handleAddPizza={handleAddPizza}/>
      <PizzaList pizzaList={pizzaList} />
    </>
  );
}

export default App;
