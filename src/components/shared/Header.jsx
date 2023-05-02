import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import './Header.css';
import { AuthContext } from "../../Providers/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import userPhoto from '../../assets/images/user-photo.jpg';

const Header = () => {
  const {logout, user} = useContext(AuthContext);
  const handleLogout=()=>{
    logout()
    .then(()=>{
      toast.success('Logout successfull!')
    })
    .catch(error=>{
      console.error(error);
    })
  }
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
    <span className="self-center whitespace-nowrap text-2xl font-semibold text-white">
      S-peac-hless
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
    {user ? <Dropdown
      arrowIcon={false}
      inline={true}
      label={<Avatar alt="User settings" img={user.photoURL || userPhoto} rounded={true}/>}
    >
      <Dropdown.Header>
        <span className="block text-sm">
          {user.displayName || 'Anonymous'}
        </span>
        <span className="block truncate text-sm font-medium">
          {user.email}
        </span>
      </Dropdown.Header>
      <Dropdown.Item>
        Dashboard
      </Dropdown.Item>
      <Dropdown.Item>
        Settings
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={handleLogout}>
        Sign out
      </Dropdown.Item>
    </Dropdown>
     : <NavLink
      to="/login"
      className='outline px-4 py-2 rounded outline-white bg-white text-green-400 hover:bg-green-400 hover:text-white'
    >
      Login
    </NavLink>}
  
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <NavLink
      to='/'
      className={({ isActive }) => (isActive ? 'active' : 'text-white')}
    >
      Home
    </NavLink>
    <NavLink
      to='/blog'
      className={({ isActive }) => (isActive ? 'active' : 'text-white')}
    >
      Blog
    </NavLink>
    <NavLink
      to='/about'
      className={({ isActive }) => (isActive ? 'active' : 'text-white')}
    >
      About
    </NavLink>
    
  </Navbar.Collapse>
</Navbar>
<div><Toaster/></div>
    </div>
  );
};

export default Header;
