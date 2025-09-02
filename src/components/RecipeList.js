import React from "react";

function RecipeList({ recipes }) {
  return (
    <div className="recipe-list">
      {recipes.length === 0 ? (
        <p>No recipes found. Try searching!</p>
      ) : (
        recipes.map((recipe, index) => (
          <div key={index} className="recipe-card">
            <h2>{recipe.strMeal}</h2>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <p><strong>Category:</strong> {recipe.strCategory}</p>
            <p><strong>Area:</strong> {recipe.strArea}</p>
            <a href={recipe.strSource} target="_blank" rel="noreferrer">
              View Full Recipe
            </a>
          </div>
        ))
      )}
    </div>
  );
}

export default RecipeList;
