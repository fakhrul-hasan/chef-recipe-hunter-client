import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <div>
      <Navbar
    className="!bg-green-400 !px-10"
  fluid={true}
  rounded={true}
>
  <Navbar.Brand to='/'>
    <img
      src="http://wethemez.com/demo/manganted/img/logo.png"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
      S-peac-hless
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
  <Button
      outline={true}
      gradientDuoTone="greenToBlue"
    >
      Login
    </Button>
    <Dropdown
      arrowIcon={false}
      inline={true}
      label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>}
    >
      <Dropdown.Header>
        <span className="block text-sm">
          Bonnie Green
        </span>
        <span className="block truncate text-sm font-medium">
          name@flowbite.com
        </span>
      </Dropdown.Header>
      <Dropdown.Item>
        Dashboard
      </Dropdown.Item>
      <Dropdown.Item>
        Settings
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>
        Sign out
      </Dropdown.Item>
    </Dropdown>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <NavLink
      to='/'
      className={({ isActive }) => (isActive ? 'active' : 'default')}
    >
      Home
    </NavLink>
    <NavLink
      to='/blog'
      className={({ isActive }) => (isActive ? 'active' : 'default')}
    >
      Blog
    </NavLink>
    <NavLink
      to='/about'
      className={({ isActive }) => (isActive ? 'active' : 'default')}
    >
      About
    </NavLink>
    
  </Navbar.Collapse>
</Navbar>
    </div>
  );
};

export default Header;
