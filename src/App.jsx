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
import NotFound from "./Pages/NotFound/NotFound";

//styles
import "./styles/index.scss";

const queryClient = new QueryClient();

const App = () => {
  return (
    <div className="app-container">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <NavBar />
                  <Home />
                  <Footer />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <NavBar />
                  <About />
                  <Footer />
                </>
              }
            />
            <Route
              path="/support"
              element={
                <>
                  <NavBar />
                  <Support />
                  <Footer />
                </>
              }
            />
            <Route
              path="/movie/:movieId"
              element={
                <>
                  <NavBar />
                  <MoviePage />
                  <Footer />
                </>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
};

export default App;
