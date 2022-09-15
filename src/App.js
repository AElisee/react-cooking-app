import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";
import Footer from "./components/Footer";

const App = () => {
  let food = ["beef", "tomato", "Chicken", "Potato", "pork", "Fish", "soup"];
  let rand = food[~~(Math.random() * food.length)];
  // let rand = Math.floor(Math.random() * food.length);

  const [search, setSearch] = useState(rand);
  const [meals, setMeals] = useState([]);
  console.log(meals);

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
          <header index={meal.idMeal}>
            <div className="bg-blur"></div>
            <div className="header-container">
              <div className="left-part">
                <div>
                  <div className="text-content">
                    <h1>Découvrez les meilleurs plats et leurs recettes...</h1>
                  </div>
                  <div className="search-content">
                    <input
                      autoFocus
                      type="text"
                      placeholder="Entrez le nom du plat (en anglais)"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                  <span className="reload">
                    <img
                      src="./refresh.svg"
                      alt="refresh"
                      onClick={() => {
                        window.location.reload();
                      }}
                    />
                  </span>
                </div>
              </div>
              <div className="right-part">
                <span className="category">{meal.strCategory}</span>
                <div
                  className="img-content"
                  style={{
                    background: `url(${meal.strMealThumb}) center/cover`,
                  }}
                ></div>
                <div className="text-content">
                  <h2>{meal.strMeal}</h2>
                  <h3>
                    Origin : <em>{meal.strArea}</em>
                  </h3>
                </div>
              </div>
            </div>
          </header>
        ))}
      <main>
        <ul className="meals-container">
          {meals && meals.map((meal) => <Card key={meal.idMeal} meal={meal} />)}
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default App;
