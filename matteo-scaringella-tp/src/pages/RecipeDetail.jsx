import React from 'react';
import { useParams } from 'react-router-dom';
import recipesData from '../data/recipes.json';

function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipesData.recipes.find(r => r.id === parseInt(id));
  if (!recipe) {
    return <h2>Recette introuvable</h2>;
  }
  return (
    <div className="recipe-detail" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} style={{ width: '100%', borderRadius: '8px' }} />
      <p><strong>Préparation :</strong> {recipe.prepTimeMinutes} min | <strong>Cuisson :</strong> {recipe.cookTimeMinutes} min</p>
      <h3>Ingrédients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Étapes de préparation</h3>
      <ol>
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeDetail;