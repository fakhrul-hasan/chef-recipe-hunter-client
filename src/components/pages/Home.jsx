import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ChefCard from "./ChefCard";
import About from "./About";

const Home = () => {
  const chefsData = useLoaderData();
  return (
    <>
      <section className="min-h-screen w-full">
        <div className="flex gap-8 items-end px-10 h-96">
          <div className="flex-none">
            <img
              className="h-4/5 w-96 col-span-1 absolute bottom-0"
              src="http://wethemez.com/demo/manganted/img/home2-img.png"
              alt=""
            />
          </div>
          <div className="col-span-2 text-center flex flex-col justify-center grow max-w-2xl absolute bottom-1/3 right-36">
            <h2 className="text-white text-4xl font-bold">
              Contemporary western cuisine for all
            </h2>
            <h3 className="text-white text-3xl font-bold">
              Find Anything What you Want to Eat!
            </h3>
            <p className="text-white">
              {" "}
              What is our stereotypical impression of western cuisine? Is it the
              exorbitant prices, high quality of ingredients, food styling,
              comfortable venue, or service charges? If it is, rest assured Chef
              Recipe™ has those as the elements in running our business for
              heartlanders except for the first and last... more>>
            </p>
          </div>
        </div>
        <div className="bg-green-400 mt-28 absolute w-full flex items-center justify-around">
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
            <Link to="#" className="text-white hover:text-gray-300">
              Tutorial
            </Link>
          </div>
        </div>
      </section>
      <section>
        <About></About>
      </section>
      <section className="px-10">
        <div className="grid grid-cols-3 gap-4 mt-12">
          {chefsData.map((chefData) => (
            <ChefCard key={chefData.id} chefData={chefData}></ChefCard>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
