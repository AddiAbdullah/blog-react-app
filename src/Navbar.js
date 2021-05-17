import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>LOQAAT</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/todo">Todo</Link>
      </div>
    </nav>
  );
};

export default Navbar;
