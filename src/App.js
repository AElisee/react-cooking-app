import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  let food = ["beef", "tomato", "Chicken", "Potato", "pork", "Fish"];
  let rand = food[~~(Math.random() * food.length)];
  // let rand = Math.floor(Math.random() * food.length);

  const [search, setSearch] = useState(rand);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search)
      .then((res) => setMeals(res.data.meals));
  }, [search]);

  const handleback = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      {meals === null ? (
        <div className="not-found">
          <div>
            <h3>
              <em>
                Aucun plat ne correspond à "
                <span style={{ color: "orangered" }}>{search}</span>" .
              </em>
            </h3>
            <p>
              - Vérifiez que que vous n'avez pas fait de faute de frappe: "beff"
              au lieu de "beef"
            </p>
            <p>- Essayez avec un autre plat (en anglais)</p>

            <button onClick={() => handleback()}>Retourner à l'Accueil</button>
          </div>
        </div>
      ) : null}
      {meals &&
        meals.slice(0, 1).map((meal) => (
          <header
            index={meal.idMeal}
            style={{ background: `url(${meal.strMealThumb}) center/cover` }}
          >
            <div className="header-content">
              <h1>{meal.strMeal}</h1>
              <input
                type="text"
                placeholder="Nom du plat (en anglais)"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </header>
        ))}
      <main>
        <ul className="meals-container">
          {meals && meals.map((meal) => <Card key={meal.idMeal} meal={meal} />)}
        </ul>
      </main>
    </div>
  );
};

export default App;
