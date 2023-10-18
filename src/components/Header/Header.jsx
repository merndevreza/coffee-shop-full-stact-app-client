import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-theme-coffee ">
      <div className="navbar container mx-auto justify-between py-6">
        <h3 className="text-5xl text-[#fff]">Espresso Emporium</h3>
        <nav>
         <ul className="text-[#fff] flex gap-4 text-lg">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/coffee">Add Coffee</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
            <li><NavLink to="/login">login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
         </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
