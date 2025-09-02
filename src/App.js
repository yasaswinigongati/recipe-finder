import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getRecipes = async (query) => {
    if (!query) return;

    setLoading(true);
    setError("");

    try {
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
      const response = await fetch(url);

      if (!response.ok) throw new Error("Failed to fetch recipes");

      const data = await response.json();

      if (data.meals) {
        setRecipes(data.meals); // Meals array
      } else {
        setRecipes([]); // No results found
      }
    } catch (err) {
      setError("Error fetching recipes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🍳 Recipe Finder</h1>
        <p>Discover delicious recipes from around the world!</p>
      </header>
      
      <main>
        <SearchBar onSearch={getRecipes} />
        
        {loading && <p className="loading">Searching for recipes...</p>}
        
        {error && <p className="error">{error}</p>}
        
        <RecipeList recipes={recipes} />
      </main>
    </div>
  );
}

export default App;
