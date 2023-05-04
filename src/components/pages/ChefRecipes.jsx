import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ChefRecipeCard from "./ChefRecipeCard";
import { Spinner } from "flowbite-react";
import LazyLoad from "react-lazy-load";
import useTitle from "../../hooks/useTitle";

const ChefRecipes = () => {
  useTitle('Chef Recipes');
  const [loading, setLoading] = useState(true);
  const [fetchData, setFetchData] = useState();
  const chefRecipesData = useLoaderData();
  const chefId = [...chefRecipesData];
  const id = chefId[0].chef_id;
  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch("https://chef-recipe-hunter-server-fakhrul-hasan.vercel.app/chefsData")
      ).json();
      setFetchData(data);
      setLoading(false);
    };
    dataFetch();
  }, []);
  if (loading) {
    return (
      <div className="text-center">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    );
  }
  const chefData = () => {
    const chef = fetchData.find((chef) => chef.id == id)
    return chef;
  };
  return (
    <>
      <div className="bg-white mt-8 pt-8 flex flex-col items-center px-20 mx-20 border rounded">
        <h2
          className="text-green-400 text-4xl font-medium border-b-4 inline-block mb-4"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          {chefData().name}
        </h2>
        <div className="grid grid-cols-3 gap-4 ">
          <div className="col-span-1">
            <LazyLoad height={340}>
              <img className="h-72" src={chefData().picture} alt="" />
            </LazyLoad>
          </div>
          <div className="col-span-2">
            <p>
              <span className="text-green-400">Lorem ipsum</span> dolor, sit
              amet consectetur adipisicing elit. Optio perferendis pariatur, sit
              ipsam omnis eveniet suscipit incidunt, minus laboriosam nam modi
              ab hic ratione commodi in quod maxime? Deleniti optio amet ipsa
              eligendi non quia tempora labore architecto, iure necessitatibus
              cupiditate odit doloribus exercitationem culpa provident quasi
              sequi praesentium quae!
            </p>
            <h5 className="font-semibold mt-4">Likes: {chefData().num_likes}</h5>
            <h5 className="font-semibold">Recipes: {chefRecipesData.length} types</h5>
            <h5 className="font-semibold">Experience: {chefData().experience}</h5>
          </div>
        </div>
      </div>
      <section className="flex flex-col items-center mt-12">
        {chefRecipesData.map((chefRecipe) => (
          <ChefRecipeCard key={chefRecipe.id} chefRecipe={chefRecipe}></ChefRecipeCard>
        ))}
      </section>
    </>
  );
};

export default ChefRecipes;
