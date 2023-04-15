import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzaList, setPizzaList] = useState([])
  const [selectedPizza, setSelectedPizza] = useState('')

  useEffect(() => {
    fetch("http://localhost:3002/pizzas")
    .then(r=> r.json())
    .then(pizzas => setPizzaList(pizzas))
  }, ([]))

  function handleChangeForm(name, value) {
    setSelectedPizza({
      ...selectedPizza,
      [name]: value,
    });
  }
    function handleEditPizza (upizzaObj) {
      const updatedPizzas = pizzaList.map((p) => 
        p.id === upizzaObj.id ? upizzaObj : p
      )
      setSelectedPizza(upizzaObj)
      setPizzaList(updatedPizzas)
    }



  return (
    <>
      <Header />
      <PizzaForm handleChangeForm={handleChangeForm} handleEditPizza={handleEditPizza} selectedPizza={selectedPizza}/>
      <PizzaList pizzaList={pizzaList} onSelectPizza={setSelectedPizza}/>
    </>
  );
}

export default App;
