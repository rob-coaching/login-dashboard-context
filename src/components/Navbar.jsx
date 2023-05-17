import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { DataContext } from "../store/DataProvider";

export const Navbar = () => {
  const { user, setUser } = useContext(DataContext);

  const navigate = useNavigate()

  const logout = (e) => {
    e.preventDefault()

    // todo: do lougout (=clear user in state)
  };

  console.log({ user })

  return (
    <nav className="flex justify-center gap-4">
      <NavLink to="/">Login</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="#" onClick={ logout }>Logout</NavLink>
    </nav>
  );
};
