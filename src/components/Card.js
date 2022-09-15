import React from "react";

const Card = ({ meal }) => {
  return (
    // <div className="card">

    //   <h3>{meal.strMeal}</h3>
    //   <h5>
    //     origin : <em>{meal.strArea}</em>
    //   </h5>
    //   <img src={meal.strMealThumb} alt={"photo of " + meal.strMeal} />
    //   <p>{meal.strInstructions}</p>
    // </div>
    <div className="card">
      <img src={meal.strMealThumb} alt={"photo of " + meal.strMeal} />
      <div className="text-content">
        <h3>{meal.strMeal}</h3>
        <p>{meal.strInstructions}</p>
      </div>
      <span className="origin">
        origin : <em>{meal.strArea}</em>
      </span>
    </div>
  );
};

export default Card;
