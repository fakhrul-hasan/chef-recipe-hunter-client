import { Button, Card } from 'flowbite-react';
import React, { useState } from 'react';
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ChefCard = ({chefData}) => {
  const [like, setLike] = useState(false);
  const {picture, name, experience, num_recipes, num_likes, id} = chefData;
    return (
      <div className="max-w-sm">
      <Card
        className='object-contain'
      >
        <img className='h-64 rounded-md' src={picture} alt="" />
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <div className="mt-2.5 mb-5">
          <h6 className='font-semibold text-base'>Years of experience: <span className='text-gray-500 font-normal'>{experience}</span></h6>
          <h6 className='font-semibold text-base'>Number of recipes: <span className='text-gray-500 font-normal'>{num_recipes}</span></h6>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-normal text-gray-900 dark:text-white flex items-center gap-1">
            <div onClick={()=>setLike(!like)}>{like ? <FaThumbsUp/> : <FaRegThumbsUp/>}</div>
            {num_likes}
          </span>
          <Link
            to={`/recipes/${id}`}
            className="rounded-lg bg-green-400 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-400 dark:hover:bg-green-600 dark:focus:ring-green-300"
          >
            View Recipes
          </Link>
        </div>
      </Card>
    </div>
    );
};

export default ChefCard;