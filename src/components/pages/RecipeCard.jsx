import { Card } from "flowbite-react";
import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaRegHeart } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";

const RecipeCard = ({ chefRecipe }) => {
  const [favorite, setFavorite] = useState(false);
  const { recipeName, ingredients, cookingMethod, rating } = chefRecipe;
  const ingredientsArr = ingredients.join(", ");
  const addToFavorite =()=>{
    setFavorite(!favorite);
    toast.success('Successfully added to your favorite recipe!');
  }
  return (
    <>
      <div className="max-w-4xl mb-4">
      <div><Toaster/></div>
        <Card
          className="w-full"
          horizontal={true}
          imgSrc="https://www.expatica.com/app/uploads/sites/5/2014/05/french-food.jpg"
        >
          <div className="flex items-center justify-between">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {recipeName}
          </h5>
          {(!favorite) ? <FaRegHeart onClick={addToFavorite} className="text-xl"/> : ''}
          </div>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span className="text-black font-semibold dark:text-white">
              Ingredients:{" "}
            </span>
            {ingredientsArr}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span className="text-black font-semibold dark:text-white">
              Cooking Method:{" "}
            </span>
            {cookingMethod}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400 flex gap-2">
            <span className="text-black font-semibold dark:text-white">
              Rating:{" "}
            </span>
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
            {rating}
          </p>
        </Card>
      </div>
    </>
  );
};

export default RecipeCard;
