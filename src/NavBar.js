import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>Beney Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
      </div>
    </nav>
  );
};

export default NavBar;
