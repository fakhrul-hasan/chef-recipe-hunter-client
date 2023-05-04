import { Card } from "flowbite-react";
import React, { useState } from "react";
import { FaLink } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import Modal from 'react-modal';

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

const RecipeCard = ({recipe}) => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    const {recipeName, rating, ingredients, cookingMethod} = recipe;
    const ingredientsArr = ingredients.join(", ");
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
    <div className="max-w-sm relative group">
      <Card imgSrc="https://www.expatica.com/app/uploads/sites/5/2014/05/french-food.jpg">
        <div className="absolute top-56 right-0 bg-slate-50 text-black h-8 text-xl text-gray-500 w-full cursor-pointer opacity-0 group-hover:opacity-100 px-6 flex items-center justify-between" onClick={openModal}>
            <p>Read More</p>
            <FaLink/>
        </div>
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
        <button className="bg-green-400 px-2 py-1 rounded-md" onClick={closeModal}>close</button>
      </Modal>
        <h5 className="text-2xl font-semibold tracking-tight text-gray-500 dark:text-white">
          {recipeName}
        </h5>
        <div className="font-normal text-gray-700 dark:text-gray-400 flex gap-2">
            <span className="text-black font-semibold dark:text-white">
              Rating:{" "}
            </span>
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
            {rating}
          </div>
      </Card>
    </div>
  );
};

export default RecipeCard;
