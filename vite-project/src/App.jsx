/* import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; */
import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import AboutMe from "./Pages/AboutMe";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/aboutme", element: <AboutMe /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
