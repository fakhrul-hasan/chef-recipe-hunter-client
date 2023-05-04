import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getFavCart } from '../../utilities/fakeDb';
import ChefRecipeCard from './ChefRecipeCard';

const MyRecipes = () => {
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
    return (
        <div className='grid grid-cols-2 gap-4 my-4'>
            {
                cart?.map(chefRecipe=><ChefRecipeCard
                key={chefRecipe.id}
                chefRecipe={chefRecipe}
                ></ChefRecipeCard>)
            }
        </div>
    );
};

export default MyRecipes;