import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import LoadingBar from "react-top-loading-bar";
import News from "./components/News";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  const [query, setQuery] = useState('query');

  const chooseKey = (key) => {
    setQuery(key)
  };
  
  return (
    <div>
      <Router>
        <Navbar title="NewsBrew" chooseKey={chooseKey} />
        <LoadingBar height={3} color="#1D2BD1" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
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
            path="/science"
            element={
              <News
                search={false} 
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={9}
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
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
