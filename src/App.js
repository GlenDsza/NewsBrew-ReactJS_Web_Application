import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import LoadingBar from "react-top-loading-bar";
import News from "./components/News";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState("light");
  const [query, setQuery] = useState("query");

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#3D3D3D";
    }
  };

  const chooseKey = (key) => {
    setQuery(key);
  };

  return (
    <div>
      <Router>
        <Navbar
          title="NewsBrew"
          chooseKey={chooseKey}
          mode={mode}
          toggleMode={toggleMode}
        />
        <LoadingBar height={3} color="#1D2BD1" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                mode={mode}
                search={false}
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={9}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                mode={mode}
                search={false}
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={9}
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                mode={mode}
                search={false}
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={9}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                mode={mode}
                search={false}
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={9}
                country="in"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                mode={mode}
                search={false}
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={9}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                mode={mode}
                search={false}
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={9}
                country="in"
                category="technology"
              />
            }
          />

          <Route
            exact
            path="/search/:query"
            element={
              <News
                mode={mode}
                search={true}
                setProgress={setProgress}
                apiKey={apiKey}
                key={query}
                pageSize={9}
                country="in"
                category="search"
              />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
