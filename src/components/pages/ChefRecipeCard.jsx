import { Card } from "flowbite-react";
import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaRegHeart, FaHeart, FaRegTrashAlt } from "react-icons/fa";
import { Toaster} from "react-hot-toast";
import { addToDb} from "../../utilities/fakeDb";
import Modal from 'react-modal';
import { useLocation } from "react-router-dom";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


const ChefRecipeCard = ({ chefRecipe, handleRemoveFromCart }) => {
  let subtitle;
  const [favorite, setFavorite] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const { recipeName, ingredients, cookingMethod, rating, id } = chefRecipe;
  const ingredientsArr = ingredients.join(", ");
  const location = useLocation().pathname;
  const handleFavorite = (id) => {
      addToDb(id);
      setFavorite(!favorite);
  };
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#2caf5c';
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <div className="max-w-4xl h-80 mx-auto">
        <div>
          <Toaster />
        </div>
        <Card
          className="w-full"
          horizontal={true}
          imgSrc="https://www.expatica.com/app/uploads/sites/5/2014/05/french-food.jpg"
        >
          <div className="flex items-center justify-between">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {recipeName}
            </h5>
            <div>
              {location === '/myRecipes' || <div>{!favorite ? (
                <FaRegHeart onClick={() => handleFavorite(id)} className="text-xl" />
                ) : (
                <FaHeart onClick={() => handleFavorite(id)} className="text-xl" />
              )}</div>}
            </div>
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
            {cookingMethod.slice(0,100)} ... <button className="hover:text-green-400" onClick={openModal}>more</button>
            <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <img className="w-80" src="https://www.expatica.com/app/uploads/sites/5/2014/05/french-food.jpg" alt="" />
        <h2 className="text-2xl font-bold mb-2" ref={(_subtitle) => (subtitle = _subtitle)}>{recipeName}</h2>
        <div className="max-w-2xl mb-2">
        <p><span className="font-semibold">Ingredients: </span>{ingredientsArr}</p>
        <p><span className="font-semibold">Cooking Method: </span>{cookingMethod}</p>
        </div>
        <button className="bg-green-400 hover:bg-green-600 text-white px-2 py-1 rounded-md" onClick={closeModal}>close</button>
      </Modal>
          </p>
          <div className="font-normal text-gray-700 dark:text-gray-400 flex items-center justify-between">
            <span className="text-black font-semibold dark:text-white flex gap-2">
              Rating:{" "}
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
            {rating}
            </span>
                {location === '/myRecipes' && <FaRegTrashAlt onClick={()=>handleRemoveFromCart(id)}/>}
          </div>
        </Card>
      </div>
    </>
  );
};

export default ChefRecipeCard;
