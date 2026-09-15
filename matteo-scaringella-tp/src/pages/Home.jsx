import React from 'react';
import { Link } from 'react-router-dom';
import recipesData from '../data/recipes.json';

function Home() {
  const recipes = recipesData.recipes;
  return (
    <div className="home-container">
      <h2>Nos Recettes</h2>
      <div className="recipes-grid">
        {recipes.map((recipe) => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="recipe-card">
              <img src={recipe.image} alt={recipe.name} width="100%" />
              <h3>{recipe.name}</h3>
              <p>Préparation : {recipe.prepTimeMinutes} min</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;