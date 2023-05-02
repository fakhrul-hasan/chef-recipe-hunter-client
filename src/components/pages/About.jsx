import React from "react";

const About = () => {
  return (
    <div className="mt-8 flex flex-col items-center px-40">
      <h2
        className="text-green-400 text-4xl font-medium border-b-4 inline-block"
        style={{ fontFamily: "'Great Vibes', cursive" }}
      >
        About us
      </h2>
      <p className="text-yellow-400">Everything you need to know about us</p>
      <div className="grid grid-cols-2">
        <div className="flex items-center">
          <p>
            <span className="text-green-400">Lorem ipsum</span> dolor, sit amet
            consectetur adipisicing elit. Optio perferendis pariatur, sit ipsam
            omnis eveniet suscipit incidunt, minus laboriosam nam modi ab hic
            ratione commodi in quod maxime? Deleniti optio amet ipsa eligendi
            non quia tempora labore architecto, iure necessitatibus cupiditate
            odit doloribus exercitationem culpa provident quasi sequi
            praesentium quae!
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="http://wethemez.com/demo/manganted/img/about-us-img.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
