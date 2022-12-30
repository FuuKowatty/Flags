//Zmieniaj linki w filtrach bo wtedy navigate dobrze cofa

import { useEffect, useState } from "react";

//components
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Country from "./pages/Country";
//styles
import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";


function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.style.background = "hsl(207, 26%, 17%)";
    } else {
      document.documentElement.style.background = "hsl(0, 0%, 98%)";
    }
  }, [theme]);

  const changeMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`${
        theme === "dark" ? "dark" : null
      } App flex flex-col items-center`}
    >
      <BrowserRouter>
        <Navbar changeMode={changeMode} mode={theme} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/name/:id" element={<Country />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
