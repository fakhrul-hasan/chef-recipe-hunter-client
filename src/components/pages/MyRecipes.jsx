import React, { useEffect, useState } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import { getFavCart, removeFromDb } from '../../utilities/fakeDb';
import ChefRecipeCard from './ChefRecipeCard';
import useTitle from '../../hooks/useTitle';

const MyRecipes = () => {
    useTitle('My Recipes');
    const recipesData = useLoaderData();
    const [cart,setCart] = useState();
    useEffect(()=>{
        const storedCart = getFavCart();
        let savedCart = [];
        for(let i=0; i<storedCart.length; i++){
            const addedRecipe = recipesData.find(recipe=>recipe.id == storedCart[i]);
            savedCart.push(addedRecipe);
        }
        setCart(savedCart);
    },[])
    const handleRemoveFromCart=id=>{
        const remaining = cart.filter(recipe=>recipe.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    return (
        <div className='grid grid-cols-2 gap-4 my-4'>
            {
                cart?.map(chefRecipe=><ChefRecipeCard
                key={chefRecipe.id}
                chefRecipe={chefRecipe}
                handleRemoveFromCart={handleRemoveFromCart}
                ></ChefRecipeCard>)
            }
        </div>
    );
};

export default MyRecipes;