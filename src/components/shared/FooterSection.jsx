import { Button, Footer } from "flowbite-react";
import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <Footer bgDark={true}>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-2 md:gap-8 py-4 px-2 md:px-10 md:grid-cols-4 bg-blue-950">
          <div className="mb-4 md:mb-0">
            <Footer.Title title="Kitchen" className="text-green-400 mb-0" />
            <hr className="mb-4" />
            <Footer.LinkGroup col={true}>
              <Footer.Link className="text-white" href="#">Learn</Footer.Link>
              <Footer.Link className="text-white" href="#">Craft</Footer.Link>
              <Footer.Link className="text-white" href="#">Recipe</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Store" className="text-green-400 mb-0" />
            <hr className="mb-4" />
            <Footer.LinkGroup col={true}>
              <Footer.Link className="text-white" href="#">Craft Your Own</Footer.Link>
              <Footer.Link className="text-white" href="#">Store Locator</Footer.Link>
              <Footer.Link className="text-white" href="#">Return Policy</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="About" className="text-green-400 mb-0" />
            <hr className="mb-4" />
            <Footer.LinkGroup col={true}>
              <Footer.Link className="text-white" href="#">About Us</Footer.Link>
              <Footer.Link className="text-white" href="#">Contact</Footer.Link>
              <Footer.Link className="text-white" href="#">Our Team</Footer.Link>
              <Footer.Link className="text-white" href="#">Privacy Policy</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title
              title="Join Our NewsLetter"
              className="text-green-400 mb-0"
            />
            <hr className="mb-4" />
            <Footer.LinkGroup col={true}>
              <h6 className="md:text-xl font-semibold text-white">
                We will email in a good taste
              </h6>
              <input className="w-full" type="email" placeholder="Enter your email address" />
              <Button className="bg-green-400 hover:bg-green-600">JOIN</Button>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-green-400 py-2 md:py-6 px-10 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright className="text-white text-center" href="#" by="S-peac-hless™" year={2023} />
          <div className="mt-4 flex space-x-6 sm:mt-0 justify-center">
            <Footer.Icon className="text-white" href="#" icon={BsFacebook} />
            <Footer.Icon className="text-white" href="#" icon={BsInstagram} />
            <Footer.Icon className="text-white" href="#" icon={BsTwitter} />
            <Footer.Icon className="text-white" href="#" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterSection;
