import { NavLink } from "react-router-dom";
import logo from '../../assets/Logo.png'
const Nav = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="flex-1">
     <img className="w-[120px] md:w-36 lg:w-48 " src={logo} alt="" />
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 gap-2 lg:gap-5">
     <NavLink  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline text-red-500 font-semibold  lg:text-xl" : "font-semibold  lg:text-xl"
  } to='/'>Home</NavLink>
     <NavLink  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline text-red-500 font-semibold lg:text-xl" : "font-semibold lg:text-xl"
  } to='/donation'>Donation</NavLink>
     <NavLink  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline text-red-500 font-semibold lg:text-xl" : "font-semibold lg:text-xl"
  } to='/statistics'>Statistics</NavLink>
    </ul>
  </div>
</div>
    );
};

export default Nav;