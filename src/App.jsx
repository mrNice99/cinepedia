//other
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
//pages and components
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import MoviePage from "./Pages/MoviePage/MoviePage";
import About from "./Pages/About/About";
import Support from "./Pages/Support/Support";
import NotFound from "./Pages/NotFound/NotFound";
//other
import "./styles/index.scss";

const queryClient = new QueryClient();

const App = () => {
  return (
    <div className="app-container">
      <QueryClientProvider client={queryClient}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />
            <Route path="/movie/:movieId" element={<MoviePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </QueryClientProvider>
    </div>
  );
};

export default App;
