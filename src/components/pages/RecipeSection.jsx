import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefRecipeCard from './ChefRecipeCard';
import useTitle from '../../hooks/useTitle';

const RecipeSection = () => {
  useTitle('All Recipes');
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