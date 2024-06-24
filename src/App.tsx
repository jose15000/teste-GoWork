// src/App.js
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes/themes";
import { GlobalStyles } from "./themes/globalStyles";
import Navbar from "./components/Navbar/View";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Footer  from "./components/Footer/View";
import Header from "./components/Header/View";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Router>
          <Navbar toggleTheme={toggleTheme} />
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
