import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefRecipeCard from './ChefRecipeCard';

const RecipeSection = () => {
    const recipes = useLoaderData();
    return (
        <div className="grid grid-cols-2 justify-center px-4 gap-4 my-4">
          {recipes.map((recipe) => (
            <ChefRecipeCard key={recipe.id} chefRecipe={recipe}></ChefRecipeCard>
          ))}
        </div>
    );
};

export default RecipeSection;