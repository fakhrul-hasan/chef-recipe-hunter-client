import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import { AuthContext } from "../../Providers/AuthProvider";

const ChefRecipes = () => {
    const {loading} = useContext(AuthContext);
  const [fetchData, setFetchData] = useState();
  const chefRecipesData = useLoaderData();
  const chefId = [...chefRecipesData];
  const id = chefId[0].chef_id;
  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch("http://localhost:3000/chefsData")
      ).json();
      setFetchData(data);
    };
    dataFetch();
  }, []);
  //   const chef = fetchData.find(c=> c.id == id);
  console.log(fetchData);
  return (
    <>
      <div className="bg-white pt-8 flex flex-col items-center px-40">
        <h2
          className="text-green-400 text-4xl font-medium border-b-4 inline-block"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          About us
        </h2>
        <p className="text-yellow-400">Everything you need to know about us</p>
        <div className="grid grid-cols-2">
          <div className="flex justify-center">
            <img src={[chefRecipesData[0]].chef_id} alt="" />
          </div>
          <div className="flex items-center">
            <p>
              <span className="text-green-400">Lorem ipsum</span> dolor, sit
              amet consectetur adipisicing elit. Optio perferendis pariatur, sit
              ipsam omnis eveniet suscipit incidunt, minus laboriosam nam modi
              ab hic ratione commodi in quod maxime? Deleniti optio amet ipsa
              eligendi non quia tempora labore architecto, iure necessitatibus
              cupiditate odit doloribus exercitationem culpa provident quasi
              sequi praesentium quae!
            </p>
          </div>
        </div>
      </div>
      <section>
        {chefRecipesData.map((chefRecipe) => (
          <RecipeCard key={chefRecipe.id} chefRecipe={chefRecipe}></RecipeCard>
        ))}
      </section>
    </>
  );
};

export default ChefRecipes;
