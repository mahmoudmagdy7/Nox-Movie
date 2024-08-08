import "./App.css";
import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <NavLink to="/">home</NavLink>
        <NavLink to="about">about</NavLink>
        <NavLink to="/dsf">404</NavLink>
      </nav>
      <Outlet />
      <p>footer</p>
    </>
  );
}

export default App;
