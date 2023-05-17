import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { DataContext } from "../store/DataProvider";

export const Navbar = () => {
  const { user, setUser } = useContext(DataContext);

  const navigate = useNavigate()

  const logout = (e) => {
    e.preventDefault()

    setUser() // clear user in state

    navigate("/");
  };

  console.log({ user })

  return (
    <nav className="flex justify-center gap-4">
      {!user && <NavLink to="/">Login</NavLink>}
      {user && <NavLink to="/dashboard">Dashboard</NavLink>}
      {user && <NavLink to="#" onClick={ logout }>Logout</NavLink>}
    </nav>
  );
};
