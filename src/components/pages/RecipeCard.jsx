import { Card } from "flowbite-react";
import React from "react";

const RecipeCard = ({chefRecipe}) => {
    const {recipeName} = chefRecipe;
  return (
    <>
      <div className="max-w-4xl mb-4">
        <Card
        className="w-full"
          horizontal={true}
          imgSrc="https://www.expatica.com/app/uploads/sites/5/2014/05/french-food.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {recipeName}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>
      </div>
    </>
  );
};

export default RecipeCard;
