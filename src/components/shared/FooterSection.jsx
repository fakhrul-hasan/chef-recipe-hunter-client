import { Button, Footer } from "flowbite-react";
import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";

const FooterSection = () => {
  return (
    <Footer bgDark={true}>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 py-8 px-10 md:grid-cols-4">
          <div>
            <Footer.Title title="Kitchen" className="text-green-400 mb-0" />
            <hr className="mb-4" />
            <Footer.LinkGroup col={true}>
              <Footer.Link href="#">Learn</Footer.Link>
              <Footer.Link href="#">Craft</Footer.Link>
              <Footer.Link href="#">Recipe</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Store" className="text-green-400 mb-0" />
            <hr className="mb-4" />
            <Footer.LinkGroup col={true}>
              <Footer.Link href="#">Craft Your Own</Footer.Link>
              <Footer.Link href="#">Store Locator</Footer.Link>
              <Footer.Link href="#">Return Policy</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="About" className="text-green-400 mb-0" />
            <hr className="mb-4" />
            <Footer.LinkGroup col={true}>
              <Footer.Link href="#">About Us</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
              <Footer.Link href="#">Our Team</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title
              title="Join Our NewsLetter"
              className="text-green-400 mb-0"
            />
            <hr className="mb-4" />
            <Footer.LinkGroup col={true}>
              <h6 className="text-xl font-semibold">
                We will email in a good taste
              </h6>
              <input type="email" placeholder="Enter your email address" />
              <Button className="bg-green-400">JOIN</Button>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-green-400 py-6 px-10 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright className="text-white" href="#" by="S-peac-hless™" year={2023} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
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
