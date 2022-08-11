import React from "react";

const Card = ({ meal }) => {
  return (
    <div className="card">
      <h3>{meal.strMeal}</h3>
      <h5>
        origin : <em>{meal.strArea}</em>
      </h5>
      <img src={meal.strMealThumb} alt={"photo of " + meal.strMeal} />
      <p>{meal.strInstructions}</p>
    </div>
  );
};

export default Card;
