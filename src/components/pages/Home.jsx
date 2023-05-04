import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ChefCard from "./ChefCard";
import About from "./About";
import RecipeCard from "./RecipeCard";
import { Spinner } from "flowbite-react";
import { BsArrowRepeat } from "react-icons/bs";
import useTitle from "../../hooks/useTitle";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Home = () => {
  useTitle('');
  let [recipes, setRecipes] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(
          "https://chef-recipe-hunter-server-fakhrul-hasan.vercel.app/recipes"
        )
      ).json();
      setRecipes(data);
      setLoading(false);
    };
    dataFetch();
  }, []);
  const chefsData = useLoaderData();
  if (loading) {
    return (
      <div className="text-center">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    );
  }
  if (recipes.length > 6) {
    recipes = recipes.slice(0, 6);
  }
  return (
    <>
      <section className="md:min-h-screen w-full">
        <div className="md:flex gap-8 items-end px-2 md:px-10 md:h-96 py-4">
          <div className="flex-none">
            <img
              className="h-4/5 w-96 col-span-1 hidden md:block absolute bottom-0"
              src="http://wethemez.com/demo/manganted/img/home2-img.png"
              alt=""
            />
          </div>
          <div className="col-span-2 text-center flex flex-col justify-center grow max-w-2xl md:absolute bottom-1/3 right-36">
            <h2 className="text-white text-2xl md:text-4xl font-bold">
              Contemporary western cuisine for all
            </h2>
            <h3 className="text-white text-lg md:text-3xl font-bold">
              Find Anything What you Want to Eat!
            </h3>
            <p className="text-white">
              {" "}
              What is our stereotypical impression of western cuisine? Is it the
              exorbitant prices, high quality of ingredients, food styling,
              comfortable venue, or service charges? If it is, rest assured Chef
              Recipe™ has those as the elements in running our business for
              heartlanders except for the first and last.
            </p>
          </div>
        </div>
        <div className="bg-green-400 md:mt-28 md:absolute w-full flex items-center justify-around">
          <div className="flex items-center">
            <div className="rotate-45 bg-green-400 h-20 w-20">
              <img
                className="h-16 -rotate-45"
                src="http://wethemez.com/demo/manganted/img/logo.png"
                alt=""
              />
            </div>
            <span className="text-2xl font-semibold text-white z-10">
              S-peac-hless
            </span>
          </div>
          <div>
            <Link to="/recipes" className="text-white hover:text-gray-300 me-4">
              Recipes
            </Link>
            <Link to="#" className="text-white hover:text-gray-300">
              Tutorial
            </Link>
          </div>
        </div>
      </section>
      <section>
        <About></About>
      </section>
      <section className="bg-blue-950 py-8">
        <div className="text-center">
          <h2
            className="text-green-400 text-4xl font-medium border-b-4 inline-block "
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Our Recipes
          </h2>
          <p className="text-white text-lg mb-4 md:mb-8 mt-4 ">
            Everything you need to know about us
          </p>
        </div>
        <div className="grid grid-cols-3 justify-center ps-4 gap-4">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe}></RecipeCard>
          ))}
        </div>
        <Link
          to="/recipes"
          className="flex justify-center"
        >
          <div className="px-8 py-4 mt-8 bg-green-400 hover:bg-green-600 text-white flex items-center gap-1">
            <span>Load More </span>
            <BsArrowRepeat />
          </div>
        </Link>
      </section>
      <div
        className="absolute w-0 h-0 border-l-[635px] border-l-transparent
        border-t-[75px] border-t-blue-950
        border-r-[635px] border-r-transparent
        "
      ></div>
      <section className="px-2 md:px-10 bg-white">
        <div className="text-center pt-24">
          <h2
            className="text-green-400 text-4xl font-medium border-b-4 inline-block "
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Our chef
          </h2>
          <p className="text-gray-500 text-lg mb-4 md:mb-8 mt-4 ">
            Everything you need to know about us
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 md:mt-12 pb-8">
          {chefsData.map((chefData) => (
            <ChefCard key={chefData.id} chefData={chefData}></ChefCard>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
