import React from "react";

const Home = () => {
  return (
    <>
      <section className="h-full w-full">
        <div className="grid grid-cols-3 px-10">
            <div className="absolute bottom-0 left-44">
            <img
            className="h-5/6 w-5/6 col-span-1"
            src="http://wethemez.com/demo/manganted/img/home2-img.png"
            alt=""
          />
            </div>
          <div className="col-span-2 text-center absolute bottom-1/3 left-1/3">
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
      </section>
    </>
  );
};

export default Home;
