//other
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

//components
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

//pages
import Home from "./Pages/Home/Home";
import MoviePage from "./Pages/MoviePage/MoviePage";
import About from "./Pages/About/About";
import Support from "./Pages/Support/Support";

//styles
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
            <Route path="/movie/:movieId" element={<MoviePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />
          </Routes>
          <Footer />
        </Router>
      </QueryClientProvider>
    </div>
  );
};

export default App;
