import { NavLink } from "react-router-dom";

function MainNav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/shop">Store</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/news">News</NavLink>
      <NavLink to="/support">Support</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  )
}

export default MainNav;